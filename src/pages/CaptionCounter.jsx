import { useMemo, useState } from 'react';
import { Camera, RotateCcw, TextCursorInput, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import NextStep from '../components/NextStep';
import PrivacyBadge from '../components/PrivacyBadge';
import { usePageMeta } from '../hooks/usePageMeta';
import './Tools.css';

const platforms = [
  {
    id: 'instagram-caption',
    label: 'Instagram caption',
    limit: 2200,
    softLimit: 125,
    softLabel: 'Preview before “more”',
    tip: 'Only the first ~125 characters show before the “more” fold in the feed.',
  },
  {
    id: 'instagram-bio',
    label: 'Instagram bio',
    limit: 150,
    tip: 'Keep the first line clear — many people only scan the top of a profile bio.',
  },
  {
    id: 'tiktok-caption',
    label: 'TikTok caption',
    limit: 2200,
    tip: 'Put the hook first. Hashtags still count toward the character total.',
  },
  {
    id: 'linkedin-post',
    label: 'LinkedIn post',
    limit: 3000,
    softLimit: 210,
    softLabel: 'Preview before “see more”',
    tip: 'LinkedIn often truncates around the first few lines on desktop and mobile.',
  },
  {
    id: 'x-post',
    label: 'X / Twitter post',
    limit: 280,
    tip: 'Links and emoji can count as more than one character depending on the platform.',
  },
];

const countHashtags = (text) => (text.match(/(^|\s)#[\p{L}\p{N}_]+/gu) || []).length;
const countMentions = (text) => (text.match(/(^|\s)@[\p{L}\p{N}_.]+/gu) || []).length;
const countWords = (text) => (text.trim() ? text.trim().split(/\s+/).length : 0);
const countLines = (text) => (text.length ? text.split(/\r\n|\r|\n/).length : 0);

const CaptionCounter = () => {
  const [platformId, setPlatformId] = useState('instagram-caption');
  const [text, setText] = useState('Save this pose guide before your next shoot.');

  usePageMeta({
    title: 'Caption Character Counter | Free Creator Tool | WePhoto',
    description:
      'Count caption characters for Instagram, TikTok, LinkedIn, and X. See limits, preview cutoffs, hashtags, and mentions — free, private, no signup.',
    canonicalPath: '/tools/caption-character-counter',
  });

  const platform = platforms.find((item) => item.id === platformId) ?? platforms[0];
  const characters = [...text].length;
  const remaining = platform.limit - characters;
  const percent = Math.min(100, Math.round((characters / platform.limit) * 100));
  const status = characters > platform.limit ? 'over' : characters >= platform.limit * 0.9 ? 'near' : 'ok';
  const softExceeded = platform.softLimit != null && characters > platform.softLimit;

  const stats = useMemo(
    () => ({
      words: countWords(text),
      lines: countLines(text),
      hashtags: countHashtags(text),
      mentions: countMentions(text),
    }),
    [text],
  );

  const reset = () => {
    setPlatformId('instagram-caption');
    setText('Save this pose guide before your next shoot.');
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Caption Character Counter',
    url: 'https://wephoto.com.au/tools/caption-character-counter',
    description: 'Count social media caption characters against Instagram, TikTok, LinkedIn, and X limits without uploading content.',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  };

  return (
    <div className="tool-detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="tool-detail-hero site-shell" data-reveal>
        <Link to="/tools" className="tool-back-link">Creator tools / Counter 04</Link>
        <span className="tools-kicker">Caption planning</span>
        <h1>Caption Character<br /><em>Counter</em></h1>
        <p>Check length, remaining room, and preview cutoffs before you paste a caption into Instagram, TikTok, LinkedIn, or X.</p>
        <PrivacyBadge />
      </section>

      <section className="calculator-shell site-shell">
        <div className="calculator-panel" data-reveal>
          <div className="caption-platform-grid" aria-label="Platform">
            {platforms.map((item) => (
              <button
                key={item.id}
                type="button"
                className={platformId === item.id ? 'active' : ''}
                aria-pressed={platformId === item.id}
                onClick={() => setPlatformId(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <label className="calculator-field calculator-field-wide caption-text-field">
            <span>Your caption or bio</span>
            <textarea
              rows={8}
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Paste or type your caption here"
              spellCheck
            />
          </label>

          <p className="safe-zone-note">{platform.tip}</p>
          <button type="button" className="calculator-reset" onClick={reset}>
            <RotateCcw size={16} aria-hidden="true" /> Reset values
          </button>
        </div>

        <aside className="calculator-result" aria-live="polite" data-reveal style={{ '--delay': '0.1s' }}>
          <span className="calculator-result-label">{platform.label}</span>
          <strong className={`caption-count caption-count-${status}`}>
            {characters}
            <small> / {platform.limit}</small>
          </strong>
          <p>
            {remaining >= 0
              ? `${remaining} characters remaining`
              : `${Math.abs(remaining)} characters over the limit`}
          </p>

          <div className="caption-meter" aria-hidden="true">
            <span className={`caption-meter-fill caption-meter-${status}`} style={{ width: `${percent}%` }} />
            {platform.softLimit != null && (
              <span className="caption-meter-soft" style={{ left: `${Math.min(100, (platform.softLimit / platform.limit) * 100)}%` }} />
            )}
          </div>

          {platform.softLimit != null && (
            <p className={`caption-soft-note${softExceeded ? ' is-over' : ''}`}>
              {platform.softLabel}: {platform.softLimit} characters
              {softExceeded ? ' — your text already extends past the preview fold.' : ' — keep the hook before this point.'}
            </p>
          )}

          <div className="calculator-result-stats">
            <span><small>Words</small><b>{stats.words}</b></span>
            <span><small>Lines</small><b>{stats.lines}</b></span>
            <span><small>Hashtags</small><b>{stats.hashtags}</b></span>
            <span><small>Mentions</small><b>{stats.mentions}</b></span>
          </div>
          <div className="calculator-result-note">
            <TextCursorInput size={18} aria-hidden="true" />
            <span>Counted in your browser with Unicode code points. Emoji and some links may still count differently on the live platform.</span>
          </div>
        </aside>
      </section>

      <section className="tool-explainer site-shell">
        <article data-reveal>
          <TextCursorInput size={24} aria-hidden="true" />
          <h2>Lead with the line people will actually see</h2>
          <p>Put the benefit, pose prompt, or question first. On Instagram and LinkedIn, everything after the preview fold is optional reading.</p>
        </article>
        <article data-reveal style={{ '--delay': '0.08s' }}>
          <Camera size={24} aria-hidden="true" />
          <h2>Pair the caption with a clearer visual</h2>
          <p>A short caption works better when the photo already shows the idea. Use a pose sheet, then size the image before you post.</p>
        </article>
      </section>

      <section className="tool-reference site-shell">
        <header className="tools-section-heading" data-reveal>
          <span>How to use the result</span>
          <h2>Stay under the limit without sounding cut off.</h2>
        </header>
        <div className="tool-faq-grid">
          <details data-reveal>
            <summary>Do hashtags count toward the limit?</summary>
            <p>Yes. Hashtags and mentions are part of the caption text and count toward the platform character total.</p>
          </details>
          <details data-reveal>
            <summary>Why is there a second “preview” number?</summary>
            <p>Instagram and LinkedIn often hide the rest of a post behind “more” or “see more”. The soft limit helps you keep the strongest line visible without a tap.</p>
          </details>
          <details data-reveal>
            <summary>Are emoji counted exactly?</summary>
            <p>This tool counts Unicode code points in your browser. Some platforms still treat complex emoji or links differently, so leave a small buffer near the hard limit.</p>
          </details>
          <details data-reveal>
            <summary>Does WePhoto store my caption?</summary>
            <p>No. The text never leaves your browser and is not uploaded to WePhoto.</p>
          </details>
        </div>
      </section>

      <NextStep
        heading="Keep preparing the post."
        items={[
          {
            to: '/tools/reels-safe-zone-checker',
            eyebrow: 'Before you export',
            title: 'Check Reels safe zones',
            text: 'Preview where platform controls may cover faces, titles, and captions.',
            icon: TextCursorInput,
          },
          {
            to: '/pose-book',
            eyebrow: 'Pose library',
            title: 'Browse 108 pose ideas',
            text: 'Nine visual pose sheets with step-by-step direction for every shot.',
            icon: Users,
          },
        ]}
      />
    </div>
  );
};

export default CaptionCounter;
