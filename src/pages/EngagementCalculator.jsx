import { useState } from 'react';
import { BarChart3, Calculator, RotateCcw, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './Tools.css';

const initialValues = {
  followers: '',
  reach: '',
  likes: '',
  comments: '',
  saves: '',
  shares: '',
};

const toNumber = (value) => Math.max(0, Number(value) || 0);
const formatNumber = (value) => new Intl.NumberFormat('en-AU', { maximumFractionDigits: 2 }).format(value);

const EngagementCalculator = () => {
  const [mode, setMode] = useState('followers');
  const [values, setValues] = useState(initialValues);

  usePageMeta({
    title: 'Free Instagram Engagement Rate Calculator | WePhoto',
    description: 'Calculate Instagram engagement rate by followers or reach using likes, comments, saves, and shares. Free, private, and no signup required.',
    canonicalPath: '/tools/engagement-rate-calculator',
  });

  const denominator = toNumber(values[mode]);
  const likes = toNumber(values.likes);
  const comments = toNumber(values.comments);
  const saves = toNumber(values.saves);
  const shares = toNumber(values.shares);
  const interactions = likes + comments + saves + shares;
  const engagementRate = denominator > 0 ? (interactions / denominator) * 100 : 0;
  const saveRate = denominator > 0 ? (saves / denominator) * 100 : 0;
  const shareRate = denominator > 0 ? (shares / denominator) * 100 : 0;

  const setValue = (key, value) => setValues((current) => ({ ...current, [key]: value }));
  const reset = () => setValues(initialValues);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Instagram Engagement Rate Calculator',
    url: 'https://wephoto.com.au/tools/engagement-rate-calculator',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  };

  return (
    <div className="tool-detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="tool-detail-hero site-shell" data-reveal>
        <Link to="/tools" className="tool-back-link">Creator tools / Calculator 01</Link>
        <span className="tools-kicker">Instagram analytics</span>
        <h1>Engagement Rate<br /><em>Calculator</em></h1>
        <p>Measure how actively people respond to your content. Compare by followers for a public benchmark or by reach for post performance.</p>
      </section>

      <section className="calculator-shell site-shell">
        <div className="calculator-panel" data-reveal>
          <div className="calculator-mode" aria-label="Calculation method">
            <button type="button" className={mode === 'followers' ? 'active' : ''} onClick={() => setMode('followers')}>By followers</button>
            <button type="button" className={mode === 'reach' ? 'active' : ''} onClick={() => setMode('reach')}>By reach</button>
          </div>

          <div className="calculator-form-grid">
            <label className="calculator-field calculator-field-wide">
              <span>{mode === 'followers' ? 'Total followers' : 'Accounts reached'}</span>
              <input
                type="number"
                min="0"
                inputMode="numeric"
                value={values[mode]}
                onChange={(event) => setValue(mode, event.target.value)}
                placeholder={mode === 'followers' ? 'e.g. 12500' : 'e.g. 8400'}
              />
            </label>
            {['likes', 'comments', 'saves', 'shares'].map((field) => (
              <label key={field} className="calculator-field">
                <span>{field[0].toUpperCase() + field.slice(1)}</span>
                <input type="number" min="0" inputMode="numeric" value={values[field]} onChange={(event) => setValue(field, event.target.value)} placeholder="0" />
              </label>
            ))}
          </div>

          <button type="button" className="calculator-reset" onClick={reset}><RotateCcw size={16} /> Reset values</button>
        </div>

        <aside className="calculator-result" aria-live="polite" data-reveal style={{ '--delay': '0.1s' }}>
          <span className="calculator-result-label">Your engagement rate</span>
          <strong>{formatNumber(engagementRate)}<small>%</small></strong>
          <p>({formatNumber(interactions)} interactions ÷ {formatNumber(denominator)} {mode}) × 100</p>
          <div className="calculator-result-stats">
            <span><small>Total interactions</small><b>{formatNumber(interactions)}</b></span>
            <span><small>Save rate</small><b>{formatNumber(saveRate)}%</b></span>
            <span><small>Share rate</small><b>{formatNumber(shareRate)}%</b></span>
          </div>
          <div className="calculator-result-note"><ShieldCheck size={18} /><span>Calculated only in your browser. WePhoto does not store these numbers.</span></div>
        </aside>
      </section>

      <section className="tool-explainer site-shell">
        <article data-reveal>
          <Calculator size={24} />
          <h2>What the formula measures</h2>
          <p>Engagement rate adds likes, comments, saves, and shares, then divides that total by followers or reach. Use the same method each time so the comparison stays meaningful.</p>
        </article>
        <article data-reveal style={{ '--delay': '0.08s' }}>
          <BarChart3 size={24} />
          <h2>Followers or reach?</h2>
          <p>Use followers when comparing accounts or building a media kit. Use reach when judging how an individual post performed among the people who actually saw it.</p>
        </article>
      </section>

      <section className="tool-reference site-shell">
        <header className="tools-section-heading" data-reveal>
          <span>How to use the result</span>
          <h2>Compare like with like, not one number in isolation.</h2>
        </header>
        <div className="tool-faq-grid">
          <details data-reveal>
            <summary>Which engagement method should I use?</summary>
            <p>Use followers when comparing public account performance. Use reach when reviewing a specific post or Reel because it reflects the people who actually saw that content.</p>
          </details>
          <details data-reveal>
            <summary>Why include saves and shares?</summary>
            <p>Likes and comments are only part of the response. Saves and shares can reveal that a post was useful enough to revisit or pass to someone else.</p>
          </details>
          <details data-reveal>
            <summary>Can I compare different post formats?</summary>
            <p>Yes, but keep the calculation method and date range consistent. Compare Reels with Reels and carousels with carousels before drawing broader conclusions.</p>
          </details>
          <details data-reveal>
            <summary>Does WePhoto store my account data?</summary>
            <p>No. This calculator does not connect to an account or send the values anywhere. The result is calculated locally in your browser.</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default EngagementCalculator;
