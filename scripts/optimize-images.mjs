// Converts the full-size master PNGs into web-ready JPGs the pages reference.
//
//   masters:  source-images/*.png          (kept out of public/ so they never ship)
//   output:   public/images/<same-name>.jpg
//
//   node scripts/optimize-images.mjs            convert everything in source-images/
//   node scripts/optimize-images.mjs a b        convert only source-images/a.png and b.png
//
// Drop a new master PNG into source-images/ (same base name as the page expects), run the script, done.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'source-images');
const outDir = path.join(root, 'public', 'images');

const MAX_WIDTH = 2000; // 2x a 1000px card, and enough for a full-bleed hero on a large screen
const TARGET_KB = 380;  // aim under this; steps quality down if a photo is unusually detailed
const QUALITIES = [82, 78, 74, 70];

// masters whose file name differs from the name the pages use
const RENAME = { 'hw-hardware': 'hardware' };

const only = process.argv.slice(2);
const masters = fs.readdirSync(srcDir).filter((f) => f.toLowerCase().endsWith('.png')).map((f) => f.slice(0, -4));
let done = 0;
let totalIn = 0;
let totalOut = 0;

for (const name of masters.sort()) {
  if (only.length && !only.includes(name)) continue;
  const outName = RENAME[name] ?? name;
  // a master listed as a rename source wins over a same-named accidental copy
  if (!RENAME[name] && Object.values(RENAME).includes(name)) {
    console.log(`skip   ${name}.png  (superseded by ${Object.keys(RENAME).find((k) => RENAME[k] === name)}.png)`);
    continue;
  }
  const input = path.join(srcDir, name + '.png');
  const meta = await sharp(input).metadata();
  const width = Math.min(meta.width, MAX_WIDTH);

  let buf;
  let used;
  for (const q of QUALITIES) {
    buf = await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .flatten({ background: '#ffffff' }) // PNGs carry an alpha channel; JPG has none
      .jpeg({ quality: q, mozjpeg: true, progressive: true })
      .toBuffer();
    used = q;
    if (buf.length / 1024 <= TARGET_KB) break;
  }
  fs.writeFileSync(path.join(outDir, outName + '.jpg'), buf);
  const inKb = Math.round(fs.statSync(input).size / 1024);
  const outKb = Math.round(buf.length / 1024);
  totalIn += inKb;
  totalOut += outKb;
  done++;
  console.log(`ok     ${outName}.jpg  ${meta.width}x${meta.height} -> ${width}x${Math.round((meta.height * width) / meta.width)}  q${used}  ${inKb} KB -> ${outKb} KB`);
}

console.log(`\nConverted ${done} images: ${(totalIn / 1024).toFixed(0)} MB -> ${(totalOut / 1024).toFixed(1)} MB`);
