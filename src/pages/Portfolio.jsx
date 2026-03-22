import './Portfolio.css';
import { useLocation } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const Portfolio = () => {
  const location = useLocation();
  const images = [
    'IMG_0491.jpg', 'IMG_0501.jpg', 'IMG_0503.jpg', 'IMG_0505.jpg', 'IMG_0507.jpg',
    'IMG_0654.jpg', 'IMG_1063.jpg', 'IMG_1164.jpg', 'IMG_1175.jpg', 'IMG_1179.jpg',
    'IMG_1194.jpg', 'IMG_1221.jpg', 'IMG_1648.jpg', 'IMG_1659.jpg', 'IMG_1660.jpg',
    'IMG_1721.jpg', 'IMG_1723.jpg', 'IMG_1725.jpg', 'IMG_1816.jpg', 'IMG_2777.jpg',
    'IMG_2810.jpg', 'IMG_2842.jpg', 'IMG_2877.jpg', 'IMG_2878.jpg', 'IMG_2984.jpg',
    'IMG_2991.jpg', 'IMG_3018.jpg', 'IMG_3070.jpg', 'IMG_3095.jpg', 'IMG_3117.jpg',
    'IMG_3217.jpg'
  ];

  usePageMeta({
    title: 'Portfolio | WePhoto Studio',
    description:
      'Browse portrait examples from WePhoto including self-portraits, couples, maternity, and studio sessions.',
    canonicalPath: location.pathname === '/gallery' ? '/gallery' : '/portfolio',
  });

  return (
    <div className="portfolio fade-in">
      <header className="portfolio-header">
        <h1 className="page-title">Portfolio</h1>
        <p className="page-subtitle">A collection of captured memories, from intimate self-portraits to professional editorial work.</p>
      </header>

      <div className="portfolio-grid">
        {images.map((img, index) => (
          <div key={index} className="portfolio-item glass">
            <img 
              src={`/img/${img}`} 
              alt={`Gallery item ${index + 1}`} 
              loading="lazy" 
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
