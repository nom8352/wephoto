import { useEffect } from 'react';

const defaultTitle = 'WePhoto | Self-Portrait Studio in Gladesville, Sydney';
const defaultDescription =
  'Private self-portrait sessions, headshots, maternity, pet and studio portraits in Gladesville, Sydney.';

function ensureMeta(selector, attr, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, selector.includes('property=') ? selector.match(/property="([^"]+)"/)?.[1] ?? '' : selector.match(/name="([^"]+)"/)?.[1] ?? '');
    document.head.appendChild(element);
  }

  element.setAttribute('content', value);
}

export function usePageMeta({
  title = defaultTitle,
  description = defaultDescription,
  canonicalPath = '/',
}) {
  useEffect(() => {
    document.title = title;

    ensureMeta('meta[name="description"]', 'name', description);
    ensureMeta('meta[property="og:title"]', 'property', title);
    ensureMeta('meta[property="og:description"]', 'property', description);
    ensureMeta('meta[name="twitter:title"]', 'name', title);
    ensureMeta('meta[name="twitter:description"]', 'name', description);

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    const url = new URL(canonicalPath, window.location.origin);
    canonical.setAttribute('href', url.toString());
  }, [canonicalPath, description, title]);
}
