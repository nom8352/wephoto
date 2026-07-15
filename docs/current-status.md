# WePhoto Current Status

Last updated: 2026-07-15

## Current Direction

- WePhoto is now an English-language social media pose-book and content-guide platform.
- Positioning: `WePhoto — Social Media Posebooks & Content Guides`.
- Primary message: `Look better. Post better.`
- The physical self-portrait studio is no longer operating.
- Booking, pricing, session-product, location, and active-studio claims have been removed from the current platform experience.
- The original WordPress backup remains excluded from Git under `backup/`.

## Visual Direction

- The homepage now uses a high-contrast soft editorial utility style built around the visual language of pose sheets and camera framing.
- The primary brand colours are Signal Coral (`#FF3F74`) and Electric Cobalt (`#2F4BE8`), with Tangerine (`#FF8A3D`) used sparingly for movement cues.
- The brand mark is a coral gradient circle with `W.` in white, a white framing corner, and a cobalt focus point, paired with a compact `WePhoto` wordmark and `Pose & Content Guides` descriptor.
- The same `W.` mark is used for the SVG favicon.
- The homepage uses a large sans-serif headline, an angled 12-pose sheet, nine compact category cards, a three-step workflow, creator-guide pillars, and a coral library call to action.
- Repeating identity motifs include frame corners, `01/09` guide numbering, a `Pose / Post / Repeat` sheet tab, tri-colour signal lines, and a coral-to-cobalt library call to action.
- Category cards crop individual panels from the existing contact sheets in CSS, keeping the previews useful without creating duplicate image assets.
- Typography remains fully sans serif with Outfit for display copy and DM Sans for body copy.

## Live Content Model

- `/` is a visual discovery homepage for pose books and social content guidance.
- `/pose-book` is the central pose-book library.
- `/pose-book/social-media` contains one original 3-by-4 contact sheet with 12 poses for an adult Australian woman, an English legend, and positioning cues.
- `/pose-book/couples` contains one original 3-by-4 contact sheet with 12 outdoor couple poses, an English legend, movement prompts, and camera notes.
- `/pose-book/men` contains 12 relaxed urban pose ideas for men, with direction for posture, hands, and movement.
- `/pose-book/best-friends` contains 12 interaction-led prompts for natural photos of two friends.
- `/pose-book/travel` contains 12 solo travel poses that balance the subject with a coastal destination.
- `/pose-book/professional` contains 12 professional and LinkedIn portrait prompts for headshots and personal branding.
- `/pose-book/selfie-mirror` contains 12 self-shot phone and mirror ideas with framing and body-angle cues.
- `/pose-book/family` contains 12 outdoor family prompts based on movement, play, and connection.
- `/pose-book/sitting-cafe` contains 12 seated lifestyle prompts using a cafe setting, window light, and simple props.
- `/guides` covers four practical pillars: photo tips, Reels and video, editing, and social growth.
- `/blog` preserves eight useful self-portrait, couple, and family photography articles from the former site.
- `/about` explains the transition from physical studio to open visual guide library.
- `/faq` discloses that the new pose-book visuals are original generated references and confirms that the physical studio has closed.
- `/privacy-policy` now reflects a public content website rather than a booking business.

## Content Production

- The complete starter library has nine 12-pose contact sheets, representing 108 pose references.
- The first planned image set is complete: Women, Couples, Men, Best Friends, Travel, Professional and LinkedIn, Selfie and Mirror, Family, and Sitting and Cafe.
- New sheets should use one original 3-by-4 image, exactly 12 panels, consistent adult subjects and wardrobe, blank gutters, and no embedded text, numbers, labels, logos, or watermarks.
- Pose names and instructions belong in accessible HTML outside the image.

## Search And Indexing

- The production build pre-renders 24 indexable routes plus a dedicated `404.html`.
- `sitemap.xml` includes the active platform pages and the eight retained photography articles.
- Booking, shop, product, portfolio, gallery, services, studio guide, and Sydney service landing pages are excluded from the sitemap.
- Retired commercial and local-studio URLs use HTTP 301 redirects to `/pose-book`, `/pose-book/social-media`, `/guides`, or `/privacy-policy` as appropriate.
- Each active route has server-rendered content, a unique title, description, canonical URL, robots directive, and route-specific Open Graph image.
- Site-wide structured data now uses `Organization` and `WebSite`; the obsolete `LocalBusiness` studio schema has been removed.
- Pose guides use `CollectionPage`, `ImageObject`, and `ItemList`; FAQ uses `FAQPage`; retained articles use `Article` and include a visible archive notice.
- `robots.txt` allows search crawling and declares `https://wephoto.com.au/sitemap_index.xml`.
- The origin robots file explicitly allows `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, and `Bingbot`; Cloudflare currently prepends managed rules that allow search/reference use while blocking selected training crawlers.
- `sitemap.xml` adds image sitemap entries for route-specific pose sheets and generates fresh `lastmod` dates at build time.

## Verification

- `npm run lint` passes.
- `npm run build` passes and generates 24 indexable route documents plus `404.html`.
- Automated checks confirm one H1 on every core page, no booking CTA or `LocalBusiness` markup on active platform pages, 24 sitemap URLs, and the expected retired-route mappings.
- Desktop and 390px mobile browser checks cover the homepage, pose-book library, and representative pose-guide pages.
- All nine contact-sheet assets are optimised WebP files and load without embedded labels over the photos.
- The redesigned homepage hero uses the 2:3 selfie-and-mirror sheet with explicit dimensions and high fetch priority instead of the visually overlong 1:2 launch sheet.
- The redesigned homepage was browser-checked at 1440px and 390px with no horizontal overflow, console errors, or console warnings.
- The mobile navigation opens and closes correctly and reports its state through `aria-expanded`.

## Next Work

1. Commit and publish the homepage and brand redesign after approval.
2. Expand the strongest guide topics into dedicated indexable articles now that the visual library is established.
3. Use search and engagement data to choose the next pose-book categories rather than adding more by default.
4. Monitor Google Search Console after the sitemap and route additions are recrawled.
