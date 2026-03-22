import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './LegacyPages.css';

const inclusions = [
  'Private studio space with lighting already set up',
  'Remote trigger and monitor preview for easy self-direction',
  'Flexible session types for solo, couples, family, maternity, and pet portraits',
  'A calmer alternative to a traditional photographer-led shoot',
];

const Booking = () => {
  usePageMeta({
    title: 'Booking | WePhoto Self-Portrait Studio Sydney',
    description:
      'Book a private self-portrait, couple, family, maternity, or headshot session at WePhoto in Gladesville, Sydney.',
    canonicalPath: '/booking',
  });

  return (
    <div className="legacy-page">
      <div className="legacy-page-shell">
        <section className="legacy-hero card legacy-hero-grid">
          <div>
            <span className="eyebrow">Booking</span>
            <h1>Book a portrait session that feels private, polished, and easy.</h1>
            <p className="lead">
              The old booking page focused on packages. Instead of repeating old pricing from the
              backup, this page is set up to explain the booking experience clearly and send people
              to the right next step.
            </p>

            <dl className="legacy-meta">
              <div>
                <dt>Best for</dt>
                <dd>Self portraits, couples, families, maternity, pets, and simple branding photos.</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Gladesville NSW 2111, with the current session details confirmed directly.</dd>
              </div>
            </dl>
          </div>

          <div className="legacy-visual">
            <img src="/img/IMG_3217.jpg" alt="Booking a WePhoto portrait session" loading="lazy" />
          </div>
        </section>

        <section className="legacy-panel card legacy-dual-grid">
          <div className="legacy-copy">
            <span className="eyebrow">What you get</span>
            <h2>A studio that does the technical work for you.</h2>
            <ul className="legacy-checklist">
              {inclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="legacy-copy">
            <span className="eyebrow">Before you enquire</span>
            <h2>Have these ready.</h2>
            <ul className="legacy-checklist">
              <li>Your preferred session type and who is attending.</li>
              <li>Your ideal date or time window.</li>
              <li>Whether you want clean studio portraits, softer lifestyle images, or a mix.</li>
              <li>Any special needs such as babies, pets, wardrobe changes, or milestone photos.</li>
            </ul>
          </div>
        </section>

        <section className="legacy-cta card">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>Send your preferred date and session type to start the booking.</h2>
            <p className="legacy-small">
              This keeps the booking page current without publishing outdated package details from
              the old site.
            </p>
          </div>
          <Link to="/contact" className="button-primary">
            Go to contact
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Booking;
