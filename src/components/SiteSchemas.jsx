const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://wephoto.com.au/#organization',
    name: 'WePhoto',
    url: 'https://wephoto.com.au/',
    image: 'https://wephoto.com.au/pose-assets/social/12-social-media-poses.webp',
    description:
      'An English-language library of visual pose books and practical social media content guides.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://wephoto.com.au/#website',
    name: 'WePhoto',
    url: 'https://wephoto.com.au/',
    inLanguage: 'en-AU',
    publisher: { '@id': 'https://wephoto.com.au/#organization' },
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
