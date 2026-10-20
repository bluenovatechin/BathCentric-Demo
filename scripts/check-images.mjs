// Audits every image the site references.
//   node scripts/check-images.mjs            -> report; exits 1 only if a referenced file is missing
//   node scripts/check-images.mjs --strict   -> also exits 1 on placeholders / oversize / wrong shape
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const publicDir = path.join(root, 'public');
const strict = process.argv.includes('--strict');

const MAX_KB = 500;
const MIN_WIDTH = 1600;
// Landscape between 3:2 (1.5) and 16:9 (1.78) all crop cleanly in the site's cards. See IMAGE_BRIEF.md.
const MIN_RATIO = 1.4;
const MAX_RATIO = 1.9;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === 'dist') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(jsx?|css|html)$/.test(e.name)) out.push(p);
  }
  return out;
}

function dimensions(buf) {
  if (buf[0] === 0x89 && buf[1] === 0x50) return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) { i++; continue; }
    const m = buf[i + 1];
    if (m >= 0xc0 && m <= 0xc3) return { w: buf.readUInt16BE(i + 7), h: buf.readUInt16BE(i + 5) };
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}

// image -> where it is used
const used = new Map();
for (const file of [...walk(path.join(root, 'src')), path.join(root, 'index.html')]) {
  const text = fs.readFileSync(file, 'utf8');
  for (const m of text.matchAll(/\/images\/([\w.-]+\.(?:jpg|jpeg|png|webp))/g)) {
    const spot = path.relative(root, file).replace(/\\/g, '/');
    if (!used.has(m[1])) used.set(m[1], new Set());
    used.get(m[1]).add(spot.replace(/^src\/(pages|components)\//, ''));
  }
}

const missing = [];
const info = [];
const byHash = new Map();
for (const [name, where] of [...used].sort()) {
  const p = path.join(publicDir, 'images', name);
  if (!fs.existsSync(p)) { missing.push(name); continue; }
  const buf = fs.readFileSync(p);
  const d = dimensions(buf);
  const hash = crypto.createHash('md5').update(buf).digest('hex');
  if (!byHash.has(hash)) byHash.set(hash, []);
  byHash.get(hash).push(name);
  info.push({ name, kb: Math.round(buf.length / 1024), w: d?.w, h: d?.h, hash, where: [...where] });
}

const issues = [];
for (const i of info) {
  const notes = [];
  if (i.kb > MAX_KB) notes.push(`${i.kb} KB (> ${MAX_KB} KB — compress)`);
  if (i.w && i.w < MIN_WIDTH) notes.push(`only ${i.w}px wide (< ${MIN_WIDTH})`);
  if (i.w && i.h) {
    const r = i.w / i.h;
    if (r < MIN_RATIO || r > MAX_RATIO) notes.push(`shape ${r.toFixed(2)}:1 — use landscape 3:2 (1.5) to 16:9 (1.78)`);
  }
  const twins = byHash.get(i.hash).filter((n) => n !== i.name);
  if (twins.length) notes.push(`byte-identical to ${twins.join(', ')} -> placeholder / reused picture`);
  if (notes.length) issues.push({ ...i, notes });
}

console.log(`\nImages referenced by the site: ${used.size}   present: ${info.length}   missing: ${missing.length}\n`);
if (missing.length) {
  console.log('MISSING FILES (broken images on the site):');
  missing.forEach((n) => console.log(`  x ${n}   used in ${[...used.get(n)].join(', ')}`));
  console.log('');
}
if (issues.length) {
  console.log(`NEEDS ATTENTION (${issues.length}):`);
  issues.forEach((i) => {
    console.log(`  ! ${i.name}  [${i.w}x${i.h}, ${i.kb} KB]  used in ${i.where.join(', ')}`);
    i.notes.forEach((n) => console.log(`      - ${n}`));
  });
} else {
  console.log('All referenced images are unique, correctly shaped, sharp enough and within size budget.');
}
const ready = info.length - issues.length;
console.log(`\nReady: ${ready}/${used.size - missing.length}`);
process.exit(missing.length || (strict && issues.length) ? 1 : 0);
