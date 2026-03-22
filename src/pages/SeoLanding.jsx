import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './LegacyPages.css';

const pageConfig = {
  'photo-studio-sydney': {
    eyebrow: 'Sydney studio',
    title: 'A private photo studio in Sydney for portraits that feel more natural.',
    description:
      'Photo studio in Sydney offering self-portrait sessions, couple portraits, maternity, pet, and branding photos in a calm private space.',
    canonicalPath: '/photo-studio-sydney',
    image: '/img/WephotoMain.jpg',
    overview:
      'The old landing page framed WePhoto as a Sydney photo studio. That search intent still matters, but the better message is not just that a studio exists. It is that this one gives people a private, beautifully lit space to create portraits without the usual pressure.',
    bullets: [
      'Private studio atmosphere rather than a busy commercial set',
      'Professional camera, lights, and monitor preview already prepared',
      'Works well for solo, couple, family, maternity, pet, and branding sessions',
    ],
  },
  'headshot-photography-sydney': {
    eyebrow: 'Headshots',
    title: 'Headshot photography in Sydney that looks polished without feeling stiff.',
    description:
      'Modern headshot photography in Sydney for creatives, founders, teams, and personal branding sessions at WePhoto.',
    canonicalPath: '/headshot-photography-sydney',
    image: '/img/IMG_3095.jpg',
    overview:
      'This page exists for people looking specifically for Sydney headshots. WePhoto is a strong fit when you want a cleaner, more editorial result than the typical office-style profile photo.',
    bullets: [
      'Good for LinkedIn, websites, speaker profiles, and personal branding',
      'Structured studio light with room for softer or more approachable expressions',
      'Ideal if you want several moods in one focused session',
    ],
  },
  'maternity-photography-sydney': {
    eyebrow: 'Maternity',
    title: 'Maternity photography in Sydney with a softer, more relaxed studio feel.',
    description:
      'Maternity photography in Sydney with private studio sessions designed for comfort, simplicity, and timeless portraits.',
    canonicalPath: '/maternity-photography-sydney',
    image: '/img/IMG_3018.jpg',
    overview:
      'The older maternity content was SEO-heavy. This version keeps the important intent and replaces it with clearer language: comfort, flattering light, and enough privacy to move slowly through the session.',
    bullets: [
      'Calm pace that suits outfit changes and rest breaks',
      'Studio light that flatters skin tones and soft textures',
      'Beautiful for solo portraits, couple photos, or family additions',
    ],
  },
  'self-portrait-photography-sydney': {
    eyebrow: 'Self portrait',
    title: 'Self-portrait photography in Sydney for people who want more control.',
    description:
      'Self-portrait photography in Sydney with a private studio, remote trigger, and live monitor preview at WePhoto.',
    canonicalPath: '/self-portrait-photography-sydney',
    image: '/img/IMG_2991.jpg',
    overview:
      'This is the clearest match for what makes WePhoto different. You do not need to perform for a stranger behind the lens. You can test, adjust, and capture the shot when it feels right.',
    bullets: [
      'Remote-controlled camera setup',
      'Live feedback on screen while you shoot',
      'Great for people who want privacy, flexibility, and a more natural rhythm',
    ],
  },
  'pet-photography-sydney': {
    eyebrow: 'Pet portraits',
    title: 'Pet photography in Sydney that leaves room for personality and movement.',
    description:
      'Pet photography in Sydney with private studio sessions that suit calm portraits, playful moments, and family photos with pets.',
    canonicalPath: '/pet-photography-sydney',
    image: '/img/IMG_3070.jpg',
    overview:
      'Pet sessions work best when the environment feels controlled but not overly rigid. A private studio with a simple setup helps pets settle, and it gives owners more room to capture the expressions they actually love.',
    bullets: [
      'Suitable for pet-only portraits or pets with their people',
      'Simple backgrounds help expression and texture stand out',
      'A better fit when you want cleaner results than outdoor snapshots',
    ],
  },
};

const sharedReasons = [
  'Clean studio light and neutral styling keep the images timeless.',
  'The session pace feels calmer than a traditional rushed shoot.',
  'You can align the mood to personal, romantic, family-focused, or professional uses.',
];

const SeoLanding = ({ pageKey }) => {
  const page = pageConfig[pageKey];

  usePageMeta({
    title: `${page.title} | WePhoto`,
    description: page.description,
    canonicalPath: page.canonicalPath,
  });

  return (
    <div className="legacy-page">
      <div className="legacy-page-shell">
        <section className="legacy-hero card legacy-landing-grid">
          <div>
            <span className="eyebrow">{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p className="lead">{page.overview}</p>

            <ul className="legacy-feature-list">
              {page.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="legacy-visual">
            <img src={page.image} alt={page.title} loading="lazy" />
          </div>
        </section>

        <section className="legacy-panel card legacy-dual-grid">
          <div className="legacy-copy">
            <span className="eyebrow">Why it works</span>
            <h2>Modern studio portraits without the heavy, formal feeling.</h2>
            <p>
              Each of these older SEO pages pointed to a slightly different search phrase, but the
              real reason people land on them is the same: they want portraits that feel elevated
              and usable in real life, not generic studio filler.
            </p>
          </div>

          <div className="legacy-copy">
            <span className="eyebrow">What people value</span>
            <ul className="legacy-checklist">
              {sharedReasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="legacy-cta card">
          <div>
            <span className="eyebrow">Book the studio</span>
            <h2>Turn the search into a session that actually fits what you need.</h2>
          </div>
          <Link to="/booking" className="button-primary">
            Start booking
          </Link>
        </section>
      </div>
    </div>
  );
};

export default SeoLanding;
