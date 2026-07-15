import { usePageMeta } from '../hooks/usePageMeta';
import './LegacyPages.css';

const PrivacyPolicy = () => {
  usePageMeta({
    title: 'Privacy Policy | WePhoto',
    description: 'Privacy information for visitors using WePhoto pose books and content guides.',
    canonicalPath: '/privacy-policy',
  });

  return (
    <div className="legacy-page">
      <div className="legacy-page-shell">
        <section className="legacy-panel card">
          <span className="eyebrow">Privacy policy</span>
          <h1>How WePhoto handles basic website information.</h1>
          <p>WePhoto provides public pose books and educational content. The website does not currently accept studio bookings, payments, or customer photo uploads.</p>
          <p>Standard analytics, server logs, security, and spam-protection tools may collect limited technical information such as browser type, device details, IP address, referring page, and pages viewed. This information helps keep the website secure and understand which guides are useful.</p>
          <p>Some pages may link to external websites. Those services have their own privacy practices, and WePhoto is not responsible for how third-party sites collect or use information.</p>
          <p>If interactive features, newsletters, or downloadable products are introduced later, this policy will be updated before collecting the additional information required for those services.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
