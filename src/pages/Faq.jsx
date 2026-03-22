import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './LegacyPages.css';

const faqs = [
  {
    question: 'How does a self-portrait session work?',
    answer:
      'You step into a prepared studio with professional lighting, a monitor preview, and a remote trigger. You control the timing, expressions, and pacing yourself.',
  },
  {
    question: 'Do I need photography experience?',
    answer:
      'No. The setup is designed to be simple. Most guests settle in after a few test shots and quickly find a rhythm.',
  },
  {
    question: 'Can I bring a partner, kids, or pets?',
    answer:
      'Yes. Couple, family, maternity, and pet-friendly sessions all fit the studio concept well, as long as the booking is planned for that group size.',
  },
  {
    question: 'What should I wear?',
    answer:
      'Choose outfits that match the mood you want in the final photos. Soft neutrals and well-fitted pieces usually photograph best.',
  },
  {
    question: 'Will I see the photos during the session?',
    answer:
      'Yes. Live monitor feedback helps you adjust your pose, expression, and framing as you go.',
  },
  {
    question: 'How do I get my images after the session?',
    answer:
      'Image delivery and selection details can vary, so the best option is to confirm the current process at the time of booking.',
  },
];

const Faq = () => {
  usePageMeta({
    title: 'FAQ | WePhoto Self-Portrait Studio Sydney',
    description:
      'Frequently asked questions about WePhoto self-portrait sessions in Sydney, including what to wear, how the studio works, and who the sessions suit.',
    canonicalPath: '/faq',
  });

  return (
    <div className="legacy-page">
      <div className="legacy-page-shell">
        <section className="legacy-hero card legacy-hero-grid">
          <div>
            <span className="eyebrow">FAQ</span>
            <h1>Questions people usually ask before their first session.</h1>
            <p className="lead">
              The old FAQ page explained the basics of the self-portrait studio. This version keeps
              the useful answers and strips away the filler.
            </p>
          </div>

          <div className="legacy-visual">
            <img src="/img/IMG_1648.jpg" alt="WePhoto frequently asked questions" loading="lazy" />
          </div>
        </section>

        <section className="legacy-faq-grid">
          {faqs.map((item) => (
            <article key={item.question} className="legacy-faq card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </section>

        <section className="legacy-cta card">
          <div>
            <span className="eyebrow">Still unsure?</span>
            <h2>Ask about your session and we can point you in the right direction.</h2>
          </div>
          <Link to="/contact" className="button-primary">
            Contact WePhoto
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Faq;
