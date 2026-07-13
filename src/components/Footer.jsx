import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="footer site-shell card">
        <div className="footer-brand">
          <p className="footer-kicker">WePhoto Studio</p>
          <h2>Private, polished, and easy to book.</h2>
          <p>
            Self-portrait sessions designed for couples, families, maternity, personal branding,
            and anyone who wants studio-quality photos without the pressure of a photographer in
            the room.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span>Navigate</span>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/gallery">Original gallery</Link>
          </div>
          <div>
            <span>Plan</span>
            <Link to="/guide">Studio guide</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog">Photography guides</Link>
            <Link to="/shop">Session options</Link>
            <Link to="/privacy-policy">Privacy</Link>
          </div>
          <div>
            <span>Photography</span>
            <Link to="/photo-studio-sydney">Sydney studio</Link>
            <Link to="/headshot-photography-sydney">Headshots</Link>
            <Link to="/maternity-photography-sydney">Maternity</Link>
            <Link to="/self-portrait-photography-sydney">Self portraits</Link>
            <Link to="/pet-photography-sydney">Pet portraits</Link>
          </div>
          <div>
            <span>Visit</span>
            <p>Unit 22, 33-37 College Street</p>
            <p>Gladesville NSW 2111, Australia</p>
            <p>Flexible self-portrait bookings</p>
            <Link to="/booking">Book your session</Link>
          </div>
        </div>

        <div className="footer-meta">
          <p>&copy; {new Date().getFullYear()} WePhoto. Quiet luxury for modern portraits.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
