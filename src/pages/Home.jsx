import './Home.css';

const Home = () => {
  return (
    <div className="home fade-in">
      <section className="hero">
        <div className="hero-content">
          <h1>Capturing Your Best Moments in Brisbane & North Lakes</h1>
          <p className="subtitle">Premium photography and graphic design services.</p>
          <button className="cta-button glass">Book a Session</button>
        </div>
      </section>
      
      <section className="studio-info glass">
        <h2>Our Professional Studio</h2>
        <p>Making picture perfect photos, <a href="https://www.lookylooky.com.au/">maternity photography</a> with our professional studio space and camera equipment.</p>
      </section>
      
      <section className="recent-work">
        <h2>Recent Portfolio Highlights</h2>
        <div className="gallery-preview">
          <div className="gallery-item glass">Maternity</div>
          <div className="gallery-item glass">Newborn</div>
          <div className="gallery-item glass">Family</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
