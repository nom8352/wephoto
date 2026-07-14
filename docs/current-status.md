# WePhoto Current Status

Last updated: 2026-07-15 (Australia/Brisbane)

## Repository

- Branch: `main`
- Restoration deployment commit: `45cf0c5 Restore WordPress content and SEO infrastructure`
- The WordPress backup remains excluded from Git under `backup/`.
- The restoration is pushed to `main` and deployed at `https://wephoto.com.au`.

## WordPress Restoration

- All 29 published WordPress `page` and `product` records are accounted for.
- Seventeen content pages were restored from cached public HTML after removing scripts, forms, plugin markup, inline styling, and unsafe attributes.
- Eight original photography articles were restored with their previous public URLs and copy.
- The five Sydney photography landing pages now use their original public content instead of replacement summaries.
- FAQ, Guide, Privacy Policy, and Refund Policy use their previous public content.
- The original gallery uses six recovered images.
- Guide and service pages use 12 additional recovered GIF/JPG assets.
- Single and group session product URLs were restored. The previous database prices are shown with a current-availability notice.
- Cart, checkout, account, old home, author, and duplicate insight URLs permanently redirect to the closest active page.
- Backup files, WordPress code, plugins, customer data, and suspicious server files were not copied into the application.

## Search And Indexing

- The production build pre-renders 28 indexable routes plus a dedicated `404.html`.
- Every generated page contains server-rendered body content, a unique title, description, canonical URL, and robots directive.
- LocalBusiness, WebSite, WebPage/Article, Breadcrumb, ImageGallery, CollectionPage, and Service JSON-LD are included where appropriate.
- `sitemap.xml` contains all 28 canonical URLs, and the original Yoast-compatible `sitemap_index.xml` path points to it.
- `robots.txt` allows search crawling and declares `https://wephoto.com.au/sitemap_index.xml`.
- The previous street address and postcode were removed from visible content and LocalBusiness structured data at the owner's request.
- The Contact page was retired, removed from navigation and the sitemap, and permanently redirected to `/booking`; direct email remains available there.
- `/pose-book/couples` adds six original outdoor Australian couple pose guides with generated coastal lifestyle images, English handwritten callouts, movement prompts, camera notes, and mobile layouts.
- Trailing-slash duplicates and retired WordPress URLs use HTTP 301 redirects.
- Unknown URLs return HTTP 404 instead of an empty `200` response.
- `/blog` links all eight restored articles, and the footer links the restored guide, FAQ, shop, gallery, blog, and service landing pages.

## Verification

- `npm run lint` passes.
- `npm run build` passes and generates 29 HTML files, 18 recovered media assets, and six optimised outdoor couple pose images.
- Cloudflare Pages local verification confirmed `200` for restored pages, `301` for retired URLs, `application/xml` for the sitemap, and `404` for unknown URLs.
- Browser checks confirmed no hydration warnings, all restored images loaded, one H1 per tested page, and no horizontal overflow at 390px mobile width.
- Live verification confirmed `200 application/xml` for both sitemap files, server-rendered content and metadata, the expected 301 redirects, and a real 404 for unknown URLs.
- Cloudflare prepends managed content-signal rules to `robots.txt`; general search crawling remains allowed with `search=yes` and `Allow: /`.
- Public search results still show an older WordPress title from a crawl five months ago, so Google has not yet refreshed the newly deployed pages.

## Remaining Search Step

1. Verify or grant access to the `wephoto.com.au` Google Search Console property.
2. Submit `https://wephoto.com.au/sitemap_index.xml` and request indexing for the homepage and priority restored URLs.
3. Monitor Page indexing and Crawl stats after Google revisits the site.
