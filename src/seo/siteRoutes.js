import legacyPages from '../data/legacyPages.json';

const defaultImage = '/pose-assets/social/12-social-media-poses.webp';

const coreRoutes = [
  {
    path: '/',
    title: 'WePhoto | Social Media Posebooks & Content Guides',
    description: 'Saveable posebooks and practical photo, Reels, editing, and social media guides for more confident content.',
    image: defaultImage,
  },
  {
    path: '/pose-book',
    title: 'Pose Books | Visual Photo Pose Guides | WePhoto',
    description: 'Explore saveable visual pose books for social media photos, couples, self portraits, friends, travel, and more.',
    image: defaultImage,
  },
  {
    path: '/pose-book/couples',
    title: '12 Outdoor Couple Poses | Pose Book | WePhoto',
    description: 'Twelve natural outdoor couple poses in one visual guide, with simple prompts and camera tips for a relaxed photo session.',
    image: '/pose-assets/couples/12-outdoor-couple-poses.webp',
  },
  {
    path: '/pose-book/social-media',
    title: '12 Social Media Poses for Women | WePhoto',
    description: 'Twelve natural social media poses for women in one visual guide, with simple positioning tips for confident self portraits.',
    image: defaultImage,
  },
  {
    path: '/guides',
    title: 'Social Media Photo & Content Guides | WePhoto',
    description: 'Practical guides for better social media photos, Reels, editing, and repeatable content planning.',
    image: defaultImage,
  },
  {
    path: '/blog',
    title: 'Photography Guides for Better Social Content | WePhoto',
    description: 'Practical WePhoto articles covering self portraits, couple poses, family photos, and stronger social content.',
    image: defaultImage,
  },
  {
    path: '/about',
    title: 'About WePhoto | Posebooks & Content Guides',
    description: 'Learn why WePhoto creates original visual pose books and practical social media content guides.',
    image: defaultImage,
  },
  {
    path: '/faq',
    title: 'FAQ | WePhoto Posebooks & Content Guides',
    description: 'Answers about WePhoto pose books, original guide images, personal use, and the new content-guide platform.',
    image: defaultImage,
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | WePhoto',
    description: 'Privacy information for visitors using WePhoto pose books and content guides.',
    image: defaultImage,
  },
];

export const activeLegacyPaths = new Set([
  '/a-quick-insight-on-some-self-portrait-ideas-that-youll-love',
  '/get-the-perfect-self-portrait-photo-in-just-one-day',
  '/how-to-add-charm-to-your-self-portrait-photography',
  '/how-to-make-the-family-portrait-photography-a-cake-walk',
  '/mistakes-to-avoid-during-your-self-portrait-photography',
  '/photo-studio-sydney/an-insight-on-the-key-aspects-related-to-self-portrait-photography',
  '/selfies-with-a-pro-at-wephoto',
  '/tips-to-enhance-your-couple-photography-experience',
]);

export const retiredRedirects = [
  ['/home', '/'],
  ['/home-10-masonry-gallery', '/'],
  ['/services', '/pose-book'],
  ['/portfolio', '/pose-book'],
  ['/gallery', '/pose-book'],
  ['/booking', '/pose-book'],
  ['/shop', '/pose-book'],
  ['/product/single-session', '/pose-book'],
  ['/product/group-session', '/pose-book'],
  ['/headshot-photography-sydney', '/pose-book/social-media'],
  ['/maternity-photography-sydney', '/pose-book'],
  ['/pet-photography-sydney', '/pose-book'],
  ['/photo-studio-sydney', '/pose-book'],
  ['/self-portrait-photography-sydney', '/pose-book/social-media'],
  ['/guide', '/guides'],
  ['/refund_returns', '/privacy-policy'],
  ['/cart', '/pose-book'],
  ['/cart-2', '/pose-book'],
  ['/checkout', '/pose-book'],
  ['/checkout-2', '/pose-book'],
  ['/my-account', '/pose-book'],
  ['/contact', '/pose-book'],
  ['/author/wephotoad', '/blog'],
  ['/product-category/uncategorized', '/pose-book'],
  ['/an-insight-on-the-key-aspects-related-to-self-portrait-photography', '/photo-studio-sydney/an-insight-on-the-key-aspects-related-to-self-portrait-photography'],
];

const restoredRoutes = legacyPages
  .filter((page) => activeLegacyPaths.has(page.path))
  .map((page) => ({
    path: page.path,
    title: `${page.title} | WePhoto`,
    description: page.description,
    image: defaultImage,
  }));

export const indexableRoutes = [...coreRoutes, ...restoredRoutes];

const normalizePath = (value) => {
  const path = value.split(/[?#]/, 1)[0] || '/';
  return path === '/' ? path : path.replace(/\/+$/, '');
};

export function getRouteMeta(value) {
  const path = normalizePath(value);
  const route = indexableRoutes.find((item) => item.path === path);

  if (route) {
    return { ...route, canonicalPath: route.path, robots: 'index, follow' };
  }

  return {
    path,
    title: 'Page not found | WePhoto',
    description: 'The requested WePhoto page could not be found.',
    canonicalPath: '/404',
    robots: 'noindex, follow',
    image: defaultImage,
  };
}
