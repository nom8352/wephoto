import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about fade-in">
      <header className="about-header">
        <h1 className="page-title">The Art & Story of WePhoto</h1>
        <p className="page-subtitle">Where professional photography meets high-end graphic design. Over 15 years of capturing life’s most authentic moments.</p>
      </header>

      <section className="about-section brand-story glass">
        <div className="section-content">
          <h2>Our Philosophy</h2>
          <p>
            The name <strong>WePhoto</strong> represents a simple yet powerful philosophy: Capturing <em>'Your'</em> moment with <em>'Our'</em> professional touch. 
            We believe that every photograph should be as unique as the person in front of the lens. By blending technical mastery with artistic vision, 
            we create a space where your story can be told with clarity and emotion.
          </p>
          <p>
            Our unique advantage lies in the fusion of disciplines. As a studio where award-winning photography meets sophisticated graphic design, 
            we don't just take pictures—we craft visual legacies. Every frame is composed with the final masterpiece in mind.
          </p>
        </div>
      </section>

      <section className="about-section artist-background">
        <div className="artist-grid">
          <div className="artist-card glass">
            <h3>The Photographer</h3>
            <p>
              With over a decade and a half behind the lens, I have mastered the delicate balance of lighting, composition, and timing. 
              My expertise lies in capturing natural, unforced emotions, especially during life’s most significant transitions. 
              From the glow of maternity to the tender first days of a newborn, and the confidence of a professional portrait, I bring a seasoned eye to every session.
            </p>
          </div>
          <div className="artist-card glass">
            <h3>The Designer</h3>
            <p>
              A photograph is only the beginning. As a professional graphic designer, I treat every image as a piece of art. 
              Meticulous color grading, expert retouching, and a keen eye for detail ensure that the final result is polished, timeless, and editorial. 
              This "designer’s eye" is what sets WePhoto apart, ensuring your photos don't just look good— 그들은 빛납니다.
            </p>
          </div>
        </div>
        <div className="location-info glass">
          <p><strong>Locations:</strong> Proudly based in North Lakes, Brisbane, and also serving the Sydney area with our innovative creative self-studio concept.</p>
        </div>
      </section>

      <section className="why-choose-us glass">
        <h2>Why Choose WePhoto?</h2>
        <div className="usp-grid">
          <div className="usp-item">
            <h4>Quality over Quantity</h4>
            <p>We focus on high-end production rather than mass-produced shots. Every client receives our full creative focus and dedication.</p>
          </div>
          <div className="usp-item">
            <h4>Professional Equipment</h4>
            <p>Our sessions are powered by state-of-the-art full-frame cameras and studio-grade lighting gear in a meticulously designed space.</p>
          </div>
          <div className="usp-item">
            <h4>Personalized Approach</h4>
            <p>No two sessions are the same. We tailor our lighting, direction, and post-processing to align with your unique style and needs.</p>
          </div>
        </div>
      </section>

      <section className="mandatory-seo-section about-seo">
        <div className="seo-block highlight glass">
          <p>We take pride in making picture perfect photos, <a href="https://www.lookylooky.com.au/">maternity photography</a> with our professional studio space and camera equipment.</p>
        </div>
        
        <div className="seo-block glass">
          <p>
            Whether you are looking for a timeless legacy or a modern professional edge, 
            our expertise will work best for your shot of <a href="https://sweetlifephotography.com.au/">newborn photographer brisbane</a>.
          </p>
        </div>
      </section>

      <section className="cta-section about-cta">
        <h3>Let’s create something beautiful together.</h3>
        <p>Your journey deserves to be captured with the care and expertise it deserves.</p>
        <div className="cta-links">
          <Link to="/portfolio" className="cta-button glass">Explore Portfolio</Link>
          <Link to="/contact" className="cta-button glass primary">Book Your Session</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
