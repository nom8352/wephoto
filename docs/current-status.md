# WePhoto Current Status

Last updated: 2026-07-15

## Current Direction

- WePhoto is now an English-language social media pose-book and content-guide platform.
- Positioning: `WePhoto — Social Media Posebooks & Content Guides`.
- Primary message: `Look better. Post better.`
- The physical self-portrait studio is no longer operating.
- Booking, pricing, session-product, location, and active-studio claims have been removed from the current platform experience.
- The original WordPress backup remains excluded from Git under `backup/`.

## Live Content Model

- `/` is a visual discovery homepage for pose books and social content guidance.
- `/pose-book` is the central pose-book library.
- `/pose-book/social-media` contains one original 3-by-4 contact sheet with 12 poses for an adult Australian woman, an English legend, and positioning cues.
- `/pose-book/couples` contains one original 3-by-4 contact sheet with 12 outdoor couple poses, an English legend, movement prompts, and camera notes.
- `/guides` covers four practical pillars: photo tips, Reels and video, editing, and social growth.
- `/blog` preserves eight useful self-portrait, couple, and family photography articles from the former site.
- `/about` explains the transition from physical studio to open visual guide library.
- `/faq` discloses that the new pose-book visuals are original generated references and confirms that the physical studio has closed.
- `/privacy-policy` now reflects a public content website rather than a booking business.

## Content Production

- The launch library has two completed 12-pose contact sheets, representing 24 pose references.
- Seven additional sheets are planned: Men, Best Friends, Travel, Professional and LinkedIn, Selfie and Mirror, Family, and Sitting and Cafe.
- A complete first library will contain nine image files and 108 pose references.
- New sheets should use one original 3-by-4 image, exactly 12 panels, consistent adult subjects and wardrobe, blank gutters, and no embedded text, numbers, labels, logos, or watermarks.
- Pose names and instructions belong in accessible HTML outside the image.

## Search And Indexing

- The production build pre-renders 17 indexable routes plus a dedicated `404.html`.
- `sitemap.xml` includes the active platform pages and the eight retained photography articles.
- Booking, shop, product, portfolio, gallery, services, studio guide, and Sydney service landing pages are excluded from the sitemap.
- Retired commercial and local-studio URLs use HTTP 301 redirects to `/pose-book`, `/pose-book/social-media`, `/guides`, or `/privacy-policy` as appropriate.
- Each active route has server-rendered content, a unique title, description, canonical URL, robots directive, and route-specific Open Graph image.
- Site-wide structured data now uses `Organization` and `WebSite`; the obsolete `LocalBusiness` studio schema has been removed.
- Pose guides use `CollectionPage`, `ImageObject`, and `ItemList`; FAQ uses `FAQPage`; retained articles use `Article` and include a visible archive notice.
- `robots.txt` allows search crawling and declares `https://wephoto.com.au/sitemap_index.xml`.

## Verification

- `npm run lint` passes.
- `npm run build` passes and generates 17 indexable route documents plus `404.html`.
- Automated checks confirm one H1 on every core page, no booking CTA or `LocalBusiness` markup on active platform pages, 17 sitemap URLs, and the expected retired-route mappings.
- Desktop and 390px mobile browser checks cover the homepage, pose-book library, and content-guide page.
- The two contact-sheet assets are optimised WebP files and load without embedded labels over the photos.

## Next Work

1. Generate the seven planned 12-pose contact sheets using the approved account-by-account prompt packs.
2. Add each completed sheet to `/pose-book` only after checking panel count, identity consistency, anatomy, duplicate poses, and absence of embedded text.
3. Expand the strongest guide topics into dedicated indexable articles after the visual library is established.
4. Monitor Google Search Console after the sitemap and redirect changes are recrawled.
