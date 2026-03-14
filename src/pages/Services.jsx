import './Services.css';

const Services = () => {
  return (
    <div className="services fade-in">
      <header className="services-header">
        <h1 className="page-title">Sydney Self-Photography & Portrait Services</h1>
        <p className="page-subtitle">Premium quality, authentic moments, and a designer's touch. Discover the ultimate Sydney Portrait Studio experience.</p>
      </header>

      <section className="service-categories">
        <div className="service-grid">
          <div className="service-card glass">
            <h3>Self-Portrait Session</h3>
            <p className="duration">20-30 Minutes | Private</p>
            <p>Experience the freedom of a private session equipped with professional studio lighting and a wireless remote trigger. Perfect for high-quality social profiles, intimate couple shots, and fun memories with friends.</p>
          </div>

          <div className="service-card glass">
            <h3>Professional Portrait</h3>
            <p className="duration">Photographer-led | Directed</p>
            <p>Elevate your image with a high-end editorial or business headshot session. Let a professional photographer guide your poses and lighting to capture your absolute best self.</p>
          </div>

          <div className="service-card glass">
            <h3>Maternity & Newborn specials</h3>
            <p className="duration">Dedicated Time | Premium Care</p>
            <p>Capture life’s most precious beginnings in a calm, professional environment. We specialize in creating timeless family legacies through artistic maternity and newborn photography.</p>
          </div>
        </div>
      </section>

      <section className="value-proposition glass">
        <h2>Why Choose Our Sydney Studio?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h4>High-End Setup</h4>
            <p>We use professional full-frame cameras and studio-grade lighting systems to ensure every pixel is perfect.</p>
          </div>
          <div className="feature-item">
            <h4>Designer’s Touch</h4>
            <p>Led by a professional graphic designer, every session benefits from premium retouching and creative color grading for a truly editorial finish.</p>
          </div>
          <div className="feature-item">
            <h4>Instant Results</h4>
            <p>Our large in-studio monitors provide real-time previews, allowing for instant photo selection and immediate adjustments.</p>
          </div>
        </div>
      </section>

      <section className="mandatory-seo-section">
        <div className="seo-block highlight glass">
          <p>Making picture perfect photos, <a href="https://www.lookylooky.com.au/">maternity photography</a> with our professional studio space and camera equipment.</p>
        </div>
        
        <div className="seo-block glass">
          <p>
            Our professional studio space and camera equipment will make sure that every photo is taken with precision and clarity. 
            We provide a calm, safe environment that will work best for your shot of <a href="https://sweetlifephotography.com.au/">newborn photographer brisbane</a>.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <h3>Ready to Capture Your Best Self?</h3>
        <p>Book your session at our Sydney Self-Photography Studio today.</p>
        <button className="cta-button glass">View Booking Availability</button>
      </section>
    </div>
  );
};

export default Services;
