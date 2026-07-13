# WePhoto Current Status

Last updated: 2026-07-14 (Australia/Brisbane)

## Repository

- Branch: `main`
- Latest pushed commit before this restoration: `ac02012 Add legacy SEO landing pages and route metadata`
- The WordPress backup remains excluded from Git under `backup/`.
- The restoration changes are implemented locally and are ready for final commit, push, and deployment verification.

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
- The original studio address is restored in the visible contact details and LocalBusiness structured data.
- Trailing-slash duplicates and retired WordPress URLs use HTTP 301 redirects.
- Unknown URLs return HTTP 404 instead of an empty `200` response.
- `/blog` links all eight restored articles, and the footer links the restored guide, FAQ, shop, gallery, blog, and service landing pages.

## Verification

- `npm run lint` passes.
- `npm run build` passes and generates 29 HTML files and 18 recovered media assets.
- Cloudflare Pages local verification confirmed `200` for restored pages, `301` for retired URLs, `application/xml` for the sitemap, and `404` for unknown URLs.
- Browser checks confirmed no hydration warnings, all restored images loaded, one H1 per tested page, and no horizontal overflow at 390px mobile width.

## Next Delivery Step

1. Commit and push the restoration.
2. Wait for the Cloudflare Pages deployment and re-check live status codes and metadata.
3. Verify or grant access to the `wephoto.com.au` Google Search Console property.
4. Submit `https://wephoto.com.au/sitemap_index.xml` and request indexing for the priority restored URLs.
