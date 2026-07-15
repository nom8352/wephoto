import { createElement } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bookmark, Camera, Compass, Sparkles, TrendingUp, Video } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import './Home.css';

const featuredPoseBooks = [
  {
    title: 'Social Media Poses',
    count: '12 poses',
    description: 'Natural standing, seated, walking, and profile ideas for your next post.',
    image: '/pose-assets/social/12-social-media-poses.webp',
    href: '/pose-book/social-media',
    alt: 'A contact sheet showing twelve social media poses for women',
  },
  {
    title: 'Outdoor Couple Poses',
    count: '12 poses',
    description: 'Movement-led prompts for relaxed couple photos that do not feel staged.',
    image: '/pose-assets/couples/12-outdoor-couple-poses.webp',
    href: '/pose-book/couples',
    alt: 'A contact sheet showing twelve outdoor couple poses',
  },
];

const upcomingCategories = [
  'Men',
  'Best friends',
  'Travel',
  'Professional',
  'Selfie & mirror',
  'Family',
  'Sitting & cafe',
];

const contentPillars = [
  {
    icon: Camera,
    title: 'Shoot better',
    text: 'Simple phone-camera, light, framing, and self-timer techniques that improve the photo before editing.',
  },
  {
    icon: Video,
    title: 'Make better Reels',
    text: 'Practical shot lists, talking-head framing, B-roll ideas, and movement prompts for short-form video.',
  },
  {
    icon: Sparkles,
    title: 'Edit with restraint',
    text: 'Clean crops, consistent colour, readable covers, and an editing workflow that still looks like you.',
  },
  {
    icon: TrendingUp,
    title: 'Post with purpose',
    text: 'Build useful content pillars, repeat what works, and make each post easier to plan and understand.',
  },
];

const Home = () => {
  usePageMeta({
    title: 'WePhoto | Social Media Posebooks & Content Guides',
    description:
      'Saveable posebooks and practical photo, Reels, editing, and social media guides for more confident content.',
    canonicalPath: '/',
    image: '/pose-assets/social/12-social-media-poses.webp',
  });

  return (
    <div className="home">
      <section className="home-hero site-shell">
        <div className="hero-panel card" data-reveal style={{ '--delay': '0.05s' }}>
          <div className="hero-copy">
            <span className="eyebrow">Social media posebooks & content guides</span>
            <h1>Look better.<br />Post better.</h1>
            <p className="lead">
              Find a pose, understand the shot, and create content with more confidence. Every
              WePhoto guide is designed to be visual, practical, and easy to save for later.
            </p>
            <div className="hero-actions">
              <Link to="/pose-book" className="button-primary">
                Explore pose books
                <ArrowRight size={18} strokeWidth={2.2} />
              </Link>
              <Link to="/guides" className="button-secondary">Create better content</Link>
            </div>
            <div className="hero-signals" aria-label="WePhoto guide features">
              <span><Bookmark size={16} /> Saveable visual sheets</span>
              <span><Compass size={16} /> Clear pose directions</span>
              <span><Camera size={16} /> Practical shooting tips</span>
            </div>
          </div>

          <div className="hero-pose-preview" aria-label="Featured social media pose sheet">
            <div className="hero-sheet card">
              <img
                src="/pose-assets/social/12-social-media-poses.webp"
                alt="Twelve social media poses in one visual contact sheet"
                width="887"
                height="1774"
              />
            </div>
            <div className="hero-sheet-note card">
              <strong>12 poses. One sheet.</strong>
              <span>Save it before your next shoot.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-library site-shell">
        <header className="section-heading" data-reveal>
          <span className="eyebrow">Start with the shot</span>
          <h2>Pose ideas you can see at a glance.</h2>
          <p>Each guide keeps the photos clean and places the instructions underneath, so you can compare the full sequence quickly.</p>
        </header>

        <div className="featured-pose-grid">
          {featuredPoseBooks.map((book, index) => (
            <Link
              key={book.href}
              to={book.href}
              className="featured-pose-card card"
              data-reveal
              style={{ '--delay': `${0.08 + index * 0.08}s` }}
            >
              <div className="featured-pose-image">
                <img src={book.image} alt={book.alt} loading="lazy" />
              </div>
              <div className="featured-pose-copy">
                <span>{book.count}</span>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <strong>Open pose book <ArrowRight size={17} /></strong>
              </div>
            </Link>
          ))}
        </div>

        <div className="category-strip card" data-reveal>
          <div>
            <span className="eyebrow">Next in the library</span>
            <h3>More ways to find your angle.</h3>
          </div>
          <div className="category-list">
            {upcomingCategories.map((category) => <span key={category}>{category}</span>)}
          </div>
        </div>
      </section>

      <section className="content-guides site-shell">
        <header className="section-heading" data-reveal>
          <span className="eyebrow">Beyond the pose</span>
          <h2>Build the whole post, not just the picture.</h2>
          <p>Use short, practical guides to improve the way you shoot, edit, and publish social content.</p>
        </header>

        <div className="content-pillar-grid">
          {contentPillars.map(({ icon, title, text }, index) => (
            <article key={title} className="content-pillar card" data-reveal style={{ '--delay': `${0.08 + index * 0.05}s` }}>
              <span>{createElement(icon, { size: 21, strokeWidth: 2 })}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <Link to="/guides" className="button-secondary content-guides-link">
          Explore content guides
          <ArrowRight size={18} />
        </Link>
      </section>

      <section className="home-method site-shell">
        <div className="home-method-card card" data-reveal>
          <div>
            <span className="eyebrow">The WePhoto method</span>
            <h2>Choose. Practise. Make it yours.</h2>
          </div>
          <ol>
            <li><span>01</span><strong>Choose a sheet</strong><p>Start with the person, setting, or type of post you want to create.</p></li>
            <li><span>02</span><strong>Try the action</strong><p>Use the prompt as a starting point instead of copying every detail.</p></li>
            <li><span>03</span><strong>Keep moving</strong><p>The strongest frame is often the moment between the planned poses.</p></li>
          </ol>
        </div>
      </section>

      <section className="cta-strip site-shell" data-reveal>
        <div className="cta-strip-card card">
          <div>
            <span className="eyebrow">Ready for your next post?</span>
            <h2>Start with twelve poses you can use today.</h2>
          </div>
          <Link to="/pose-book/social-media" className="button-primary">
            Open social media poses
            <ArrowRight size={18} strokeWidth={2.2} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
