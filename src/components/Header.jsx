import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header-wrap">
      <div className="header site-shell">
        <BrandLogo />

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <NavLink to="/pose-book" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Pose Library
          </NavLink>
          <NavLink to="/guides" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Creator Guides
          </NavLink>
          <NavLink to="/blog" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Photo Articles
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : undefined)}>
            About
          </NavLink>
        </nav>

        <Link to="/pose-book" className="header-cta" onClick={closeMenu}>
          Browse library
          <ArrowRight size={16} strokeWidth={2.3} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
