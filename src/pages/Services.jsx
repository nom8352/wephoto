import './Services.css';

const Services = () => {
  return (
    <div className="services fade-in">
      <h1 className="page-title">Our Photography & Design Services</h1>
      <p className="page-subtitle">Tailored sessions for every milestone in Brisbane & North Lakes.</p>
      
      <div className="service-list">
        <div className="service-card glass">
          <h2>Newborn Photography</h2>
          <p>
            We provide a calm, safe environment that will work best for your shot of <a href="https://sweetlifephotography.com.au/">newborn photographer brisbane</a>. Let us capture those precious early days.
          </p>
        </div>
        
        <div className="service-card glass">
          <h2>Maternity Photography</h2>
          <p>Celebrate your journey with elegant, timeless maternity portraits in our professional studio or on location.</p>
        </div>

        <div className="service-card glass">
          <h2>Family Sessions</h2>
          <p>Fun, relaxed family photo sessions that capture your unique dynamic against beautiful Brisbane backdrops.</p>
        </div>

        <div className="service-card glass">
          <h2>Graphic Design</h2>
          <p>Professional branding, album design, and touch-ups to ensure your visual identity is cohesive and stunning.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
