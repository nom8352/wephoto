import { createElement } from 'react';
import { Camera, ChartNoAxesColumnIncreasing, Clapperboard, Crop, Lightbulb, ScanLine, Sparkles, Timer } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import './Guides.css';

const guideSections = [
  {
    id: 'photo-tips',
    number: '01',
    eyebrow: 'Photo tips',
    title: 'Make the shot stronger before you edit.',
    intro: 'Small technical checks create a much bigger improvement than another filter.',
    tips: [
      { icon: Sparkles, title: 'Clean the lens', text: 'A quick wipe removes the haze that makes phone photos look flat and low contrast.' },
      { icon: ScanLine, title: 'Choose the background first', text: 'Remove visual clutter, then place the person where the frame already feels balanced.' },
      { icon: Timer, title: 'Use a short timer', text: 'Three seconds is usually enough to hide the remote, reset the hands, and keep moving.' },
    ],
  },
  {
    id: 'reels',
    number: '02',
    eyebrow: 'Reels & video',
    title: 'Plan a sequence, not one perfect clip.',
    intro: 'A short-form video becomes easier when every shot has one simple job.',
    tips: [
      { icon: Clapperboard, title: 'Start with the result', text: 'Show the strongest visual first, then explain how you created it.' },
      { icon: Camera, title: 'Record three distances', text: 'Capture one wide, one medium, and one detail shot to make the edit feel intentional.' },
      { icon: Timer, title: 'Hold every action', text: 'Pause for one second before and after movement so each clip is easier to trim.' },
    ],
  },
  {
    id: 'editing',
    number: '03',
    eyebrow: 'Editing',
    title: 'Keep the finish consistent and believable.',
    intro: 'Editing should clarify the subject and mood, not replace the original photo.',
    tips: [
      { icon: Crop, title: 'Crop for the platform', text: 'Use a 4:5 frame for feed posts and keep important details away from the interface edges.' },
      { icon: Sparkles, title: 'Fix light before colour', text: 'Adjust exposure and contrast first, then make smaller colour changes across the set.' },
      { icon: ScanLine, title: 'Check the full carousel', text: 'View every image together so skin tone, warmth, and brightness stay consistent.' },
    ],
  },
  {
    id: 'social-growth',
    number: '04',
    eyebrow: 'Social growth',
    title: 'Make useful content easier to repeat.',
    intro: 'A clear system is more sustainable than trying to invent a new style for every post.',
    tips: [
      { icon: Lightbulb, title: 'Choose three content pillars', text: 'Repeat a small set of useful themes so people quickly understand why they should follow.' },
      { icon: ChartNoAxesColumnIncreasing, title: 'Study saves and shares', text: 'High-intent actions often reveal which topics deserve a follow-up better than likes alone.' },
      { icon: Clapperboard, title: 'Reuse the idea', text: 'Turn one useful topic into a photo post, a short video, and a concise caption.' },
    ],
  },
];

const Guides = () => {
  usePageMeta({
    title: 'Social Media Photo & Content Guides | WePhoto',
    description:
      'Learn practical social media photography, Reels, editing, and content-planning techniques for clearer, more confident posts.',
    canonicalPath: '/guides',
  });

  return (
    <div className="guides-page">
      <section className="guides-hero site-shell">
        <div className="guides-hero-card card" data-reveal>
          <span className="eyebrow">Create better content</span>
          <h1>Shoot smarter.<br />Share with purpose.</h1>
          <p className="lead">Short, practical lessons for creating social content that looks clear, feels natural, and is easier to repeat.</p>
          <nav aria-label="Guide sections">
            {guideSections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.eyebrow}</a>)}
          </nav>
        </div>
      </section>

      {guideSections.map((section) => (
        <section id={section.id} key={section.id} className="guide-section site-shell">
          <header className="guide-section-heading" data-reveal>
            <span>{section.number}</span>
            <div>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
              <p>{section.intro}</p>
            </div>
          </header>
          <div className="guide-tip-grid">
            {section.tips.map(({ icon, title, text }, index) => (
              <article key={title} className="guide-tip card" data-reveal style={{ '--delay': `${0.06 + index * 0.05}s` }}>
                <span>{createElement(icon, { size: 20, strokeWidth: 2 })}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Guides;
