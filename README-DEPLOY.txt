PICCOLO MOBILE OPTIMIZATION V3 — incremental, low-risk pass

Copy index.html and assets/story-ribbon-arabic-optimized.webp into the corresponding repository locations. Keep all other files untouched, including support.js, image-slot.js, CMS files and assets.

Changes: compressed Arabic ribbon (original kept in repo), removed unused ialoc preconnect. This version builds on v2 (responsive chair and Sanity image sizing).

IMPORTANT: The larger render-blocking JS issue requires browser regression testing before changing runtime script order. No unsafe script changes have been made.

After deploying, check homepage, EN/RO, menu photos, reservations, mobile animations and rerun PageSpeed.
