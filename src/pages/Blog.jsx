import { Link } from 'react-router-dom';
import legacyPages from '../data/legacyPages.json';
import { usePageMeta } from '../hooks/usePageMeta';
import './LegacyPages.css';

const articlePaths = new Set([
  '/a-quick-insight-on-some-self-portrait-ideas-that-youll-love',
  '/get-the-perfect-self-portrait-photo-in-just-one-day',
  '/how-to-add-charm-to-your-self-portrait-photography',
  '/how-to-make-the-family-portrait-photography-a-cake-walk',
  '/mistakes-to-avoid-during-your-self-portrait-photography',
  '/photo-studio-sydney/an-insight-on-the-key-aspects-related-to-self-portrait-photography',
  '/selfies-with-a-pro-at-wephoto',
  '/tips-to-enhance-your-couple-photography-experience',
]);

const articles = legacyPages.filter((page) => articlePaths.has(page.path));

const Blog = () => {
  usePageMeta({
    title: 'Photography guides | WePhoto Blog',
    description:
      'Restored WePhoto guides covering self-portrait, couple, and family photography ideas.',
    canonicalPath: '/blog',
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'WePhoto photography guides',
    url: 'https://wephoto.com.au/blog',
    hasPart: articles.map((article) => ({
      '@type': 'Article',
      headline: article.title,
      url: `https://wephoto.com.au${article.path}`,
    })),
  };

  return (
    <div className="legacy-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="legacy-page-shell">
        <section className="legacy-hero card">
          <span className="eyebrow">WePhoto journal</span>
          <h1>Photography guides from the original studio website.</h1>
          <p className="lead">
            The complete set of self-portrait, couple, and family photography articles restored
            from the previous WePhoto site.
          </p>
        </section>

        <section className="journal-grid">
          {articles.map((article) => (
            <article key={article.path} className="journal-card card">
              <span className="journal-label">Photography guide</span>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <Link to={article.path}>Read the guide</Link>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Blog;
