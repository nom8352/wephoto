import { createElement } from 'react';
import { Bookmark, Camera, Compass, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './About.css';

const principles = [
  { icon: Bookmark, title: 'Made to save', text: 'Every pose book is designed to be useful before and during a real shoot.' },
  { icon: Camera, title: 'Action over perfection', text: 'Prompts focus on movement and clear body direction instead of rigid modelling rules.' },
  { icon: Compass, title: 'Easy to explore', text: 'Guides are organised by subject, setting, and content goal so the next idea is easy to find.' },
  { icon: Sparkles, title: 'Original visuals', text: 'WePhoto creates original reference images for its guides rather than republishing other creators’ photos.' },
];

const About = () => {
  usePageMeta({
    title: 'About WePhoto | Posebooks & Content Guides',
    description:
      'Learn how WePhoto creates original visual pose books and practical social media guides for better photos, Reels, and everyday content.',
    canonicalPath: '/about',
  });

  return (
    <div className="about-page">
      <section className="about-hero site-shell">
        <div className="about-hero-card card" data-reveal>
          <span className="eyebrow">About WePhoto</span>
          <h1>A visual library for the moment before you take the photo.</h1>
          <p className="lead">WePhoto helps people move from “What should I do?” to a clear pose, a stronger frame, and content they feel confident sharing.</p>
        </div>
      </section>

      <section className="about-story site-shell">
        <div className="about-story-card card" data-reveal>
          <span className="about-story-number">01</span>
          <div>
            <span className="eyebrow">A new chapter</span>
            <h2>From portrait studio to open pose library.</h2>
            <p>WePhoto began with hands-on portrait experience. The physical studio is no longer operating, but the practical knowledge behind natural posing, framing, lighting, and visual finishing still has a useful place.</p>
            <p>The site now turns that experience into free English-language pose books and concise content guides that anyone can use with a phone, camera, tripod, or a friend behind the lens.</p>
          </div>
        </div>
      </section>

      <section className="about-principles site-shell">
        <header className="section-heading" data-reveal>
          <span className="eyebrow">How we build</span>
          <h2>Clear enough to use. Flexible enough to make your own.</h2>
        </header>
        <div className="about-principle-grid">
          {principles.map(({ icon, title, text }, index) => (
            <article key={title} className="about-principle card" data-reveal style={{ '--delay': `${0.06 + index * 0.05}s` }}>
              {createElement(icon, { size: 21, strokeWidth: 2 })}
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta site-shell">
        <div className="about-cta-card card" data-reveal>
          <div>
            <span className="eyebrow">Start exploring</span>
            <h2>Find twelve ideas for your next photo.</h2>
          </div>
          <Link to="/pose-book" className="button-primary">Browse pose books</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
