import { ShieldCheck } from 'lucide-react';
import './PrivacyBadge.css';

const PrivacyBadge = ({ text = 'Private. No signup. Runs in your browser.' }) => (
  <p className="privacy-badge">
    <ShieldCheck size={16} strokeWidth={2} aria-hidden="true" />
    <span>{text}</span>
  </p>
);

export default PrivacyBadge;
