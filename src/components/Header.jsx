import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Camera } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-wrap">
      <div className="header site-shell card">
        <Link to="/" className="logo" aria-label="WePhoto home">
          <span className="logo-mark">
            <Camera size={18} strokeWidth={2.1} />
          </span>
          <span className="logo-copy">
            <strong>WePhoto</strong>
            <small>Self portrait studio</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Portfolio
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Contact
          </NavLink>
        </nav>

        <Link to="/contact" className="header-cta">
          Book now
          <ArrowUpRight size={16} strokeWidth={2.3} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
