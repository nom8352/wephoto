import { Link } from 'react-router-dom';
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

const getLabel = (path) => {
  if (articlePaths.has(path)) return 'Photography journal';
  if (path === '/faq') return 'Frequently asked questions';
  if (path === '/guide') return 'Studio guide';
  if (path.includes('policy') || path.includes('refund')) return 'Studio policy';
  return 'Sydney photography';
};

const LegacyContentPage = ({ page }) => {
  const isArticle = articlePaths.has(page.path);
  const legacyHtml = page.html
    .replaceAll('href="/contact/"', 'href="/booking"')
    .replaceAll('href="/contact"', 'href="/booking"');

  usePageMeta({
    title: `${page.title} | WePhoto`,
    description: page.description,
    canonicalPath: page.path,
  });

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': isArticle ? 'Article' : 'WebPage',
    headline: page.title,
    name: page.title,
    description: page.description,
    url: `https://wephoto.com.au${page.path}`,
    inLanguage: 'en-AU',
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
    publisher: { '@id': 'https://wephoto.com.au/#studio' },
    isPartOf: { '@id': 'https://wephoto.com.au/#website' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://wephoto.com.au/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.title,
        item: `https://wephoto.com.au${page.path}`,
      },
    ],
  };

  return (
    <div className="legacy-page legacy-content-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="legacy-page-shell">
        <article className="legacy-article card">
          <header className="legacy-article-header">
            <span className="eyebrow">{getLabel(page.path)}</span>
            <h1>{page.title}</h1>
            {page.description && <p className="lead">{page.description}</p>}
          </header>

          {/* The stored markup is a tag-whitelisted snapshot extracted from the local backup. */}
          <div
            className="legacy-rich-text"
            dangerouslySetInnerHTML={{ __html: legacyHtml }}
          />
        </article>

        {!page.path.includes('policy') && !page.path.includes('refund') && (
          <section className="legacy-cta card">
            <div>
              <span className="eyebrow">WePhoto Studio</span>
              <h2>Ready to create your own studio portraits?</h2>
            </div>
            <Link to="/booking" className="button-primary">
              View session options
            </Link>
          </section>
        )}
      </div>
    </div>
  );
};

export default LegacyContentPage;
