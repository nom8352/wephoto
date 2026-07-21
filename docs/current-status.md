# WePhoto Current Status

Last updated: 2026-07-21

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
- `/guides` covers four practical pillars: photo tips, Reels and video, editing, and social growth, plus seven indexable deep-dive articles.
- Deep-dive guides: a 90-minute content-batching system, Instagram posing, mirror selfie angles, outdoor couples, LinkedIn headshots, followers vs reach engagement, and Instagram image sizes.
- `/blog` lists the seven new guides first, then preserves eight useful archive articles from the former site.
- `/about` explains the transition from physical studio to open visual guide library.
- `/faq` discloses that the new pose-book visuals are original generated references and confirms that the physical studio has closed.
- `/privacy-policy` now reflects a public content website rather than a booking business.
- `/tools` is the free creator-tool hub, with browser-based utilities and a roadmap for additional planning tools.
- `/tools/engagement-rate-calculator` calculates engagement by followers or reach using likes, comments, saves, and shares.
- `/tools/image-size-calculator` calculates proportional resize dimensions and crop amounts for six common social formats without uploading an image.
- `/tools/reels-safe-zone-checker` previews approximate Instagram Reels and TikTok UI cover bands on a 9:16 frame without uploading media.
- `/tools/caption-character-counter` counts caption characters, preview cutoffs, hashtags, and mentions for Instagram, TikTok, LinkedIn, and X.

## Content Production

- The complete starter library has nine 12-pose contact sheets, representing 108 pose references.
- The first planned image set is complete: Women, Couples, Men, Best Friends, Travel, Professional and LinkedIn, Selfie and Mirror, Family, and Sitting and Cafe.
- New sheets should use one original 3-by-4 image, exactly 12 panels, consistent adult subjects and wardrobe, blank gutters, and no embedded text, numbers, labels, logos, or watermarks.
- Pose names and instructions belong in accessible HTML outside the image.
- The content-batching guide uses three original 3:2 editorial WebP images: a shoot-planning hero, a shot-matrix flat lay, and a nine-frame result sheet.

## Promotion Plan

- The detailed organic promotion strategy is saved in `docs/wephoto-promotion-plan.md`.
- The plan positions WePhoto around 108 pose prompts, free creator tools, no signup, and private browser-based calculations.
- The first 90-day acquisition mix prioritises Google Search, Pinterest, Instagram/TikTok short-form content, creator communities, and relevant backlinks.
- Ready-to-use English brand descriptions, profile copy, launch posts, tool posts, outreach email, UTM rules, KPIs, and a 30-day checklist are included.

## Search And Indexing

- The production build pre-renders 36 indexable routes plus a dedicated `404.html`.
- `sitemap.xml` includes the active platform pages and the eight retained photography articles.
- Booking, shop, product, portfolio, gallery, services, studio guide, and Sydney service landing pages are excluded from the sitemap.
- Retired commercial and local-studio URLs use HTTP 301 redirects to `/pose-book`, `/pose-book/social-media`, `/guides`, or `/privacy-policy` as appropriate.
- Each active route has server-rendered content, a unique title, description, canonical URL, robots directive, and route-specific Open Graph image.
- Site-wide structured data now uses `Organization` and `WebSite`; the obsolete `LocalBusiness` studio schema has been removed.
- Pose guides use `CollectionPage`, `ImageObject`, and `ItemList`; FAQ uses `FAQPage`; retained articles use `Article` and include a visible archive notice.
- The creator-tool hub uses `CollectionPage`, and all four live tools use `WebApplication` structured data with visible explanatory content and FAQs.
- `robots.txt` allows search crawling and declares `https://wephoto.com.au/sitemap_index.xml`.
- The origin robots file explicitly allows `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, and `Bingbot`; Cloudflare currently prepends managed rules that allow search/reference use while blocking selected training crawlers.
- `sitemap.xml` adds image sitemap entries for route-specific pose sheets and generates fresh `lastmod` dates at build time.

## Verification

- `npm run lint` passes.
- `npm run build` passes and generates 36 indexable route documents plus `404.html`.
- Automated checks confirm one H1, unique metadata, canonical URLs, and valid JSON-LD on the active tool and guide routes, with 36 sitemap URLs in total.
- Desktop and 390px mobile browser checks cover the homepage, pose-book library, and representative pose-guide pages.
- All nine contact-sheet assets are optimised WebP files and load without embedded labels over the photos.
- The redesigned homepage hero uses the 2:3 selfie-and-mirror sheet with explicit dimensions and high fetch priority instead of the visually overlong 1:2 launch sheet.
- The redesigned homepage was browser-checked at 1440px and 390px with no horizontal overflow, console errors, or console warnings.
- The mobile navigation opens and closes correctly and reports its state through `aria-expanded`.
- Desktop and 390px mobile browser checks confirm both calculators work without page-level horizontal overflow or console warnings.
- Test values produce `6%` for 600 interactions across 10,000 followers, `7.5%` across 8,000 reached accounts, and a proportional `1800 × 1350` resize with a `720px` side crop for a 4032 × 3024 image targeting 1080 × 1350.

## Differentiation Implementation (2026-07-16)

Shipped the differentiation pass from `docs/wephoto-differentiation-implementation-spec.md`, plus the first new high-repeat tool.

- **Pose ↔ Tool flow:** shared `NextStep` component on all pose-book pages and tool detail pages (plus tools hub → pose library).
- **Privacy messaging:** shared `PrivacyBadge` on tools hub and tool heroes (`Private. No signup. Runs in your browser.`).
- **Pose sheet focus:** `:target` highlight + `scroll-margin-top` on pose guide cards.
- **Actionable direction:** `mistake` / `fix` fields now live on all nine pose books (108 poses).
- **New tools:** `/tools/reels-safe-zone-checker` and `/tools/caption-character-counter` are live with no signup and no upload.
- Browser checks via `scripts/check-differentiation.mjs` pass for NextStep links, legend `:target` highlight, PrivacyBadge, Reels toggle, caption over-limit state, and mobile overflow.
- `npm run lint` and `npm run build` pass (35 indexable routes + `404.html`).

## Quuu-Ready Editorial Content (2026-07-21)

- Added `/guides/90-minute-content-photo-session`, an evergreen, non-sales article designed as a standalone useful submission for Quuu Promote.
- The guide provides a four-job content framework, nine-frame shot matrix, complete 90-minute run sheet, 30-post allocation, editing workflow, calendar method, and copyable pre-shoot checklist.
- Four contextual in-article next steps connect the relevant workflow stages to the social media pose book, Reels safe-zone checker, caption counter, and image-size calculator without turning the article into a sales page.
- Three original article images are stored under `public/guide-assets/content-batching/` with descriptive alternative text, captions, explicit dimensions, and optimised WebP delivery.
- `npm run lint` and `npm run build` pass with 36 indexable routes plus `404.html`; desktop and 390px checks confirm all three images load at 1536 × 1024 with no console warnings or horizontal overflow.

## Next Work

1. Promote the seven deep-dive guides via Search Console indexing and Pinterest/social links to matching pose books and tools.
2. Add a follower-growth calculator and content-capacity planner only after traffic validates the current tool set.
3. Monitor Google Search Console after the sitemap and route additions are recrawled.
4. Validate pose ↔ tool click-through with GA4 events once analytics events are wired.
