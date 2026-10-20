# BathCentric — Image Brief (52 images)

Every image on the site, what it must show, and a prompt to generate it.
**Workflow (current):** generate a PNG → save it in `source-images/` with the exact base name below → run `npm run optimize:images` (converts it to a ~100–200 KB web JPG in `public/images/`) → run `npm run check:images`.
The checker tells you which files are still placeholders, too small, too heavy or the wrong shape.

## Status
- **51 of 52 delivered and wired in.** Only `hero.jpg` is still the old image (1376 px wide, 654 KB) — no `hero.png` was supplied.
- Needs a redo: `bathroom-renovation` (the worker's head is a solid black disc) and `glass-fluted` (the blurred figure behind the glass reads as unclothed).
- Every delivered image carries the generator's small ✦ sparkle in the bottom-right corner.
- `hw-hardware.png` is published as `hardware.jpg`, because the supplied `hardware.png` was a byte-for-byte copy of the drain image.

> Why this exists: an audit of the previous images found house exteriors on the Drains and Glass pages,
> bedrooms and living rooms in Hardware and Projects, a living room as the "arch mirror", and an installer
> whose shirt printed another company's name and phone number. None of that may appear on the site.

---

## 1. Global style — put this at the start of EVERY prompt

```
Photorealistic architectural interior photography, full-frame camera, 24–35mm lens,
soft natural daylight from a window, warm neutral palette (ivory limestone, white oak,
champagne-brass accents), clean uncluttered composition, straight vertical lines,
subtle depth of field, premium editorial magazine quality, Indian residential setting.
```

## 2. Negative prompt — use on EVERY image

```
text, letters, numbers, logos, brand names, watermark, signage, printed shirts, phone numbers,
people's faces, distorted or extra hands, warped or melted glass, impossible reflections,
extra or duplicated fixtures, floating objects, oversaturated colours, HDR glow, CGI or
3D-render look, cartoon, fisheye distortion, dutch angle, clutter
```

## 3. Technical spec

| Rule | Value |
|---|---|
| Shape | Landscape, **3:2 or 16:9** both work (the site crops to 4:3 / near-square in cards). Hero: 16:9 |
| Size | 2400 px wide or more is ideal; never below 1600 px wide. Masters are downsized to 2000 px for the site |
| Format | JPG, quality ~82, **under 350 KB each** (hard limit 500 KB) |
| Framing | Keep the key subject inside the **central 70 %** of the frame. The site crops the same file to 4:3, square-ish and wide banners, so edges get cut |
| People | Never show faces. Hands, backs, silhouettes only. Plain uniforms with **no logos or text** |
| Consistency | Same warm palette and brass accents across all images. Generate section by section using your first good image as a style reference |
| Compress | Any image tool, e.g. squoosh.app — export JPG at ~82 quality |

**Hero exception:** the headline sits on the **left 45 %**, so put the subject (the glass shower) in the **right 55 %**
and keep the left calm and slightly darker. The image is also cropped tall on phones, so keep the subject in the centre-right band.

---

## 4. Home — hero

| File | Section | Subject |
|---|---|---|
| `hero.jpg` | Home hero · "Transform your bathroom with bespoke design & glass" | Luxury bathroom, frameless clear-glass walk-in shower on the **right** (brushed-brass rainfall head, brass hinges and handle), stone-tiled walls, warm window light. Left side: calm wall or vanity with soft shadow. |

## 5. "What size is your bathroom?" — three specific bathrooms

These must read as clearly different **space, layout and luxury level** at a glance.

| File | Tab | Must show | Prompt subject |
|---|---|---|---|
| `compact-bathroom.jpg` | Compact Apartment — under 45 sq ft, ~5×7 ft | Small, practical, realistic. Everything within arm's reach. | Small Indian apartment bathroom about 5×7 ft: 900 mm frameless glass shower screen along one end, wall-hung toilet, compact 450 mm wall-hung basin with slim vanity, recessed niche and one narrow wall cabinet, light-grey tiles, one small window. Bright, tidy, honest proportions — visibly small but well planned. |
| `medium-bathroom.jpg` | Master Ensuite — 45–85 sq ft | Spacious, comfortable circulation, higher-end finishes. | Modern master ensuite about 7×10 ft: 1200 mm frameless swing-door glass shower with brass hinges, floating double-drawer oak vanity with stone top and framed LED mirror, wall-hung toilet in its own alcove, large-format ivory tiles, brushed-brass fittings, good walking space. |
| `spacious-bathroom.jpg` | Villa / Luxury Suite — 85+ sq ft | Grand, premium, resort-like. | Large luxury villa bathroom 8×12 ft or more: freestanding stone bathtub, separate L-shaped fluted-glass shower, double marble vanity with two round mirrors, premium sanitaryware, book-matched marble walls, brass fittings, a tall window, lots of empty floor. |

## 6. "Designed as per your space, layout & budget" — services

| File | Where | Must show | Prompt subject |
|---|---|---|---|
| `service-design-implementation.jpg` | Home + About ("Turnkey design & implementation") | Design work meeting a real bathroom. | Finished modern bathroom with a marble vanity in the foreground carrying a tile and material sample board, a printed floor plan (abstract lines, no text) and a tape measure; hands only, pointing at the plan. |
| `bathroom-renovation.jpg` | Home + About ("Bathroom redesign & renovation") | An **actual renovation in progress**, not a finished room. | Bathroom stripped to bare walls being renovated: new waterproofed floor, framed shower niche, installer's hands and back laying large-format tile with a notched trowel, spacers, tile stack, tools on a bucket. Plain grey work clothes, no logos, no face. |
| `bathroom-maintenance.jpg` | Home + About ("Preventive maintenance & care") | **Real bathroom maintenance activity.** | Technician (side/back view, plain grey uniform, no logos) squeegee-cleaning a frameless shower glass panel; open toolkit with silicone gun and drain rod on the floor; bright bathroom, visible glass streak-free on one side. |

## 7. Shower enclosures (each file is reused on Home, Enclosures and its product page)

Each image must show the **complete** enclosure so it is identifiable in a small card.

| File | Must show | Prompt subject |
|---|---|---|
| `fixed.jpg` | Fixed walk-in screen | Barrier-free wet room with a single fixed 10 mm clear glass panel, slim matte-black ceiling stabilizer bar, no door, flush floor with linear drain, rainfall head, dark stone tiles. |
| `swing.jpg` | Frameless swing door | Frameless hinged glass door in a stone-tiled alcove, **two solid-brass hinges and an arched brass handle clearly visible**, magnetic seal edge, door slightly open. |
| `sliding.jpg` | Sliding system | Frameless sliding glass door on a slim top track with roller carriers, in a compact alcove, closed, brushed stainless or matte-black track, clean tile. |
| `l-shaped.jpg` | 90° corner enclosure | Two glass panels meeting at a 90° corner, one hinged door plus a fixed return panel, corner clamp visible, viewed from outside the cubicle. |

## 8. Process ("How it works")

| File | Step | Prompt subject |
|---|---|---|
| `process-consultation.jpg` | Enquiry & layout assessment | Two people (backs or hands only) reviewing a bathroom layout sketch on a tablet inside a bathroom, natural light. |
| `process-measurement.jpg` | Digital laser measurement | Technician's hand holding a laser distance meter against a tiled bathroom wall, red laser line visible, tape measure and spirit level nearby. |
| `process-quotation.jpg` | Itemized 3D quotation & CAD | Laptop on a desk showing an abstract 3D bathroom drawing (lines only, **no legible text**), pencil and material samples beside it. |
| `process-glass-manufacturing.jpg` | CNC manufacturing & tempering | Clean glass workshop: a large clear glass sheet on a CNC cutting or edge-polishing table, safety glasses, no faces, no signage. |
| `process-installation.jpg` | Certified master installation | Two installers (backs/sides, plain uniform) lifting a frameless glass panel with black suction-cup lifters into a finished shower. |
| `team-installers.jpg` | About · "Certified in-house crews" | Two installers in plain grey uniforms standing in a finished bathroom with a toolbox and a levelling tool, seen from behind/side. |
| `about.jpg` | About · "Rejecting the one-size-fits-all box" | Custom-cut glass panel being fitted precisely to a slightly out-of-square tiled wall, spirit level on the glass, close crop showing the tight fit. |

## 9. Glass (six swatch cards)

The **type of glass must be recognisable at thumbnail size** — this is the whole point of each card.
They display at about 1.9:1, so keep the glass in a horizontal band through the centre.

| File | Glass | Prompt subject |
|---|---|---|
| `glass-lowiron.jpg` | Low-iron ultra-clear | Frameless low-iron shower panel with **no green tint at the edge**, crisp white marble visible through it, polished edge in focus. |
| `glass-fluted.jpg` | Fluted / reeded | Vertical **ribbed reeded glass** shower panel, light diffusing through the flutes, blurred silhouette behind, matte-black frame line. |
| `glass-clear.jpg` | Clear toughened | Standard clear toughened glass door, faint green edge visible, chamfered pencil edge, chrome hinge. |
| `glass-frosted.jpg` | Acid-etched frosted | Satin acid-etched **frosted** glass partition, uniformly milky, soft shapes behind, privacy obvious. |
| `glass-tinted-grey.jpg` | Smoked grey tint | Smoked-grey tinted shower glass, moody dark reflections, modern black fittings. |
| `glass-tinted-bronze.jpg` | Bronze tint | Warm bronze-tinted shower glass, honeyed light, brass hardware. |

## 10. Drains

| File | Must show | Prompt subject |
|---|---|---|
| `drain-tile-insert.jpg` | Invisible tile-insert channel | Low-angle close-up of a shower floor where the **floor tile sits inside the drain channel**, leaving only a thin ~4 mm slit along the wall edge. Uninterrupted tile run. |
| `drain-black.jpg` | Matte-black slotted linear drain | Close-up of a long matte-black slotted linear drain channel set in a light shower floor, water beads on the slots. |
| `drain-trap.jpg` | Anti-odour / anti-cockroach trap core | Clean product shot on stone: a stainless drain body with its removable trap cartridge lifted out, plumbing outlet visible. Studio-neutral, no text. |
| `hw-drain.jpg` | Linear shower drain & channel (Hardware) | Product shot of a brushed stainless linear drain with hair-strainer basket and lifting key beside it. |

## 11. Smart LED mirrors

Each mirror must be the hero of the frame above a real vanity.

| File | Mirror | Prompt subject |
|---|---|---|
| `mirror-arch.jpg` | Arch LED mirror (also used on Home) | Tall **arch-top** LED mirror with warm halo backlight above a floating oak vanity and stone basin, brass tap. |
| `mirror-pill.jpg` | Pill / capsule | Elongated **capsule-shaped** LED mirror with frosted border glow over a twin-basin vanity. |
| `mirror-round.jpg` | Halo circle | **Perfect circle** LED mirror with soft halo glow over a single basin, wall-mounted brass tap. |
| `mirror-rect.jpg` | Floating rectangle | **Frameless rectangular** floating mirror with frosted edge light, wide vanity, tall side shelf. |

## 12. Accessories & hardware (Hardware page)

Shown small. Use one brushed-brass finish everywhere for consistency. Product-on-surface or in-situ macro photography.

| File | Item | Prompt subject |
|---|---|---|
| `hardware.jpg` | Matching PVD finishes (also Home) | Flat-lay/wall arrangement of a towel bar, two robe hooks, a shelf and a handle, **all in the same brushed brass**, on ivory stone. |
| `hw-towelbar.jpg` | Glass-mount & wall towel bars | Solid brass towel bar mounted through a glass panel with neoprene gaskets, folded white towel. |
| `hw-hook.jpg` | Designer robe & towel hooks | Two sculptural brushed-brass hooks on a stone wall, one holding a linen robe. |
| `hw-shelf.jpg` | Floating glass shelving & clamps | Clear glass shelf held by brass clamps, holding a soap dispenser and a folded towel. |
| `hw-door-stop.jpg` | Magnetic door stops & floor buffers | Macro of a magnetic door stop and a floor buffer at the base of a glass door. |
| `hw-hinge.jpg` | Forged solid-brass hinges | Macro of a solid-brass 90°/180° glass hinge clamping a glass door edge. |
| `hw-sliding-track.jpg` | SUS 304 roller carriers | Macro of a stainless roller carrier and top track for a sliding glass door. |
| `hw-stabilizer-bar.jpg` | Stabilizer support bars & rods | Slim brass stabilizer bar running from a glass panel edge to the wall, side view. |
| `hw-handle.jpg` | Architectural handle suite | Three handles on stone: a ladder pull, a D-pull and a knob, all brushed brass. |
| `hw-wall-channel.jpg` | Slimline wall channel & floor track | Cross-section-style close-up of a slim aluminium wall channel holding a glass edge. |
| `hw-gasket.jpg` | Watertight magnetic gaskets & dams | Close-up of a clear magnetic gasket where a glass door meets a fixed panel, plus a low water dam at the threshold. |

## 13. Projects (8) — realistic finished bathrooms, one per listing

All are finished bathrooms with the named enclosure clearly visible. Never a building exterior.

| File | Project (as written on the site) | Prompt subject |
|---|---|---|
| `project-1.jpg` | Altamount Master Ensuite, Mumbai — swing, brushed brass, 10 mm low-iron | Master ensuite, frameless swing door with brushed-brass hinges and a tall ladder pull, book-matched **Calacatta marble**. |
| `project-2.jpg` | Skyline Penthouse Wetroom, Bengaluru — sliding, matte black, fluted glass | Wetroom with **fluted reeded** sliding glass and a matte-black top track, city light through a window. |
| `project-3.jpg` | Heritage Modern Villa, Delhi — L-shaped, polished chrome | 1200×1000 mm **90° corner enclosure** with polished-chrome clamps and stabilizer arm, heritage-modern tiles. |
| `project-4.jpg` | Architectural Wetroom Screen, Hyderabad — fixed, matte black | 1200 mm single **fixed walk-in panel** with matte-black ceiling stabilizer bar and micro floor channel. |
| `project-5.jpg` | Serene Master Bathroom, Pune — swing + fixed inline, brushed gold | Alcove with swing door plus fixed inline panel, **brushed gold** hardware, warm ambient light. |
| `project-6.jpg` | Coastal Contemporary Ensuite, Chennai — sliding, gunmetal grey | 1300 mm sliding glass with gunmetal-grey track, airy coastal palette, sea-light through a window. |
| `project-7.jpg` | Parkview Villa 90° Cubicle, Gurugram — L-shaped, matte black | Corner enclosure with matte-black minimal hardware next to a floating marble vanity. |
| `project-8.jpg` | Monochrome Slate Wetroom, Ahmedabad — fixed, gunmetal | Dark-slate wetroom with a clear fixed glass partition set into a recessed floor channel, ceiling rainfall head. |
| `project-fixed-reeded.jpg` | Fixed page · "1200 mm reeded glass screen" | Walk-in with a single **reeded** fixed glass panel and a matte-black stabilizer bar. |

---

## 14. Caption conflicts to reconcile after generating

Some project captions on category pages describe a different finish than the shared project image. Once your images exist, tell me and I will align the wording. Known cases:

- `Swing` page "Door + inline panel alcove" says **matte black**, but it uses `project-5`, which is **brushed gold**.
- `Sliding` page "compact ensuite slider" uses `project-6`, which is a coastal ensuite in gunmetal.
- `LShaped` page "brass corner" uses `project-7`, which is matte black.
- `Fixed` page "low-iron ultra-clear screen" uses `project-8`, a gunmetal slate wetroom.

## 15. Cleanup after replacing

- Delete now-unused files: `hw-clamp.jpg`, `test-1507652313519.jpg`, `test-1552321554.jpg`, `test-dl.jpg`, `test-frameless.jpg`.
- Compress `sliding.jpg` (currently **18.7 MB**), `bathroom-maintenance.jpg` (5.1 MB), `bathroom-renovation.jpg` (4.0 MB) — they will be replaced anyway.

## 16. Acceptance test (per image, before you save it)

1. Does the picture **directly** show the topic in the "Must show" column?
2. Is it a **bathroom / product / detail** (never a house, bedroom or living room)?
3. Any text, logo, phone number or face? → regenerate.
4. Glass, mirrors and chrome free of warping? Hands and hardware anatomically correct? → else regenerate.
5. Still clear when shrunk to ~300 px wide?

Then run `npm run check:images`.
