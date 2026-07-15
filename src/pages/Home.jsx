import { createElement } from 'react';
import { Link } from 'react-router-dom';
import {
  Aperture,
  ArrowRight,
  Bookmark,
  BriefcaseBusiness,
  Calculator,
  Camera,
  Coffee,
  Heart,
  House,
  Plane,
  Search,
  Send,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Video,
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import './Home.css';

const featuredPoseBooks = [
  {
    title: 'Social Media Poses',
    description: 'Natural solo ideas for stories, carousels, and everyday posts.',
    image: '/pose-assets/social/12-social-media-poses.webp',
    href: '/pose-book/social-media',
    icon: Smartphone,
    position: '0% 0%',
  },
  {
    title: 'Outdoor Couple Poses',
    description: 'Relaxed movement prompts for dates, travel, and golden hour.',
    image: '/pose-assets/couples/12-outdoor-couple-poses.webp',
    href: '/pose-book/couples',
    icon: Heart,
    position: '50% 0%',
  },
  {
    title: "Men's Poses",
    description: 'Simple, confident ideas for profiles and lifestyle photos.',
    image: '/pose-assets/men/12-social-media-poses-for-men.webp',
    href: '/pose-book/men',
    icon: Aperture,
    position: '100% 0%',
  },
  {
    title: 'Best Friend Poses',
    description: 'Warm, candid prompts built around movement and connection.',
    image: '/pose-assets/best-friends/12-best-friend-poses.webp',
    href: '/pose-book/best-friends',
    icon: Users,
    position: '0% 33.333%',
  },
  {
    title: 'Travel Poses',
    description: 'Keep yourself natural while the destination tells the story.',
    image: '/pose-assets/travel/12-travel-photo-poses.webp',
    href: '/pose-book/travel',
    icon: Plane,
    position: '50% 33.333%',
  },
  {
    title: 'Professional & LinkedIn',
    description: 'Approachable poses for headshots and personal branding.',
    image: '/pose-assets/professional/12-professional-linkedin-poses.webp',
    href: '/pose-book/professional',
    icon: BriefcaseBusiness,
    position: '100% 33.333%',
  },
  {
    title: 'Selfie & Mirror Poses',
    description: 'Flattering phone angles and easy mirror-photo prompts.',
    image: '/pose-assets/selfie-mirror/12-selfie-mirror-poses.webp',
    href: '/pose-book/selfie-mirror',
    icon: Camera,
    position: '0% 66.666%',
  },
  {
    title: 'Natural Family Poses',
    description: 'Playful group ideas for families with children of all ages.',
    image: '/pose-assets/family/12-family-photo-poses.webp',
    href: '/pose-book/family',
    icon: House,
    position: '50% 66.666%',
  },
  {
    title: 'Sitting & Cafe Poses',
    description: 'Casual seated ideas using coffee, tables, and window light.',
    image: '/pose-assets/sitting-cafe/12-sitting-cafe-poses.webp',
    href: '/pose-book/sitting-cafe',
    icon: Coffee,
    position: '100% 66.666%',
  },
];

const contentPillars = [
  {
    icon: Camera,
    title: 'Shoot with clarity',
    text: 'Plan the light, framing, and body position before you press the shutter.',
  },
  {
    icon: Sparkles,
    title: 'Edit with ease',
    text: 'Use cleaner crops and consistent colour without losing what feels real.',
  },
  {
    icon: Send,
    title: 'Post with purpose',
    text: 'Turn one useful idea into a photo post, Reel, and clear caption.',
  },
  {
    icon: TrendingUp,
    title: 'Grow with confidence',
    text: 'Build repeatable content habits around the topics people save and share.',
  },
];

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Choose a guide',
    text: 'Pick a subject and setting that match the content you want to create.',
  },
  {
    number: '02',
    icon: Camera,
    title: 'Follow the prompts',
    text: 'Use the pose directions and visual sequence without copying every detail.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Shoot and create',
    text: 'Keep moving, find your strongest frame, then make the post your own.',
  },
];

