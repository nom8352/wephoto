import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="footer site-shell">
        <div className="footer-brand">
          <BrandLogo />
          <p>Pose books and practical creator guides for better photos, Reels, and everyday social content.</p>
        </div>

        <div className="footer-links">
          <div>
            <span>Explore</span>
            <Link to="/pose-book">All pose books</Link>
            <Link to="/pose-book/social-media">Social media poses</Link>
            <Link to="/pose-book/couples">Couple poses</Link>
          </div>
          <div>
            <span>Create</span>
            <Link to="/tools">Creator tools</Link>
            <Link to="/guides#photo-tips">Photo tips</Link>
            <Link to="/guides#reels">Reels & video</Link>
          </div>
          <div>
            <span>WePhoto</span>
            <Link to="/about">About</Link>
            <Link to="/blog">Photo articles</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div>
            <span>More</span>
            <Link to="/tools/engagement-rate-calculator">Engagement calculator</Link>
            <Link to="/tools/image-size-calculator">Image size calculator</Link>
            <Link to="/privacy-policy">Privacy</Link>
          </div>
        </div>

        <div className="footer-meta">
          <p>&copy; {new Date().getFullYear()} WePhoto. Visual guides for better social content.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
