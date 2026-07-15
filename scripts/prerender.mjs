import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { indexableRoutes, render, retiredRedirects } from '../dist-ssr/entry-server.js';

const dist = resolve('dist');
const template = await readFile(resolve(dist, 'index.html'), 'utf8');
const buildDate = new Date().toISOString().slice(0, 10);

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
  document = replaceMeta(document, 'property', 'og:image', `https://wephoto.com.au${meta.image}`);
  document = replaceMeta(document, 'name', 'twitter:title', meta.title);
  document = replaceMeta(document, 'name', 'twitter:description', meta.description);
  document = replaceMeta(document, 'name', 'twitter:image', `https://wephoto.com.au${meta.image}`);
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
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
  ...indexableRoutes.map(({ path, image }) => {
    const location = `https://wephoto.com.au${path === '/' ? '/' : path}`;
    const imageLocation = `https://wephoto.com.au${image}`;
    return `  <url><loc>${location}</loc><lastmod>${buildDate}</lastmod><image:image><image:loc>${imageLocation}</image:loc></image:image></url>`;
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
  `    <lastmod>${buildDate}</lastmod>`,
  '  </sitemap>',
  '</sitemapindex>',
  '',
].join('\n');

await writeFile(resolve(dist, 'sitemap_index.xml'), sitemapIndex, 'utf8');
await writeFile(
  resolve(dist, 'robots.txt'),
  [
    'User-agent: *',
    'Allow: /',
    '',
    'User-agent: OAI-SearchBot',
    'Allow: /',
    '',
    'User-agent: ChatGPT-User',
    'Allow: /',
    '',
    'User-agent: PerplexityBot',
    'Allow: /',
    '',
    'User-agent: Bingbot',
    'Allow: /',
    '',
    'Sitemap: https://wephoto.com.au/sitemap_index.xml',
    '',
  ].join('\n'),
  'utf8',
);

const redirects = [
  ...retiredRedirects.flatMap(([from, to]) => [`${from} ${to} 301`, `${from}/ ${to} 301`]),
  ...indexableRoutes
    .filter(({ path }) => path !== '/')
    .map(({ path }) => `${path}/ ${path} 301`),
  '',
].join('\n');

await writeFile(resolve(dist, '_redirects'), redirects, 'utf8');

console.log(`Prerendered ${indexableRoutes.length} indexable routes plus 404.html`);
