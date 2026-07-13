import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './LegacyPages.css';

const groupPrices = [
  ['2 members', '$150'],
  ['3 members', '$180'],
  ['4 members', '$210'],
  ['5 members', '$240'],
  ['6 members', '$270'],
  ['7 members', '$300'],
  ['8 members', '$330'],
];

const Shop = ({ focus = 'all' }) => {
  const isSingle = focus === 'single';
  const isGroup = focus === 'group';
  const path = isSingle ? '/product/single-session' : isGroup ? '/product/group-session' : '/shop';
  const title = isSingle ? 'Single session' : isGroup ? 'Group session' : 'Session options';

  usePageMeta({
    title: `${title} | WePhoto`,
    description:
      'Original WePhoto self-portrait session options restored from the previous studio website.',
    canonicalPath: path,
  });

  const offers = [
    { '@type': 'Offer', name: 'Single session', price: '95', priceCurrency: 'AUD' },
    ...groupPrices.map(([name, price]) => ({
      '@type': 'Offer',
      name: `Group session - ${name}`,
      price: price.replace('$', ''),
      priceCurrency: 'AUD',
    })),
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'WePhoto self-portrait studio sessions',
    provider: { '@id': 'https://wephoto.com.au/#studio' },
    url: `https://wephoto.com.au${path}`,
    offers,
  };

  return (
    <div className="legacy-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="legacy-page-shell">
        <section className="legacy-hero card">
          <span className="eyebrow">Original session options</span>
          <h1>{title}</h1>
          <p className="lead">
            These session types and prices are restored from the previous WePhoto shop. Please
            confirm current availability when booking.
          </p>
        </section>

        <section className="session-grid">
          {!isGroup && (
            <article className="session-card card">
              <span className="session-price">$95 AUD</span>
              <h2>Single session</h2>
              <p>A private self-portrait studio session for one person.</p>
              <Link to="/booking" className="button-primary">Book a single session</Link>
            </article>
          )}

          {!isSingle && (
            <article className="session-card card">
              <span className="session-price">From $150 AUD</span>
              <h2>Group session</h2>
              <p>Original group pricing for two to eight people.</p>
              <dl className="session-prices">
                {groupPrices.map(([members, price]) => (
                  <div key={members}>
                    <dt>{members}</dt>
                    <dd>{price}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/booking" className="button-primary">Book a group session</Link>
            </article>
          )}
        </section>
      </div>
    </div>
  );
};

export default Shop;
