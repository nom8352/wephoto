import { Camera, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './CouplePoseBook.css';

const contactSheet = {
  image: '/pose-assets/couples/12-outdoor-couple-poses.webp',
  width: 887,
  height: 1774,
  alt: 'Twelve outdoor couple poses photographed with an Australian couple on a Sydney coastal walk',
};

const poses = [
  {
    number: '01',
    slug: 'walk-and-talk',
    title: 'Walk & Talk',
    mood: 'Start with movement',
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
    steps: [
      'Let one partner move two easy steps ahead on a safe, level path.',
      'Turn the upper body back while the other person follows behind.',
      'Reach without grabbing and keep going through the laugh.',
    ],
    camera: 'Full length · Continuous AF · 1/800 sec or faster',
    avoid: 'Keep it to a playful jog and check the path before shooting.',
  },
  {
    number: '07',
    slug: 'back-to-back',
    title: 'Back to Back',
    mood: 'Pause, then glance',
    steps: [
      'Stand back to back with only the shoulders making light contact.',
      'Shift weight onto different legs to keep the outlines uneven.',
      'On three, glance sideways at each other without turning the feet.',
    ],
    camera: 'Three-quarter length · 50 mm · Eye level',
    avoid: 'Do not press together or force both faces towards the camera.',
  },
  {
    number: '08',
    slug: 'pass-and-look-back',
    title: 'Pass & Look Back',
    mood: 'Cross paths naturally',
    steps: [
      'Start on opposite sides and walk past each other slowly.',
      'Take two more steps before both partners turn back.',
      'Let the shoulders lead the turn and keep the arms loose.',
    ],
    camera: 'Full length · 35-50 mm · 1/500 sec or faster',
    avoid: 'Do not stop on the same foot or twist only through the neck.',
  },
  {
    number: '09',
    slug: 'sandstone-sit',
    title: 'Sandstone Sit',
    mood: 'Change the levels',
    steps: [
      'Choose a broad, safe ledge and sit at slightly different heights.',
      'Keep feet grounded and angle the knees away from each other.',
      'Talk across the space instead of looking straight at the lens.',
    ],
    camera: 'Seated eye level · 50 mm · Keep the landscape visible',
    avoid: 'Check the ledge first and stay well away from exposed edges.',
  },
  {
    number: '10',
    slug: 'coffee-stroll',
    title: 'Coffee Stroll',
    mood: 'Give the hands a job',
    steps: [
      'Carry one unbranded takeaway cup and begin a slow walk.',
      'Pass the cup between you or take turns pretending to steal it.',
      'Keep talking while the photographer follows from the front.',
    ],
    camera: 'Three-quarter length · 50 mm · Continuous focus',
    avoid: 'Keep the cup below the face and remove visible branding.',
  },
  {
    number: '11',
    slug: 'view-and-turn',
    title: 'View & Turn',
    mood: 'Let the landscape lead',
    steps: [
      'Face the view with one partner standing half a step behind.',
      'Keep the bodies slightly open so both outlines stay visible.',
      'Ask one person to look back while the other stays with the view.',
    ],
    camera: 'Environmental portrait · 35 mm · Expose for backlight',
    avoid: 'Do not place both heads on the same line or hide either profile.',
  },
  {
    number: '12',
    slug: 'easy-spin',
    title: 'Easy Spin',
    mood: 'End on a high note',
    steps: [
      'Connect one hand and leave enough room for a comfortable turn.',
      'Lead a slow half-spin while the other partner stays grounded.',
      'Keep moving through the laugh after the turn is finished.',
    ],
    camera: 'Full length · Continuous AF · 1/800 sec or faster',
    avoid: 'Keep elbows soft and use a half-turn rather than a fast full spin.',
  },
];

const CouplePoseBook = () => {
  usePageMeta({
    title: '12 Outdoor Couple Poses | Pose Book | WePhoto',
    description:
      'Twelve natural outdoor couple poses in one visual guide, with simple prompts and camera tips for a relaxed Australian photo session.',
    canonicalPath: '/pose-book/couples',
    image: contactSheet.image,
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'WePhoto Couple Pose Book',
    url: 'https://wephoto.com.au/pose-book/couples',
    description:
      'A visual guide to twelve natural outdoor couple poses for a relaxed Australian photo session.',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `https://wephoto.com.au${contactSheet.image}`,
      width: contactSheet.width,
      height: contactSheet.height,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: poses.length,
      itemListElement: poses.map((pose, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: pose.title,
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
              <span aria-hidden="true">12</span>
              <h1>Outdoor<br />Couple Poses</h1>
            </div>
            <p>Simple <i /> Natural <i /> Playful</p>
          </header>

          <figure className="pose-contact-sheet">
            <img
              src={contactSheet.image}
              alt={contactSheet.alt}
              loading="eager"
              width={contactSheet.width}
              height={contactSheet.height}
            />
          </figure>

          <nav className="pose-sheet-legend" aria-label="Outdoor couple pose index">
            {poses.map((pose) => (
              <a key={pose.slug} href={`#${pose.slug}`}>
                  <span>{pose.number}</span>
                  <div>
                    <strong>{pose.title}</strong>
                    <small>{pose.mood}</small>
                  </div>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="pose-guide site-shell">
        <header className="pose-guide-heading">
          <span className="eyebrow">Keep it natural</span>
          <h2>Twelve prompts to use on location.</h2>
          <p>Give the action first, then photograph the reaction that follows.</p>
        </header>

        <div className="pose-guide-grid">
          {poses.map((pose) => (
            <article id={pose.slug} key={pose.slug} className="pose-guide-card card" data-reveal>
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
          <Link to="/pose-book" className="button-primary">Explore more pose books</Link>
        </div>
      </section>
    </div>
  );
};

export default CouplePoseBook;
