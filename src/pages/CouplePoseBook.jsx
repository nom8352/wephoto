import { Camera, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './CouplePoseBook.css';

const poses = [
  {
    number: '01',
    slug: 'walk-and-talk',
    title: 'Walk & Talk',
    mood: 'Start with movement',
    image: '/pose-assets/couples/01-walk-and-talk.webp',
    width: 1122,
    height: 1402,
    alt: 'Australian couple walking and talking on a coastal path at golden hour',
    steps: [
      'Begin a few metres back and walk at half your usual pace.',
      'Keep one hand in a pocket and let the other arms move naturally.',
      'Tell each other a story instead of watching the camera.',
    ],
    camera: 'Full length · 35-50 mm · 1/500 sec or faster',
    avoid: 'Do not match every step or force eye contact for the whole walk.',
  },
  {
    number: '02',
    slug: 'shoulder-bump',
    title: 'Shoulder Bump',
    mood: 'A little chaos helps',
    image: '/pose-assets/couples/02-shoulder-bump.webp',
    width: 1003,
    height: 1568,
    alt: 'Australian couple laughing during a playful shoulder bump outdoors',
    steps: [
      'Walk close enough for your shoulders to almost meet.',
      'Give one gentle bump, then let the other person react.',
      'Keep moving for two more steps while the laughter settles.',
    ],
    camera: 'Full length · Continuous AF · Short burst',
    avoid: 'Keep the bump light; the reaction should be bigger than the contact.',
  },
  {
    number: '03',
    slug: 'pull-me-in',
    title: 'Pull Me In',
    mood: 'Play with the distance',
    image: '/pose-assets/couples/03-pull-me-in.webp',
    width: 1002,
    height: 1569,
    alt: 'Australian couple playing on a sandstone coastal trail with one partner pulling the other closer',
    steps: [
      'Place one partner half a step ahead and turn them slightly away.',
      'Catch the loose shirt or place a gentle hand at the waist.',
      'Pull once, softly, and photograph the turn back rather than the finish.',
    ],
    camera: 'Three-quarter or full length · 50 mm · Back-button focus',
    avoid: 'Never tug an arm or wrist; keep the movement low and comfortable.',
  },
  {
    number: '04',
    slug: 'picnic-pause',
    title: 'Picnic Pause',
    mood: 'Relax into the frame',
    image: '/pose-assets/couples/04-picnic-pause.webp',
    width: 1122,
    height: 1402,
    alt: 'Australian couple sitting casually on a picnic rug beneath eucalyptus trees',
    steps: [
      'Sit at different angles instead of facing the camera in a row.',
      'Raise one knee each and use the outside hands for support.',
      'Chat across the gap, then let the shoulders meet for one frame.',
    ],
    camera: 'Seated eye level · 35-50 mm · Keep the setting visible',
    avoid: 'Do not mirror the same leg position or sit perfectly upright.',
  },
  {
    number: '05',
    slug: 'side-wrap',
    title: 'Side Wrap',
    mood: 'Close without posing',
    image: '/pose-assets/couples/05-side-wrap.webp',
    width: 1003,
    height: 1568,
    alt: 'Australian couple standing in a loose side embrace at a Sydney foreshore lookout',
    steps: [
      'Stand facing the same direction with one person slightly behind.',
      'Wrap one arm loosely at the waist and leave the other hands casual.',
      'Look towards the view and react to something outside the frame.',
    ],
    camera: 'Full length · 50-85 mm · Expose for backlit skin',
    avoid: 'Do not stack both faces or turn this into a tight back hug.',
  },
  {
    number: '06',
    slug: 'run-back-to-me',
    title: 'Run Back to Me',
    mood: 'Finish with energy',
    image: '/pose-assets/couples/06-run-back-to-me.webp',
    width: 1003,
    height: 1568,
    alt: 'Australian couple laughing and jogging along a coastal track at sunset',
    steps: [
      'Let one partner move two easy steps ahead on a safe, level path.',
      'Turn the upper body back while the other person follows behind.',
      'Reach without grabbing and keep going through the laugh.',
    ],
    camera: 'Full length · Continuous AF · 1/800 sec or faster',
    avoid: 'Keep it to a playful jog and check the path before shooting.',
  },
];

const CouplePoseBook = () => {
  usePageMeta({
    title: 'Outdoor Couple Pose Book | Natural Poses | WePhoto',
    description:
      'Six natural outdoor couple poses with simple prompts, camera tips and visual notes for a relaxed Australian photo session.',
    canonicalPath: '/pose-book/couples',
    image: poses[0].image,
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'WePhoto Couple Pose Book',
    url: 'https://wephoto.com.au/pose-book/couples',
    description:
      'A visual guide to six natural outdoor couple poses for a relaxed Australian photo session.',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: poses.length,
      itemListElement: poses.map((pose, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: pose.title,
        image: `https://wephoto.com.au${pose.image}`,
      })),
    },
  };

  return (
    <div className="pose-book">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="pose-book-hero site-shell">
        <div className="pose-board card" data-reveal style={{ '--delay': '0.05s' }}>
          <header className="pose-board-header">
            <span className="eyebrow">WePhoto pose book · Australian outdoors</span>
            <div className="pose-board-title">
              <span aria-hidden="true">06</span>
              <h1>Outdoor<br />Couple Poses</h1>
            </div>
            <p>Simple <i /> Natural <i /> Playful</p>
          </header>

          <div className="pose-collage">
            {poses.map((pose, index) => (
              <figure id={pose.slug} key={pose.slug} className="pose-tile">
                <div className="pose-tile-media">
                  <img
                    src={pose.image}
                    alt={pose.alt}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    width={pose.width}
                    height={pose.height}
                  />
                </div>
                <figcaption>
                  <span>{pose.number}</span>
                  <div>
                    <strong>{pose.title}</strong>
                    <small>{pose.mood}</small>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pose-guide site-shell">
        <header className="pose-guide-heading">
          <span className="eyebrow">Keep it natural</span>
          <h2>Six prompts to use on location.</h2>
          <p>Give the action first, then photograph the reaction that follows.</p>
        </header>

        <div className="pose-guide-grid">
          {poses.map((pose) => (
            <article key={pose.slug} className="pose-guide-card card" data-reveal>
              <header>
                <span>{pose.number}</span>
                <div>
                  <h3>{pose.title}</h3>
                  <p>{pose.mood}</p>
                </div>
              </header>

              <ol>
                {pose.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <div className="pose-camera-note">
                <Camera size={17} strokeWidth={2} />
                <p>{pose.camera}</p>
              </div>
              <p className="pose-natural-note">{pose.avoid}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pose-book-cta site-shell">
        <div className="pose-book-cta-card card">
          <Heart size={28} strokeWidth={1.8} />
          <div>
            <span className="eyebrow">Save your favourites</span>
            <h2>Use these as a starting point, then make each pose feel like you.</h2>
          </div>
          <Link to="/booking" className="button-primary">Plan your outdoor session</Link>
        </div>
      </section>
    </div>
  );
};

export default CouplePoseBook;
