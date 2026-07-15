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
            <small>Pose & content guides</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Home
          </NavLink>
          <NavLink to="/pose-book" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Pose Books
          </NavLink>
          <NavLink to="/guides" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Create Better
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Photo Guides
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            About
          </NavLink>
        </nav>

        <Link to="/pose-book/social-media" className="header-cta">
          Start with 12 poses
          <ArrowUpRight size={16} strokeWidth={2.3} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
