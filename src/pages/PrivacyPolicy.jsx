import { usePageMeta } from '../hooks/usePageMeta';
import './LegacyPages.css';

const PrivacyPolicy = () => {
  usePageMeta({
    title: 'Privacy Policy | WePhoto',
    description: 'Privacy policy and studio contact information for WePhoto.',
    canonicalPath: '/privacy-policy',
  });

  return (
    <div className="legacy-page">
      <div className="legacy-page-shell">
        <section className="legacy-panel card">
          <span className="eyebrow">Privacy policy</span>
          <h2>How WePhoto handles basic visitor and enquiry information.</h2>
          <p>
            When you contact WePhoto, any details you submit such as your name, email address,
            booking preferences, and message content may be used to respond to your enquiry and
            organise your session.
          </p>
          <p>
            Standard website analytics, server logs, and spam protection tools may collect limited
            technical information such as browser type, device details, IP address, and referring
            pages in order to keep the website secure and understand how people use it.
          </p>
          <p>
            If you would like to update or remove contact information you have shared through an
            enquiry, use the studio contact details on the contact page and request assistance
            directly.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
