import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="footer site-shell card">
        <div className="footer-brand">
          <p className="footer-kicker">WePhoto</p>
          <h2>Look better. Post better.</h2>
          <p>
            Saveable pose books and practical photo, video, editing, and social media guides for
            more confident content.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span>Explore</span>
            <Link to="/">Home</Link>
            <Link to="/pose-book">All pose books</Link>
            <Link to="/pose-book/social-media">Social media poses</Link>
            <Link to="/pose-book/couples">Couple poses</Link>
          </div>
          <div>
            <span>Create</span>
            <Link to="/guides#photo-tips">Photo tips</Link>
            <Link to="/guides#reels">Reels & video</Link>
            <Link to="/guides#editing">Editing</Link>
            <Link to="/guides#social-growth">Social growth</Link>
          </div>
          <div>
            <span>Learn</span>
            <Link to="/blog">Photography guides</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/about">About WePhoto</Link>
            <Link to="/privacy-policy">Privacy</Link>
          </div>
          <div>
            <span>More pose books</span>
            <Link to="/pose-book/professional">Professional</Link>
            <Link to="/pose-book/selfie-mirror">Selfie & mirror</Link>
            <Link to="/pose-book/family">Family</Link>
            <Link to="/pose-book/sitting-cafe">Sitting & cafe</Link>
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