const Home = () => {
  usePageMeta({
    title: 'WePhoto | Social Media Posebooks & Content Guides',
    description:
      'Saveable posebooks and practical photo, Reels, editing, and social media guides for more confident content.',
    canonicalPath: '/',
    image: '/pose-assets/selfie-mirror/12-selfie-mirror-poses.webp',
  });

  return (
    <div className="home">
      <section className="home-hero site-shell">
        <div className="hero-copy" data-reveal style={{ '--delay': '0.04s' }}>
          <div className="hero-overline">
            <span className="home-kicker">Pose guides & content ideas for creators</span>
            <span className="hero-prompt-count"><strong>108</strong> original prompts</span>
          </div>
          <h1>
            Better photos.<br />
            Better content.<br />
            <em>Every time.</em>
          </h1>
          <p className="lead">
            Ready-to-use pose sheets and practical prompts to help you shoot with confidence and
            create content that feels natural.
          </p>
          <div className="hero-actions">
            <Link to="/pose-book" className="button-primary">
              Explore the library
              <ArrowRight size={18} strokeWidth={2.2} />
            </Link>
            <Link to="/guides" className="button-secondary">
              See how it works
              <Video size={17} strokeWidth={2} />
            </Link>
          </div>
          <div className="hero-signals" aria-label="WePhoto guide features">
            <span><Bookmark size={17} /><strong>Easy to save</strong><small>One-sheet visual guides</small></span>
            <span><Camera size={17} /><strong>Made for creators</strong><small>Photos, Reels, and more</small></span>
            <span><Heart size={17} /><strong>All levels welcome</strong><small>Simple and practical</small></span>
          </div>
        </div>

        <div className="hero-visual" data-reveal style={{ '--delay': '0.14s' }}>
          <span className="hero-doodle hero-doodle-one" aria-hidden="true">*</span>
          <span className="hero-doodle hero-doodle-two" aria-hidden="true">+</span>
          <div className="hero-guide-sheet">
            <span className="hero-guide-tab">Pose / Post / Repeat</span>
            <div className="hero-guide-label">
              <span>12 poses</span>
              <span>One sheet</span>
            </div>
            <img
              src="/pose-assets/selfie-mirror/12-selfie-mirror-poses.webp"
              alt="Twelve selfie and mirror poses in one visual contact sheet"
              width="1024"
              height="1536"
              loading="eager"
              fetchPriority="high"
            />
            <div className="hero-guide-footer">
              <span>Clear directions. Easy to follow.</span>
              <Heart size={25} strokeWidth={2.4} aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="home-library site-shell">
        <header className="home-section-heading" data-reveal>
          <span className="home-kicker">Browse by guide category</span>
          <h2>Find the right guide for every moment.</h2>
          <p>Practical pose sheets for every kind of creator, subject, and setting.</p>
        </header>

        <div className="home-guide-grid">
          {featuredPoseBooks.map((book, index) => (
            <Link
              key={book.href}
              to={book.href}
              className="home-guide-card"
              data-reveal
              style={{ '--delay': `${0.05 + (index % 3) * 0.06}s` }}
            >
              <div
                className="home-guide-thumb"
                role="img"
                aria-label={`${book.title} pose guide preview`}
                style={{ backgroundImage: `url("${book.image}")`, backgroundPosition: book.position }}
              />
              <div className="home-guide-copy">
                <div className="home-guide-meta">
                  <span className="home-guide-icon">{createElement(book.icon, { size: 19, strokeWidth: 1.9 })}</span>
                  <span className="home-guide-number">{String(index + 1).padStart(2, '0')} / 09</span>
                </div>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <strong>View guide <ArrowRight size={15} /></strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-steps site-shell">
        <header className="home-section-heading" data-reveal>
          <span className="home-kicker">Use the guides in 3 simple steps</span>
          <h2>Shoot with confidence in three easy steps.</h2>
        </header>
        <ol className="home-step-grid">
          {steps.map((step, index) => (
            <li key={step.number} data-reveal style={{ '--delay': `${0.08 + index * 0.08}s` }}>
              <span className="home-step-icon">{createElement(step.icon, { size: 29, strokeWidth: 1.8 })}</span>
              <div>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="home-content site-shell">
        <header className="home-section-heading" data-reveal>
          <span className="home-kicker">It is more than just poses</span>
          <h2>Shoot better. Edit better. Post better.</h2>
          <p>Everything you need to create content you are proud to share.</p>
        </header>
        <div className="home-content-grid">
          {contentPillars.map(({ icon, title, text }, index) => (
            <article key={title} data-reveal style={{ '--delay': `${0.08 + index * 0.06}s` }}>
              <span>{createElement(icon, { size: 24, strokeWidth: 1.8 })}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-tools-promo site-shell" data-reveal>
        <span className="home-tools-icon"><Calculator size={30} strokeWidth={1.8} /></span>
        <div>
          <span className="home-kicker">Free creator tools</span>
          <h2>Turn content numbers into a clear next step.</h2>
          <p>Calculate engagement, resize images without distortion, and prepare posts with no signup.</p>
        </div>
        <Link to="/tools" className="button-secondary">
          Open creator tools
          <ArrowRight size={17} />
        </Link>
      </section>

      <section className="home-cta site-shell" data-reveal>
        <div className="home-cta-visual" aria-hidden="true">
          <img src="/pose-assets/men/12-social-media-poses-for-men.webp" alt="" width="1024" height="1536" loading="lazy" />
          <img src="/pose-assets/social/12-social-media-poses.webp" alt="" width="887" height="1774" loading="lazy" />
          <img src="/pose-assets/best-friends/12-best-friend-poses.webp" alt="" width="1024" height="1536" loading="lazy" />
        </div>
        <div className="home-cta-copy">
          <span>The complete creator library</span>
          <h2>Everything you need to create stronger content.</h2>
          <p>Nine original pose guides, 108 visual prompts, and practical shooting advice.</p>
        </div>
        <Link to="/pose-book" className="home-cta-button">
          Explore the full library
          <ArrowRight size={17} />
        </Link>
      </section>
    </div>
  );
};

export default Home;
