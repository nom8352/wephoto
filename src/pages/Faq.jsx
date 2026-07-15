import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './LegacyPages.css';

const faqs = [
  {
    question: 'What is a WePhoto pose book?',
    answer: 'It is a visual contact sheet that places twelve related pose ideas in one image. The numbered legend and short directions sit outside the photographs so the sheet stays easy to scan.',
  },
  {
    question: 'How should I use the poses?',
    answer: 'Choose two or three ideas, copy the general body direction, then keep moving. The strongest photo is often the reaction or transition after the planned pose.',
  },
  {
    question: 'Are the guide images original?',
    answer: 'Yes. WePhoto creates original reference images for its pose books. We do not republish photographs taken from Pinterest boards or other creators’ websites.',
  },
  {
    question: 'Are the images real photo sessions?',
    answer: 'The new pose-book visuals are generated reference images. They are intended to explain body position, framing, and shot variety rather than represent a booked client session.',
  },
  {
    question: 'Can I save a sheet for a personal shoot?',
    answer: 'Yes. You may save a sheet for personal reference. Please link back to WePhoto when sharing the complete guide publicly, and do not resell or redistribute the image as your own product.',
  },
  {
    question: 'Does WePhoto still operate a portrait studio?',
    answer: 'No. The physical self-portrait studio is no longer operating. WePhoto now focuses on free pose books and practical photo, video, editing, and social content guides.',
  },
];

const Faq = () => {
  usePageMeta({
    title: 'FAQ | WePhoto Posebooks & Content Guides',
    description: 'Answers about WePhoto pose books, original guide images, personal use, and the new content-guide platform.',
    canonicalPath: '/faq',
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <div className="legacy-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="legacy-page-shell">
        <section className="legacy-hero card legacy-hero-grid">
          <div>
            <span className="eyebrow">FAQ</span>
            <h1>How to use WePhoto pose books.</h1>
            <p className="lead">A few clear answers about the visual guides, the images, and what WePhoto is building next.</p>
          </div>
          <div className="legacy-visual">
            <img
              src="/pose-assets/social/12-social-media-poses.webp"
              alt="WePhoto social media pose book"
              loading="lazy"
              decoding="async"
              width="887"
              height="1774"
            />
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
            <span className="eyebrow">Start here</span>
            <h2>Choose a complete twelve-pose visual guide.</h2>
          </div>
          <Link to="/pose-book" className="button-primary">Browse pose books</Link>
        </section>
      </div>
    </div>
  );
};

export default Faq;
