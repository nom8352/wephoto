import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header glass">
      <div className="header-container">
        <Link to="/" className="logo">
          <Camera size={28} color="var(--accent)" />
          <span>WePhoto</span>
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
