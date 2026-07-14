import legacyPages from '../data/legacyPages.json';

const coreRoutes = [
  {
    path: '/',
    title: 'WePhoto | Self-Portrait Studio in Gladesville, Sydney',
    description:
      'Private self-portrait sessions, headshots, maternity, pet and studio portraits in Gladesville, Sydney.',
  },
  {
    path: '/services',
    title: 'Services | WePhoto Portrait Studio Sydney',
    description:
      'Explore self-portrait sessions, headshots, maternity, newborn-style studio portraits, and other WePhoto services in Sydney.',
  },
  {
    path: '/portfolio',
    title: 'Portfolio | WePhoto Studio',
    description:
      'Browse portrait examples from WePhoto including self-portraits, couples, maternity, and studio sessions.',
  },
  {
    path: '/gallery',
    title: 'Gallery | WePhoto Studio',
    description: 'The original WePhoto studio gallery, restored from the previous website.',
  },
  {
    path: '/pose-book/couples',
    title: 'Couple Pose Book | Easy Studio Poses | WePhoto',
    description:
      'Six easy couple poses with clear positioning, camera tips and visual notes for a relaxed WePhoto studio session.',
  },
  {
    path: '/about',
    title: 'About | WePhoto Studio',
    description: 'Learn about WePhoto, a private self-portrait and portrait studio in Sydney.',
  },
  {
    path: '/booking',
    title: 'Booking | WePhoto Self-Portrait Studio Sydney',
    description:
      'Book a private self-portrait, couple, family, maternity, or headshot session at WePhoto in Gladesville, Sydney.',
  },
  {
    path: '/blog',
    title: 'Photography guides | WePhoto Blog',
    description:
      'Restored WePhoto guides covering self-portrait, couple, and family photography ideas.',
  },
  {
    path: '/shop',
    title: 'Session options | WePhoto',
    description:
      'Original WePhoto self-portrait session options restored from the previous studio website.',
  },
  {
    path: '/product/single-session',
    title: 'Single session | WePhoto',
    description: 'A private WePhoto self-portrait studio session for one person.',
  },
  {
    path: '/product/group-session',
    title: 'Group session | WePhoto',
    description: 'WePhoto group self-portrait studio sessions for two to eight people.',
  },
];

const restoredRoutes = legacyPages.map((page) => ({
  path: page.path,
  title: `${page.title} | WePhoto`,
  description: page.description,
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
    return {
      ...route,
      canonicalPath: route.path,
      robots: 'index, follow',
    };
  }

  return {
    path,
    title: 'Page not found | WePhoto',
    description: 'The requested WePhoto page could not be found.',
    canonicalPath: '/404',
    robots: 'noindex, follow',
  };
}
