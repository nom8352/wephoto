import { ArrowRight, Bookmark, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './PoseBook.css';

const availableBooks = [
  {
    title: 'Social Media Poses for Women',
    description: 'Twelve clean, modern standing and seated ideas for self portraits and everyday posts.',
    image: '/pose-assets/social/12-social-media-poses.webp',
    href: '/pose-book/social-media',
    tags: ['Solo', 'Indoor', 'Social media'],
  },
  {
    title: 'Outdoor Couple Poses',
    description: 'Twelve movement-led prompts for playful, natural couple photos in an outdoor setting.',
    image: '/pose-assets/couples/12-outdoor-couple-poses.webp',
    href: '/pose-book/couples',
    tags: ['Couples', 'Outdoor', 'Movement'],
  },
  {
    title: 'Social Media Poses for Men',
    description: 'Twelve relaxed standing, walking, seated, and profile ideas for natural everyday content.',
    image: '/pose-assets/men/12-social-media-poses-for-men.webp',
    href: '/pose-book/men',
    tags: ['Men', 'Urban', 'Social media'],
  },
  {
    title: 'Best Friend Poses',
    description: 'Twelve easy two-person prompts built around movement, conversation, and genuine connection.',
    image: '/pose-assets/best-friends/12-best-friend-poses.webp',
    href: '/pose-book/best-friends',
    tags: ['Friends', 'Lifestyle', 'Movement'],
  },
  {
    title: 'Travel Photo Poses',
    description: 'Twelve ways to stay natural in the frame while letting a beautiful destination tell the story.',
    image: '/pose-assets/travel/12-travel-photo-poses.webp',
    href: '/pose-book/travel',
    tags: ['Solo', 'Travel', 'Outdoor'],
  },
  {
    title: 'Professional & LinkedIn Poses',
    description: 'Twelve approachable headshot and personal-branding ideas for a polished professional profile.',
    image: '/pose-assets/professional/12-professional-linkedin-poses.webp',
    href: '/pose-book/professional',
    tags: ['Professional', 'LinkedIn', 'Personal brand'],
  },
  {
    title: 'Selfie & Mirror Poses',
    description: 'Twelve phone angles, body positions, and framing ideas for natural solo photos at home.',
    image: '/pose-assets/selfie-mirror/12-selfie-mirror-poses.webp',
    href: '/pose-book/selfie-mirror',
    tags: ['Selfie', 'Mirror', 'Phone'],
  },
  {
    title: 'Natural Family Photo Poses',
    description: 'Twelve warm group prompts built around walking, cuddles, play, and real family connection.',
    image: '/pose-assets/family/12-family-photo-poses.webp',
    href: '/pose-book/family',
    tags: ['Family', 'Outdoor', 'Connection'],
  },
  {
    title: 'Sitting & Cafe Poses',
    description: 'Twelve relaxed seated ideas using coffee, window light, tables, and simple hand placement.',
    image: '/pose-assets/sitting-cafe/12-sitting-cafe-poses.webp',
    href: '/pose-book/sitting-cafe',
    tags: ['Solo', 'Cafe', 'Sitting'],
  },
];

const getPoseSheetSize = (image) =>
  image.includes('/social/') || image.includes('/couples/')
    ? { width: 887, height: 1774 }
    : { width: 1024, height: 1536 };

const PoseBook = () => {
  usePageMeta({
    title: 'Pose Books | Visual Photo Pose Guides | WePhoto',
    description:
      'Explore saveable visual pose books for social media photos, couples, self portraits, friends, travel, and more.',
    canonicalPath: '/pose-book',
    image: '/pose-assets/social/12-social-media-poses.webp',
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'WePhoto Pose Books',
    url: 'https://wephoto.com.au/pose-book',
    description: 'Saveable visual pose books for social media photos and self portraits.',
    hasPart: availableBooks.map((book) => ({
      '@type': 'CollectionPage',
      name: book.title,
      url: `https://wephoto.com.au${book.href}`,
    })),
  };

  return (
    <div className="pose-library">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="pose-library-hero site-shell">
        <div className="pose-library-hero-card card" data-reveal>
          <span className="eyebrow">The WePhoto pose library</span>
          <h1>Choose the photo you want to take.</h1>
          <p className="lead">
            Open a sheet, compare twelve ideas, and take it with you to the shoot. The poses are
            starting points, not rules.
          </p>
          <div className="pose-library-signals">
            <span><Bookmark size={17} /> Saveable contact sheets</span>
            <span><MoveRight size={17} /> Movement-first directions</span>
          </div>
        </div>
      </section>

      <section className="pose-library-featured site-shell">
        <header className="section-heading" data-reveal>
          <span className="eyebrow">Available now</span>
          <h2>Start with a complete 12-pose guide.</h2>
        </header>
        <div className="pose-library-grid">
          {availableBooks.map((book, index) => {
            const { width, height } = getPoseSheetSize(book.image);
            return (
              <Link key={book.href} to={book.href} className="pose-library-book card" data-reveal style={{ '--delay': `${0.08 + index * 0.08}s` }}>
                <div className="pose-library-cover">
                  <img
                    src={book.image}
                    alt={`${book.title} contact sheet`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    width={width}
                    height={height}
                  />
                </div>
                <div className="pose-library-copy">
                  <div className="pose-library-tags">{book.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <h2>{book.title}</h2>
                  <p>{book.description}</p>
                  <strong>View all 12 poses <ArrowRight size={17} /></strong>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="pose-library-cta site-shell">
        <div className="pose-library-cta-card card" data-reveal>
          <div>
            <span className="eyebrow">Make the pose work</span>
            <h2>Good light and framing matter as much as body position.</h2>
          </div>
          <Link to="/guides" className="button-primary">Explore content guides <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
};

export default PoseBook;
