import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { indexableRoutes, render } from '../dist-ssr/entry-server.js';

const dist = resolve('dist');
const template = await readFile(resolve(dist, 'index.html'), 'utf8');

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const replaceMeta = (html, attribute, key, value) => {
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"[^>]*>`, 'i');
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `  ${tag}\n  </head>`);
};

function buildDocument(url) {
  const { html: appHtml, meta } = render(url);
  const canonical = `https://wephoto.com.au${meta.canonicalPath === '/' ? '/' : meta.canonicalPath}`;
  let document = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  document = document.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);
  document = replaceMeta(document, 'name', 'description', meta.description);
  document = replaceMeta(document, 'name', 'robots', meta.robots);
  document = replaceMeta(document, 'property', 'og:title', meta.title);
  document = replaceMeta(document, 'property', 'og:description', meta.description);
  document = replaceMeta(document, 'property', 'og:url', canonical);
  document = replaceMeta(document, 'name', 'twitter:title', meta.title);
  document = replaceMeta(document, 'name', 'twitter:description', meta.description);
  document = document.replace(
    /<link\s+rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${canonical}" />`,
  );

  return document;
}

for (const route of indexableRoutes) {
  const file = route.path === '/' ? resolve(dist, 'index.html') : resolve(dist, `${route.path.slice(1)}.html`);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, buildDocument(route.path), 'utf8');
}

await writeFile(resolve(dist, '404.html'), buildDocument('/__not-found__'), 'utf8');

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...indexableRoutes.map(({ path }) => {
    const location = `https://wephoto.com.au${path === '/' ? '/' : path}`;
    return `  <url><loc>${location}</loc><lastmod>2026-07-15</lastmod></url>`;
  }),
  '</urlset>',
  '',
].join('\n');

await writeFile(resolve(dist, 'sitemap.xml'), sitemap, 'utf8');

const sitemapIndex = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '  <sitemap>',
  '    <loc>https://wephoto.com.au/sitemap.xml</loc>',
  '    <lastmod>2026-07-15</lastmod>',
  '  </sitemap>',
  '</sitemapindex>',
  '',
].join('\n');

await writeFile(resolve(dist, 'sitemap_index.xml'), sitemapIndex, 'utf8');
await writeFile(
  resolve(dist, 'robots.txt'),
  'User-agent: *\nAllow: /\n\nSitemap: https://wephoto.com.au/sitemap_index.xml\n',
  'utf8',
);

const redirectPairs = [
  ['/home', '/'],
  ['/home-10-masonry-gallery', '/'],
  ['/cart', '/booking'],
  ['/cart-2', '/booking'],
  ['/checkout', '/booking'],
  ['/checkout-2', '/booking'],
  ['/my-account', '/booking'],
  ['/contact', '/booking'],
  ['/author/wephotoad', '/blog'],
  ['/product-category/uncategorized', '/shop'],
  [
    '/an-insight-on-the-key-aspects-related-to-self-portrait-photography',
    '/photo-studio-sydney/an-insight-on-the-key-aspects-related-to-self-portrait-photography',
  ],
];

const redirects = [
  ...redirectPairs.flatMap(([from, to]) => [`${from} ${to} 301`, `${from}/ ${to} 301`]),
  ...indexableRoutes
    .filter(({ path }) => path !== '/')
    .map(({ path }) => `${path}/ ${path} 301`),
  '',
].join('\n');

await writeFile(resolve(dist, '_redirects'), redirects, 'utf8');

console.log(`Prerendered ${indexableRoutes.length} indexable routes plus 404.html`);
