PICCOLO MONDO — PAGE SPEED PASS 4 (incremental update)

WHAT CHANGED
- The existing support.js and image-slot.js now load with defer, preserving order.
- Added critical CSS to hide the raw x-dc template while deferred runtime loads.
- Moved image-slot registration from the template helmet into the HTML head before support.js.
- Added intrinsic dimensions to the footer logo SVG; header logo dimensions are left unchanged until its viewBox can be verified.
- Preserved pass 3 mobile collage resolution (1200px), mobile chair, optimized ribbon, Sanity CMS, EN/RO, animations and booking.

HOW TO DEPLOY
1. Make a backup / commit your current working site.
2. Replace index.html in the repository root with this index.html.
3. If your repo already contains support.js and image-slot.js unchanged, they need no replacement; included for completeness.
4. Keep all existing assets, fonts, gallery, other files. Copy the two assets from this package only if they are not already deployed.
5. Commit and push using GitHub Desktop, wait for Vercel deployment.
6. Test mobile and desktop: home loading/loader, story collage and hover/touch, menu photo placeholders, language switch, reservations, gallery and contact.
7. Run PageSpeed mobile at least 3 times. Compare LCP and render-blocking audit.

CAUTION
This is a targeted safe change, NOT a verified 90+ score. Runtime behavior must be tested on deployed Vercel. If there is any failure, revert the index.html commit. No minification of generated support.js was attempted without its build pipeline.
