import { Link } from 'react-router-dom';
import { getLegacySeo } from '../data/legacySeo';
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
  return 'WePhoto guide';
};

const LegacyContentPage = ({ page }) => {
  const isArticle = articlePaths.has(page.path);
  const seo = getLegacySeo(page);
  const legacyHtml = page.html
    .replaceAll(
      'src="/legacy/2021/11/wephoto_photo_studio-5.jpg"',
      'width="1080" height="1080" src="/legacy/2021/11/wephoto_photo_studio-5.jpg"',
    )
    .replaceAll('href="/contact/"', 'href="/pose-book"')
    .replaceAll('href="/contact"', 'href="/pose-book"')
    .replaceAll('href="/booking/"', 'href="/pose-book"')
    .replaceAll('href="/booking"', 'href="/pose-book"');

  usePageMeta({
    title: seo.title,
    description: seo.description,
    canonicalPath: page.path,
  });

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': isArticle ? 'Article' : 'WebPage',
    headline: page.title,
    name: page.title,
    description: seo.description,
    url: `https://wephoto.com.au${page.path}`,
    inLanguage: 'en-AU',
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
    publisher: { '@id': 'https://wephoto.com.au/#organization' },
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

          <aside className="legacy-archive-note">
            <strong>Archive note</strong>
            <p>This guide comes from the former WePhoto studio archive. The physical studio is no longer operating; WePhoto now publishes pose books and social content guides.</p>
          </aside>

          {/* The stored markup is a tag-whitelisted snapshot extracted from the local backup. */}
          <div
            className="legacy-rich-text"
            dangerouslySetInnerHTML={{ __html: legacyHtml }}
          />
        </article>

        {isArticle && (
          <section className="legacy-cta card">
            <div>
              <span className="eyebrow">Try it visually</span>
              <h2>Choose twelve poses for your next photo.</h2>
            </div>
            <Link to="/pose-book" className="button-primary">
              Browse pose books
            </Link>
          </section>
        )}
      </div>
    </div>
  );
};

export default LegacyContentPage;
