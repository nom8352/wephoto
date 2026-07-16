import { useState } from 'react';
import { Camera, RotateCcw, ScanLine, TextCursorInput, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import NextStep from '../components/NextStep';
import PrivacyBadge from '../components/PrivacyBadge';
import { usePageMeta } from '../hooks/usePageMeta';
import './Tools.css';

const platforms = {
  reels: {
    id: 'reels',
    label: 'Instagram Reels',
    ratio: '9:16',
    top: 11,
    bottom: 22,
    right: 14,
    note: 'Username, audio, captions, and the right-side action column often cover these edges.',
  },
  tiktok: {
    id: 'tiktok',
    label: 'TikTok',
    ratio: '9:16',
    top: 10,
    bottom: 25,
    right: 15,
    note: 'Captions, sounds, and the interaction column sit higher and wider than many people expect.',
  },
};

const ReelsSafeZone = () => {
  const [platformId, setPlatformId] = useState('reels');
  const [showTop, setShowTop] = useState(true);
  const [showBottom, setShowBottom] = useState(true);
  const [showRight, setShowRight] = useState(true);
  const [caption, setCaption] = useState('Keep faces and key text inside the clear centre.');

  usePageMeta({
    title: 'Reels Safe Zone Checker | Free Creator Tool | WePhoto',
    description:
      'Preview Instagram Reels and TikTok safe zones for text and faces. See which edges platform controls may cover — free, private, no signup.',
    canonicalPath: '/tools/reels-safe-zone-checker',
  });

  const platform = platforms[platformId];
  const safeHeight = 100 - platform.top - platform.bottom;
  const safeWidth = 100 - platform.right;

  const reset = () => {
    setPlatformId('reels');
    setShowTop(true);
    setShowBottom(true);
    setShowRight(true);
    setCaption('Keep faces and key text inside the clear centre.');
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Reels Safe Zone Checker',
    url: 'https://wephoto.com.au/tools/reels-safe-zone-checker',
    description: 'Preview where Instagram Reels and TikTok interface controls may cover text and faces in a 9:16 frame.',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  };

  return (
    <div className="tool-detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="tool-detail-hero site-shell" data-reveal>
        <Link to="/tools" className="tool-back-link">Creator tools / Checker 03</Link>
        <span className="tools-kicker">Short-form video layout</span>
        <h1>Reels Safe Zone<br /><em>Checker</em></h1>
        <p>Preview where platform controls may cover faces, titles, and captions in a 9:16 frame before you export.</p>
        <PrivacyBadge />
      </section>

      <section className="calculator-shell site-shell safe-zone-shell">
        <div className="calculator-panel" data-reveal>
          <div className="calculator-mode" aria-label="Platform">
            {Object.values(platforms).map((item) => (
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

          <div className="safe-zone-toggles" aria-label="Overlay layers">
            <label>
              <input type="checkbox" checked={showTop} onChange={(event) => setShowTop(event.target.checked)} />
              <span>Top UI ({platform.top}%)</span>
            </label>
            <label>
              <input type="checkbox" checked={showBottom} onChange={(event) => setShowBottom(event.target.checked)} />
              <span>Bottom UI ({platform.bottom}%)</span>
            </label>
            <label>
              <input type="checkbox" checked={showRight} onChange={(event) => setShowRight(event.target.checked)} />
              <span>Right actions ({platform.right}%)</span>
            </label>
          </div>

          <label className="calculator-field calculator-field-wide safe-zone-caption-field">
            <span>Sample caption (preview only)</span>
            <textarea
              rows={3}
              value={caption}
              onChange={(event) => setCaption(event.target.value)}
              placeholder="Type a short caption to see where it sits"
            />
          </label>

          <p className="safe-zone-note">{platform.note}</p>
          <button type="button" className="calculator-reset" onClick={reset}>
            <RotateCcw size={16} aria-hidden="true" /> Reset preview
          </button>
        </div>

        <aside className="calculator-result safe-zone-result" aria-live="polite" data-reveal style={{ '--delay': '0.1s' }}>
          <span className="calculator-result-label">{platform.label} · {platform.ratio}</span>

          <div className="safe-zone-frame" style={{ '--safe-top': `${platform.top}%`, '--safe-bottom': `${platform.bottom}%`, '--safe-right': `${platform.right}%` }}>
            <div className="safe-zone-canvas">
              {showTop && <div className="safe-zone-band safe-zone-top" aria-hidden="true"><span>Top UI</span></div>}
              {showBottom && (
                <div className="safe-zone-band safe-zone-bottom" aria-hidden="true">
                  <span>Bottom UI</span>
                  {caption.trim() && <p className="safe-zone-caption-preview">{caption.trim()}</p>}
                </div>
              )}
              {showRight && <div className="safe-zone-band safe-zone-right" aria-hidden="true"><span>Actions</span></div>}
              <div className="safe-zone-clear">
                <ScanLine size={22} aria-hidden="true" />
                <strong>Clear centre</strong>
                <small>~{safeWidth}% × ~{safeHeight}%</small>
              </div>
            </div>
          </div>

          <div className="calculator-result-stats">
            <span><small>Top cover</small><b>{platform.top}%</b></span>
            <span><small>Bottom cover</small><b>{platform.bottom}%</b></span>
            <span><small>Right cover</small><b>{platform.right}%</b></span>
          </div>
          <div className="calculator-result-note">
            <ScanLine size={18} aria-hidden="true" />
            <span>Approximate guides for planning. Real UI can shift by device, language, and app version.</span>
          </div>
        </aside>
      </section>

      <section className="tool-explainer site-shell">
        <article data-reveal>
          <ScanLine size={24} aria-hidden="true" />
          <h2>Keep the subject in the clear centre</h2>
          <p>Place faces, product details, and titles away from the top bar, bottom caption stack, and right-side buttons so the shot still reads when controls appear.</p>
        </article>
        <article data-reveal style={{ '--delay': '0.08s' }}>
          <Camera size={24} aria-hidden="true" />
          <h2>Check before you burn text into the edit</h2>
          <p>If you add on-screen text in CapCut or Premiere, preview it against these bands first. Captions that sit too low get buried under the platform UI.</p>
        </article>
      </section>

      <section className="tool-reference site-shell">
        <header className="tools-section-heading" data-reveal>
          <span>How to use the result</span>
          <h2>Plan the frame, then lock the edit.</h2>
        </header>
        <div className="tool-faq-grid">
          <details data-reveal>
            <summary>Are these percentages exact?</summary>
            <p>No. They are practical planning guides based on common Reels and TikTok layouts. Device size, language, and app updates can move controls slightly.</p>
          </details>
          <details data-reveal>
            <summary>Do I need to upload a video?</summary>
            <p>No. This checker never uploads media. Use the empty frame as a composition guide while you edit elsewhere.</p>
          </details>
          <details data-reveal>
            <summary>Where should faces sit?</summary>
            <p>Keep eyes and key facial features inside the clear centre. Avoid placing the subject under the top username area or deep into the bottom caption stack.</p>
          </details>
          <details data-reveal>
            <summary>Does this work for Stories too?</summary>
            <p>Stories share a 9:16 ratio, but sticker and reply UI differ. Use this tool mainly for Reels and TikTok; Stories need a slightly different bottom margin.</p>
          </details>
        </div>
      </section>

      <NextStep
        heading="Keep preparing the post."
        items={[
          {
            to: '/tools/caption-character-counter',
            eyebrow: 'Before you post',
            title: 'Count your caption',
            text: 'Check character limits and preview cutoffs for Instagram, TikTok, LinkedIn, and X.',
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

export default ReelsSafeZone;
