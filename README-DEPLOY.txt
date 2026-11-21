PICCOLO MONDO — PERFORMANCE PASS 5

Replace these files in the GitHub repository root:
- index.html
- image-slot.js
- support.js (unchanged; included for completeness)
- merge the assets/ folder with the existing assets/ (do not delete other assets).

Do NOT delete .image-slots.state.json, existing fonts, photos, or any other site files.
Do NOT replace the entire assets directory: merge only the files in this ZIP.

Changes:
1. Defers the ~1.5 MB menu-image state fetch until menu image slots enter the viewport.
2. Converts 5 fallback story JPEGs into visually faithful WebP images.
3. Uses Sanity CDN auto=format and q=82 for story images; preserves the 2000px mobile collage base.
4. Keeps high-DPI resolution for reveal photos, reducing oversized requests.
5. Adds intrinsic dimensions to the header logo SVG.
6. Preserves animations, Sanity CMS fields, languages, and booking code.

Caution: This is a source-level optimization, not a browser-tested 95 score.
After deployment, verify the menu photos appear on scroll, collage hover/tap, bilingual content, and reservation.
Run mobile PageSpeed Insights 2-3 times and compare LCP and performance.
