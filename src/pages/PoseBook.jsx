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
];

const upcomingBooks = [
  ['Social Media Poses for Men', 'Confident, relaxed prompts for profiles and everyday content.'],
  ['Best Friend Poses', 'Easy two-person ideas with movement, variety, and real interaction.'],
  ['Travel Photo Poses', 'Ways to include the setting without looking lost inside the frame.'],
  ['Professional & LinkedIn Poses', 'Approachable posture and expression ideas for a polished profile.'],
  ['Selfie & Mirror Poses', 'Phone angles, hand placement, and framing for solo shooting.'],
  ['Family Photo Poses', 'Simple group shapes that keep faces visible and bodies relaxed.'],
  ['Sitting & Cafe Poses', 'Natural seated ideas for tables, benches, stools, and casual spaces.'],
];

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
          {availableBooks.map((book, index) => (
            <Link key={book.href} to={book.href} className="pose-library-book card" data-reveal style={{ '--delay': `${0.08 + index * 0.08}s` }}>
              <div className="pose-library-cover">
                <img src={book.image} alt={`${book.title} contact sheet`} loading={index === 0 ? 'eager' : 'lazy'} />
              </div>
              <div className="pose-library-copy">
                <div className="pose-library-tags">{book.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <strong>View all 12 poses <ArrowRight size={17} /></strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="pose-library-coming site-shell">
        <header className="section-heading" data-reveal>
          <span className="eyebrow">Growing next</span>
          <h2>A pose book for every kind of post.</h2>
          <p>New sheets will follow the same clean 3-by-4 format, with the pose names and instructions outside the photos.</p>
        </header>
        <div className="coming-grid">
          {upcomingBooks.map(([title, description], index) => (
            <article key={title} className="coming-card card" data-reveal style={{ '--delay': `${0.05 + index * 0.04}s` }}>
              <span>{String(index + 3).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <small>In production</small>
            </article>
          ))}
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
