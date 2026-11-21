PICCOLO MONDO — SAFE IMAGE-SLOT OPTIMIZATION

Upload these files to the same website root folder as the current index.html:
- index.html (safe HTML adjustments: logo SVG, preconnect, collage dimensions)
- support.js and image-slot.js (original, unchanged)
- .image-slots.state.json (optimized references)
- image-slot-assets/ (all 27 original decoded images)

IMPORTANT: Keep the existing assets/ and fonts/ directories, and all other existing website files. Do not remove any files. The .image-slots.state.json filename begins with a dot and must remain exactly that. Deploy all files together. Back up your existing site first.

The original image data is preserved byte-for-byte. Each entry keeps its s/x/y framing values. The image-slot editor can still save new dropped images as data URLs, so later edits may increase the JSON size again; permanent optimization would require adapting the editing workflow.

This targets the large JSON transfer. The JS files remain unchanged to avoid breaking runtime dependencies. Retest PageSpeed after deployment; do not expect every warning to be eliminated.
