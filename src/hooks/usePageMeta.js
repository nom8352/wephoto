import { useEffect } from 'react';

const defaultTitle = 'WePhoto | Social Media Posebooks & Content Guides';
const defaultDescription =
  'Saveable posebooks and practical photo, Reels, editing, and social media guides for more confident content.';

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
  robots = 'index, follow',
  image = '/pose-assets/social/12-social-media-poses.webp',
}) {
  useEffect(() => {
    document.title = title;

    ensureMeta('meta[name="description"]', 'name', description);
    ensureMeta('meta[name="robots"]', 'name', robots);
    ensureMeta('meta[property="og:title"]', 'property', title);
    ensureMeta('meta[property="og:description"]', 'property', description);
    ensureMeta('meta[property="og:type"]', 'property', 'website');
    ensureMeta('meta[property="og:image"]', 'property', new URL(image, window.location.origin).toString());
    ensureMeta('meta[name="twitter:title"]', 'name', title);
    ensureMeta('meta[name="twitter:description"]', 'name', description);
    ensureMeta('meta[name="twitter:card"]', 'name', 'summary_large_image');
    ensureMeta('meta[name="twitter:image"]', 'name', new URL(image, window.location.origin).toString());

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    const url = new URL(canonicalPath, window.location.origin);
    canonical.setAttribute('href', url.toString());
    ensureMeta('meta[property="og:url"]', 'property', url.toString());
  }, [canonicalPath, description, image, robots, title]);
}
