import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './NextStep.css';

// items: [{ to, eyebrow, title, text, icon: LucideIcon }]
const NextStep = ({ heading, items = [] }) => {
  return (
    <section className="next-step site-shell" aria-label="Next steps">
      {heading && (
        <header className="next-step-heading" data-reveal>
          <span className="eyebrow">Keep going</span>
          <h2>{heading}</h2>
        </header>
      )}
      <div className="next-step-grid">
        {items.map(({ to, eyebrow, title, text, icon: Icon }, index) => (
          <Link
            key={to}
            to={to}
            className="next-step-card card"
            aria-label={`${title}. ${text}`}
            data-reveal
            style={{ '--delay': `${0.06 + index * 0.06}s` }}
          >
            {Icon && <Icon size={22} strokeWidth={1.8} aria-hidden="true" />}
            <span className="eyebrow">{eyebrow}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <strong>Open <ArrowRight size={16} aria-hidden="true" /></strong>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NextStep;
