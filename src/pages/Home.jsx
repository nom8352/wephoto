import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Clock3, Images, Sparkles } from 'lucide-react';
import './Home.css';

const highlights = [
  {
    title: 'Private self-portrait room',
    text: 'Take your time, test your angles, and shoot at your own pace with a remote in hand.',
    icon: Camera,
  },
  {
    title: 'Studio quality without the pressure',
    text: 'Professional camera, lighting, monitor preview, and a calm setup that feels easy to use.',
    icon: Sparkles,
  },
  {
    title: 'Built for real moments',
    text: 'Perfect for maternity, couples, families, pets, personal branding, and quiet celebrations.',
    icon: Images,
  },
];

const steps = [
  {
    number: '01',
    title: 'Arrive and settle in',
    text: 'Walk into a styled studio space with the lighting, camera, and monitor already prepared.',
  },
  {
    number: '02',
    title: 'Shoot with confidence',
    text: 'Use the remote to capture as many natural moments as you want without anyone rushing you.',
  },
  {
    number: '03',
    title: 'Leave with favourites',
    text: 'Review your images, choose the standouts, and turn a simple session into keepsakes worth framing.',
  },
];

const sessionTypes = [
  'Maternity portraits with room to move and breathe',
  'Couples sessions that feel natural, not overly directed',
  'Family photos with enough flexibility for kids and pets',
  'Personal branding portraits with polished studio light',
];

const Home = () => {
  return (
    <div className="home">
      <section className="home-hero site-shell">
        <div className="hero-panel card" data-reveal style={{ '--delay': '0.05s' }}>
          <div className="hero-copy">
            <span className="eyebrow">Gladesville self-portrait studio</span>
            <h1>Portraits that feel editorial, personal, and completely your own.</h1>
            <p className="lead">
              WePhoto gives you a beautifully lit studio, a remote-controlled camera, and enough
              privacy to create photos that look refined without feeling staged.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="button-primary">
                Book a session
                <ArrowRight size={18} strokeWidth={2.2} />
              </Link>
              <Link to="/portfolio" className="button-secondary">
                View portfolio
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <strong>Self-guided</strong>
                <span>Remote-controlled shooting with full privacy</span>
              </div>
              <div>
                <strong>Studio-ready</strong>
                <span>Professional lights, monitor preview, and curated props</span>
              </div>
              <div>
                <strong>Made for keeps</strong>
                <span>From polished profile photos to milestone portraits</span>
              </div>
            </div>
          </div>

          <div className="hero-media" data-reveal style={{ '--delay': '0.16s' }}>
            <div className="media-stack media-stack-main">
              <img src="/img/WephotoMain.jpg" alt="WePhoto studio hero view" />
            </div>
            <div className="media-stack media-stack-top">
              <img src="/img/IMG_1648.jpg" alt="Portrait detail captured inside the studio" />
            </div>
            <div className="media-stack media-stack-bottom">
              <img src="/img/IMG_3018.jpg" alt="Styled portrait session at WePhoto" />
            </div>
            <div className="hero-note card">
              <Clock3 size={18} strokeWidth={2.1} />
              <div>
                <strong>Move at your own pace</strong>
                <span>No photographer in the room. Just your timing, your expressions, your shot.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience site-shell">
        <div className="section-heading" data-reveal style={{ '--delay': '0.08s' }}>
          <span className="eyebrow">Why people choose WePhoto</span>
          <h2>A studio experience that feels calm, flattering, and easy to return to.</h2>
          <p>
            The old text-heavy homepage buried the best part of the service. This version brings
            the experience forward so visitors immediately understand what makes the session feel
            special.
          </p>
        </div>

        <div className="experience-grid">
          <article className="experience-feature card" data-reveal style={{ '--delay': '0.12s' }}>
            <p className="feature-kicker">Designed for comfort</p>
            <h3>No awkward posing under pressure.</h3>
            <p>
              Check your framing on the monitor, try different expressions, and capture the exact
              moment that feels most like you.
            </p>
          </article>

          <div className="experience-list">
            {highlights.map(({ title, text, icon: Icon }, index) => (
              <article
                key={title}
                className="experience-card card"
                data-reveal
                style={{ '--delay': `${0.16 + index * 0.06}s` }}
              >
                <span className="experience-icon">
                  <Icon size={20} strokeWidth={2.1} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process site-shell">
        <div className="section-heading" data-reveal style={{ '--delay': '0.08s' }}>
          <span className="eyebrow">How it works</span>
          <h2>Simple enough to enjoy. Refined enough to look like a magazine spread.</h2>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="process-card card"
              data-reveal
              style={{ '--delay': `${0.12 + index * 0.06}s` }}
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sessions site-shell">
        <div className="sessions-layout card" data-reveal style={{ '--delay': '0.08s' }}>
          <div className="sessions-copy">
            <span className="eyebrow">Best-fit sessions</span>
            <h2>Built for the kinds of photos people actually want to keep.</h2>
            <p>
              Whether you want a polished maternity session or an easy family portrait without the
              chaos of a traditional shoot, the studio is set up to make that possible.
            </p>

            <ul className="session-list">
              {sessionTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <Link to="/services" className="button-secondary">
              Explore services
            </Link>
          </div>

          <div className="sessions-gallery">
            <img src="/img/IMG_3217.jpg" alt="Couple portrait at WePhoto studio" />
            <img src="/img/IMG_2991.jpg" alt="Warmly lit portrait session detail" />
            <img src="/img/IMG_3070.jpg" alt="Family or branding portrait inside the studio" />
          </div>
        </div>
      </section>

      <section className="cta-strip site-shell" data-reveal style={{ '--delay': '0.08s' }}>
        <div className="cta-strip-card card">
          <div>
            <span className="eyebrow">Ready when you are</span>
            <h2>Book the studio and make the camera work for your pace, not against it.</h2>
          </div>
          <Link to="/contact" className="button-primary">
            Start your booking
            <ArrowRight size={18} strokeWidth={2.2} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
