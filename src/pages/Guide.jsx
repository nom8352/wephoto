import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './LegacyPages.css';

const prepSteps = [
  'Arrive around 10 minutes early so you can settle in, unpack props, and adjust your outfit.',
  'Choose your clothes before the session and bring simple backup options if you are deciding between looks.',
  'Use the remote trigger and monitor preview to check posture, framing, and expression in real time.',
  'Keep the session moving with 2 or 3 planned moods rather than trying every pose you can think of.',
  'Download and shortlist images after the session instead of trying to judge every frame too quickly.',
];

const Guide = () => {
  usePageMeta({
    title: 'Guide | WePhoto Self-Portrait Studio Sydney',
    description:
      'Session guide for WePhoto self-portrait bookings in Gladesville, Sydney, including arrival, preparation, posing, and image selection tips.',
    canonicalPath: '/guide',
  });

  return (
    <div className="legacy-page">
      <div className="legacy-page-shell">
        <section className="legacy-hero card legacy-hero-grid">
          <div>
            <span className="eyebrow">Session guide</span>
            <h1>Everything you need before stepping into the studio.</h1>
            <p className="lead">
              The old WordPress guide focused on process, and that still matters. This version keeps
              the useful parts: how to arrive prepared, how to shoot confidently, and how to leave
              with stronger images.
            </p>

            <dl className="legacy-meta">
              <div>
                <dt>Best before you arrive</dt>
                <dd>Outfit planning, props, simple makeup touch-up, and a rough idea of your mood.</dd>
              </div>
              <div>
                <dt>During the session</dt>
                <dd>Use the remote slowly, watch the monitor, and keep your body language relaxed.</dd>
              </div>
            </dl>
          </div>

          <div className="legacy-visual">
            <img src="/img/IMG_2991.jpg" alt="WePhoto portrait session guide visual" loading="lazy" />
          </div>
        </section>

        <section className="legacy-panel card legacy-panel-grid">
          <div className="legacy-copy">
            <span className="eyebrow">How to prepare</span>
            <h2>Give yourself fewer decisions on the day.</h2>
            <p>
              The easiest way to get better photos is not a more complicated pose list. It is
              removing friction before the camera starts. Think through styling, references, and
              whether you want the photos to feel polished, playful, romantic, or clean and minimal.
            </p>

            <ol>
              {prepSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="legacy-spotlight card">
            <span className="eyebrow">Quick tip</span>
            <h3>Pick one hero outfit and one backup.</h3>
            <p>
              Bringing too many options usually eats into your shooting time. One look that feels
              safe and one alternative is usually the sweet spot.
            </p>

            <ul className="legacy-feature-list">
              <li>Neutral tones photograph cleanly and keep the focus on expression.</li>
              <li>Soft textures work well with maternity, couple, and family sessions.</li>
              <li>Structured pieces are stronger for branding and headshot-style portraits.</li>
            </ul>
          </div>
        </section>

        <section className="legacy-cta card">
          <div>
            <span className="eyebrow">Ready to book</span>
            <h2>Use the guide, then lock in a session that suits your pace.</h2>
            <p className="legacy-small">
              For current availability, timing, and inclusions, contact the studio directly.
            </p>
          </div>
          <Link to="/booking" className="button-primary">
            View booking page
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Guide;
