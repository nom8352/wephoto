import { Fragment } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './CouplePoseBook.css';

const VisualPoseBook = ({ book }) => {
  usePageMeta({
    title: book.title,
    description: book.description,
    canonicalPath: book.canonicalPath,
    image: book.image,
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: book.schemaName,
    url: `https://wephoto.com.au${book.canonicalPath}`,
    description: book.description,
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `https://wephoto.com.au${book.image}`,
      width: book.imageWidth,
      height: book.imageHeight,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: book.poses.length,
      itemListElement: book.poses.map((pose, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: pose.title,
      })),
    },
  };

  return (
    <div className="pose-book">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="pose-book-hero site-shell">
        <div className="pose-board card" data-reveal style={{ '--delay': '0.05s' }}>
          <header className="pose-board-header">
            <span className="eyebrow">{book.eyebrow}</span>
            <div className="pose-board-title">
              <span aria-hidden="true">12</span>
              <h1>
                {book.heading.map((line, index) => (
                  <Fragment key={line}>{index > 0 && <br />}{line}</Fragment>
                ))}
              </h1>
            </div>
            <p>
              {book.adjectives.map((adjective, index) => (
                <Fragment key={adjective}>{index > 0 && <i />}{adjective}</Fragment>
              ))}
            </p>
          </header>

          <figure className="pose-contact-sheet">
            <img
              src={book.image}
              alt={book.imageAlt}
              loading="eager"
              width={book.imageWidth}
              height={book.imageHeight}
            />
          </figure>

          <nav className="pose-sheet-legend" aria-label={`${book.schemaName} index`}>
            {book.poses.map((pose, index) => (
              <a key={pose.slug} href={`#${pose.slug}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{pose.title}</strong>
                  <small>{pose.mood}</small>
                </div>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="pose-guide site-shell">
        <header className="pose-guide-heading">
          <span className="eyebrow">{book.guideEyebrow}</span>
          <h2>{book.guideHeading}</h2>
          <p>{book.guideText}</p>
        </header>

        <div className="pose-guide-grid">
          {book.poses.map((pose, index) => (
            <article id={pose.slug} key={pose.slug} className="pose-guide-card card" data-reveal>
              <header>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{pose.title}</h3>
                  <p>{pose.mood}</p>
                </div>
              </header>
              <ol>
                {pose.cues.map((cue) => <li key={cue}>{cue}</li>)}
              </ol>
              <p className="pose-natural-note">{pose.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pose-book-cta site-shell">
        <div className="pose-book-cta-card card">
          <Heart size={28} strokeWidth={1.8} />
          <div>
            <span className="eyebrow">Save your favourites</span>
            <h2>Use the prompts as a starting point, then make the pose feel like you.</h2>
          </div>
          <Link to="/pose-book" className="button-primary">Explore more pose books</Link>
        </div>
      </section>
    </div>
  );
};

export default VisualPoseBook;
