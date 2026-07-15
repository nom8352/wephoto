import legacyPages from '../data/legacyPages.json';
import { getLegacySeo } from '../data/legacySeo';

const defaultImage = '/pose-assets/social/12-social-media-poses.webp';

const coreRoutes = [
  {
    path: '/',
    title: 'WePhoto | Social Media Posebooks & Content Guides',
    description: 'Saveable posebooks and practical photo, Reels, editing, and social media guides for more confident content.',
    image: '/pose-assets/selfie-mirror/12-selfie-mirror-poses.webp',
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
    path: '/pose-book/men',
    title: '12 Social Media Poses for Men | WePhoto',
    description: 'Twelve relaxed social media poses for men, with simple direction for natural profile photos and everyday content.',
    image: '/pose-assets/men/12-social-media-poses-for-men.webp',
  },
  {
    path: '/pose-book/best-friends',
    title: '12 Best Friend Poses | Photo Pose Guide | WePhoto',
    description: 'Twelve natural best friend poses with movement, laughter, and simple prompts for relaxed photos together.',
    image: '/pose-assets/best-friends/12-best-friend-poses.webp',
  },
  {
    path: '/pose-book/travel',
    title: '12 Travel Photo Poses | Visual Pose Guide | WePhoto',
    description: 'Twelve travel photo poses that balance natural movement, flattering angles, and a beautiful coastal setting.',
    image: '/pose-assets/travel/12-travel-photo-poses.webp',
  },
  {
    path: '/pose-book/professional',
    title: '12 Professional & LinkedIn Poses | WePhoto',
    description: 'Twelve approachable professional poses for LinkedIn headshots, personal branding, and a polished online profile.',
    image: '/pose-assets/professional/12-professional-linkedin-poses.webp',
  },
  {
    path: '/pose-book/selfie-mirror',
    title: '12 Selfie & Mirror Poses | Visual Guide | WePhoto',
    description: 'Twelve selfie and mirror pose ideas with simple phone placement, body angles, and framing cues for natural solo photos.',
    image: '/pose-assets/selfie-mirror/12-selfie-mirror-poses.webp',
  },
  {
    path: '/pose-book/family',
    title: '12 Natural Family Photo Poses | WePhoto',
    description: 'Twelve natural family photo poses with walking, cuddles, play, and simple group arrangements for relaxed outdoor portraits.',
    image: '/pose-assets/family/12-family-photo-poses.webp',
  },
  {
    path: '/pose-book/sitting-cafe',
    title: '12 Sitting & Cafe Poses | Photo Guide | WePhoto',
    description: 'Twelve natural sitting and cafe poses with coffee, window light, and easy hand placement for relaxed lifestyle photos.',
    image: '/pose-assets/sitting-cafe/12-sitting-cafe-poses.webp',
  },
  {
    path: '/guides',
    title: 'Social Media Photo & Content Guides | WePhoto',
    description: 'Learn practical social media photography, Reels, editing, and content-planning techniques for clearer, more confident posts.',
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
    description: 'Learn how WePhoto creates original visual pose books and practical social media guides for better photos, Reels, and everyday content.',
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
    title: 'Privacy Policy for WePhoto Visitors | WePhoto',
    description: 'Read how WePhoto handles basic website data, analytics, external links, and privacy choices when you browse our pose books and content guides.',
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
  .map((page) => {
    const seo = getLegacySeo(page);

    return {
      path: page.path,
      title: seo.title,
      description: seo.description,
      image: defaultImage,
    };
  });

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
