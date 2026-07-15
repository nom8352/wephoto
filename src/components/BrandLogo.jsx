import { Link } from 'react-router-dom';
import './BrandLogo.css';

const BrandLogo = ({ className = '' }) => (
  <Link to="/" className={`brand-logo ${className}`.trim()} aria-label="WePhoto home">
    <span className="brand-logo-mark" aria-hidden="true">W.</span>
    <span className="brand-logo-copy">
      <strong>WePhoto</strong>
      <small>Pose & content guides</small>
    </span>
  </Link>
);

export default BrandLogo;
