PICCOLO MONDO — MOBILE PERFORMANCE PASS 2

This is an overlay for the existing GitHub website, NOT a replacement for the entire assets folder.
Copy index.html and assets/chair-floating-mobile.webp into the corresponding repository paths. Keep all other existing files, including image-slot.js, support.js, .image-slots.state.json, image-slot-assets, and Sanity configuration.

Changes:
- Mobile Sanity Story collage uses w=1200 rather than w=2000 (desktop unchanged).
- Mobile Story reveal photos request smaller widths; desktop unchanged.
- Mobile hero chair requests a 360x540 WebP, preserving the original 800x1200 desktop image.
- Adds intrinsic dimensions to hero chair.
- Removes one low-priority preconnect.

IMPORTANT: The Story collage preload URL refers to the currently published Sanity asset; update it if that asset changes. Script loading is deliberately unchanged because changing generated runtime execution order without browser testing risks breaking the website.

After deployment, check mobile and desktop pages, story reveal hover, menu images, bilingual content, booking, and Sanity updates. Then run PageSpeed again. Score improvement is not guaranteed.
