import { Link } from 'react-router-dom';
import { guideArticles } from '../data/guideArticles';
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

const archiveArticles = legacyPages.filter((page) => articlePaths.has(page.path));

const Blog = () => {
  usePageMeta({
    title: 'Photography Guides for Better Social Content | WePhoto',
    description:
      'Practical WePhoto articles covering Instagram poses, selfies, couples, LinkedIn headshots, engagement rate, and image sizes.',
    canonicalPath: '/blog',
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'WePhoto photography guides',
    url: 'https://wephoto.com.au/blog',
    hasPart: [
      ...guideArticles.map((article) => ({
        '@type': 'Article',
        headline: article.headline,
        url: `https://wephoto.com.au${article.path}`,
      })),
      ...archiveArticles.map((article) => ({
        '@type': 'Article',
        headline: article.title,
        url: `https://wephoto.com.au${article.path}`,
      })),
    ],
  };

  return (
    <div className="legacy-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="legacy-page-shell">
        <section className="legacy-hero card">
          <span className="eyebrow">Photography guides</span>
          <h1>Better photos start before you press the shutter.</h1>
          <p className="lead">
            Practical reading on poses, selfies, couples, LinkedIn portraits, engagement maths, and
            image sizes — with free pose books and creator tools linked throughout.
          </p>
        </section>

        <section className="journal-grid">
          {guideArticles.map((article) => (
            <article key={article.path} className="journal-card card">
              <span className="journal-label">New guide</span>
              <h2>{article.headline}</h2>
              <p>{article.description}</p>
              <Link to={article.path}>Read the guide</Link>
            </article>
          ))}
          {archiveArticles.map((article) => (
            <article key={article.path} className="journal-card card">
              <span className="journal-label">From the WePhoto archive</span>
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
