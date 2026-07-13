import { usePageMeta } from '../hooks/usePageMeta';
import './Portfolio.css';

const images = [
  'IMG_0428-705x529.jpg',
  'IMG_0684-705x529.jpg',
  'IMG_2817-705x529.jpg',
  'IMG_0521-705x529.jpg',
  'IMG_2473.jpg',
  'IMG_2119-705x529.jpg',
];

const Gallery = () => {
  usePageMeta({
    title: 'Gallery | WePhoto Studio',
    description: 'The original WePhoto studio gallery, restored from the previous website.',
    canonicalPath: '/gallery',
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'WePhoto Gallery',
    url: 'https://wephoto.com.au/gallery',
    image: images.map((image) => `https://wephoto.com.au/legacy/2021/11/${image}`),
  };

  return (
    <div className="portfolio fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <header className="portfolio-header">
        <h1 className="page-title">Gallery</h1>
        <p className="page-subtitle">The original WePhoto gallery, restored from our studio archive.</p>
      </header>

      <div className="portfolio-grid">
        {images.map((image, index) => (
          <figure key={image} className="portfolio-item glass">
            <img
              src={`/legacy/2021/11/${image}`}
              alt={`WePhoto studio gallery portrait ${index + 1}`}
              loading="lazy"
              className="gallery-image"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
