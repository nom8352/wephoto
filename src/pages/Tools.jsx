import { ArrowRight, Calculator, Camera, ChartNoAxesColumnIncreasing, Clock3, Image, ScanLine, TextCursorInput, WalletCards } from 'lucide-react';
import { createElement } from 'react';
import { Link } from 'react-router-dom';
import NextStep from '../components/NextStep';
import PrivacyBadge from '../components/PrivacyBadge';
import { usePageMeta } from '../hooks/usePageMeta';
import './Tools.css';

const liveTools = [
  {
    icon: Calculator,
    title: 'Engagement Rate Calculator',
    description: 'Calculate engagement by followers or reach using likes, comments, saves, and shares.',
    href: '/tools/engagement-rate-calculator',
    label: 'Calculate engagement',
  },
  {
    icon: Image,
    title: 'Image Size & Ratio Calculator',
    description: 'Match an image to Instagram, Pinterest, YouTube, and LinkedIn dimensions without stretching it.',
    href: '/tools/image-size-calculator',
    label: 'Check image size',
  },
  {
    icon: ScanLine,
    title: 'Reels Safe Zone Checker',
    description: 'Preview where Instagram Reels and TikTok controls may cover faces, titles, and captions.',
    href: '/tools/reels-safe-zone-checker',
    label: 'Check safe zones',
  },
  {
    icon: TextCursorInput,
    title: 'Caption Character Counter',
    description: 'Count characters, preview cutoffs, hashtags, and mentions for Instagram, TikTok, LinkedIn, and X.',
    href: '/tools/caption-character-counter',
    label: 'Count characters',
  },
];

const nextTools = [
  { icon: ChartNoAxesColumnIncreasing, title: 'Follower Growth Calculator', text: 'Measure growth between two dates and project the next 30 days.' },
  { icon: Clock3, title: 'Content Capacity Planner', text: 'Turn your available weekly hours into a realistic publishing plan.' },
  { icon: WalletCards, title: 'Campaign ROI Calculator', text: 'Compare spend, revenue, leads, reach, and cost per engagement.' },
];

const Tools = () => {
  usePageMeta({
    title: 'Free Social Media Creator Tools | WePhoto',
    description: 'Use free WePhoto calculators for social media engagement, image sizes, aspect ratios, and more. No signup and no account connection.',
    canonicalPath: '/tools',
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free Social Media Creator Tools',
    url: 'https://wephoto.com.au/tools',
    description: 'Free browser-based calculators and planning tools for creators.',
    hasPart: liveTools.map((tool) => ({
      '@type': 'WebApplication',
      name: tool.title,
      url: `https://wephoto.com.au${tool.href}`,
      applicationCategory: 'UtilitiesApplication',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
    })),
  };

  return (
    <div className="tools-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="tools-hero site-shell">
        <div data-reveal>
          <span className="tools-kicker">Free creator toolkit</span>
          <h1>Useful numbers.<br /><em>Clear next steps.</em></h1>
          <p>Simple tools for planning, measuring, and preparing social content. Everything runs in your browser with no signup.</p>
          <PrivacyBadge />
        </div>
        <div className="tools-hero-badge" data-reveal style={{ '--delay': '0.12s' }}>
          <span>04</span>
          <strong>live tools</strong>
          <small>Private. Fast. Free.</small>
        </div>
      </section>

      <section className="tools-live site-shell">
        <header className="tools-section-heading" data-reveal>
          <span>Available now</span>
          <h2>Start with the numbers you already have.</h2>
        </header>
        <div className="tools-live-grid">
          {liveTools.map(({ icon: Icon, title, description, href, label }, index) => (
            <Link key={href} to={href} className="tools-live-card" data-reveal style={{ '--delay': `${0.08 + index * 0.08}s` }}>
              <span className="tools-card-number">0{index + 1} / 0{liveTools.length}</span>
              <span className="tools-card-icon">{createElement(Icon, { size: 28, strokeWidth: 1.8 })}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <strong>{label} <ArrowRight size={17} aria-hidden="true" /></strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="tools-next site-shell">
        <header className="tools-section-heading" data-reveal>
          <span>Next in the toolkit</span>
          <h2>More practical tools, built around real creator work.</h2>
        </header>
        <div className="tools-next-grid">
          {nextTools.map(({ icon: Icon, title, text }, index) => (
            <article key={title} data-reveal style={{ '--delay': `${0.05 + index * 0.05}s` }}>
              {createElement(Icon, { size: 22, strokeWidth: 1.8 })}
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <NextStep
        heading="Need better photos to post in the first place?"
        items={[
          {
            to: '/pose-book',
            eyebrow: 'Pose library',
            title: 'Browse 108 pose ideas',
            text: 'Nine visual pose sheets with step-by-step direction for every shot.',
            icon: Camera,
          },
        ]}
      />
    </div>
  );
};

export default Tools;
