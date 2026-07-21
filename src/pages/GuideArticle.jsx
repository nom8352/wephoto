import { ArrowRight } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './GuideArticle.css';

const GuideArticleContent = ({ article }) => {
  usePageMeta({
    title: article.title,
    description: article.description,
    canonicalPath: article.path,
    image: article.image,
  });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    url: `https://wephoto.com.au${article.path}`,
    image: `https://wephoto.com.au${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    inLanguage: 'en-AU',
    author: { '@id': 'https://wephoto.com.au/#organization' },
    publisher: { '@id': 'https://wephoto.com.au/#organization' },
    isPartOf: { '@id': 'https://wephoto.com.au/#website' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wephoto.com.au/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://wephoto.com.au/guides' },
      { '@type': 'ListItem', position: 3, name: article.headline, item: `https://wephoto.com.au${article.path}` },
    ],
  };

  return (
    <article className="guide-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="guide-article-hero site-shell" data-reveal>
        <Link to="/guides" className="guide-article-back">Guides / Deep dive</Link>
        <span className="eyebrow">{article.eyebrow}</span>
        <h1>{article.headline}</h1>
        <p className="lead">{article.intro}</p>
        <p className="guide-article-date">Updated {article.datePublished}</p>
      </header>

      <div className="guide-article-body site-shell">
        {article.sections.map((section) => (
          <section key={section.heading} className="guide-article-section card" data-reveal>
            <h2>{section.heading}</h2>
            {(section.paragraphs || []).map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            {section.bullets?.length > 0 && (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {article.sources?.length > 0 && (
        <section className="guide-article-sources site-shell" data-reveal>
          <span className="eyebrow">Sources and further reading</span>
          <ul>
            {article.sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noopener noreferrer">
                  {source.label}
                </a>
                <span>{source.publisher}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="guide-article-related site-shell" data-reveal>
        <div className="guide-article-related-card card">
          <span className="eyebrow">Keep going</span>
          <h2>Use the related pose book or tool next.</h2>
          <div className="guide-article-related-links">
            {article.related.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

const GuideArticle = ({ article }) => {
  if (!article) return <Navigate to="/guides" replace />;
  return <GuideArticleContent article={article} />;
};

export default GuideArticle;
