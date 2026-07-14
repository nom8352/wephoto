const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://wephoto.com.au/#studio',
    name: 'WePhoto',
    url: 'https://wephoto.com.au/',
    image: 'https://wephoto.com.au/img/WephotoMain.jpg',
    email: 'wephoto.sydney@gmail.com',
    description:
      'A private self-portrait and professional portrait studio in Gladesville, Sydney.',
    areaServed: 'Sydney',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://wephoto.com.au/#website',
    name: 'WePhoto',
    url: 'https://wephoto.com.au/',
    inLanguage: 'en-AU',
  },
];

const SiteSchemas = () =>
  schemas.map((schema) => (
    <script
      key={schema['@id']}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));

export default SiteSchemas;
