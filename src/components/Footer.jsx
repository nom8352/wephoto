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
          </div>
          <div>
            <span>Visit</span>
            <p>Gladesville NSW 2111</p>
            <p>Flexible self-portrait bookings</p>
            <Link to="/contact">Book your session</Link>
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
