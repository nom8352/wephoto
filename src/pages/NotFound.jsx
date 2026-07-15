import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './LegacyPages.css';

const NotFound = () => {
  usePageMeta({
    title: 'Page not found | WePhoto',
    description: 'The requested WePhoto page could not be found.',
    canonicalPath: '/404',
    robots: 'noindex, follow',
  });

  return (
    <div className="legacy-page">
      <section className="legacy-hero card not-found">
        <span className="eyebrow">404</span>
        <h1>This page is no longer here.</h1>
        <p className="lead">
          The address may be outdated. Browse the pose library or return to the homepage to continue.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="button-primary">Return home</Link>
          <Link to="/pose-book" className="button-secondary">Browse pose books</Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
