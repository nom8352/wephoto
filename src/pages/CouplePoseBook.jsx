import { BarChart3, Camera, Crop, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import NextStep from '../components/NextStep';
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
    mistake: 'Matching every step and staring at the camera the whole time.',
    fix: 'Walk at half pace, keep talking, and let your eyes drift naturally.',
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
    mistake: 'Stopping still for a stiff, posed shoulder bump.',
    fix: 'Keep walking through the bump and capture the reaction on the next step.',
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
    mistake: 'Yanking an arm or wrist to force the turn back.',
    fix: 'Catch the shirt or waist with one gentle pull and photograph the turn back.',
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
    mistake: 'Sitting in a mirror-image row facing the camera.',
    fix: 'Angle your bodies differently and chat across the gap before leaning in.',
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
    mistake: 'Stacking both faces toward the camera in a tight back hug.',
    fix: 'Stand side by side facing the view with one loose arm at the waist.',
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
    mistake: 'Sprinting on uneven ground without checking the path first.',
    fix: 'Use a playful jog on level ground and keep reaching without grabbing.',
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
    mistake: 'Pressing full bodies together and turning both faces to the lens.',
    fix: 'Let only the shoulders touch and glance sideways at each other on three.',
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
    mistake: 'Stopping on the same foot and twisting only through the neck.',
    fix: 'Take two more steps past each other before the shoulders lead the turn back.',
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
    mistake: 'Perching on an unstable ledge with identical leg positions.',
    fix: 'Check the seat is safe, sit at different heights, and angle knees away from each other.',
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
    mistake: 'Holding the cup above chin height with visible branding.',
    fix: 'Keep the cup below the face and swap it playfully as you walk.',
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
    mistake: 'Placing both heads on the same horizontal line.',
    fix: 'Stand half a step apart with open bodies so both profiles stay visible.',
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
    mistake: 'Leading a fast full spin with locked elbows.',
    fix: 'Connect one hand, use a slow half-turn, and keep moving through the laugh.',
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
                {pose.steps.map((step, stepIndex) => (
                  <li key={`${pose.slug}-${stepIndex}`}>{step}</li>
                ))}
              </ol>

              <div className="pose-camera-note">
                <Camera size={17} strokeWidth={2} />
                <p>{pose.camera}</p>
              </div>
              <p className="pose-natural-note">{pose.avoid}</p>
              {(pose.mistake || pose.fix) && (
                <div className="pose-fix">
                  {pose.mistake && (
                    <p className="pose-fix-mistake"><span>Common mistake</span>{pose.mistake}</p>
                  )}
                  {pose.fix && (
                    <p className="pose-fix-solution"><span>Fix</span>{pose.fix}</p>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <NextStep
        heading="You have the pose. Now prepare the post."
        items={[
          {
            to: '/tools/image-size-calculator',
            eyebrow: 'Before you post',
            title: 'Size it for the platform',
            text: 'Resize and crop your shot for Instagram, Pinterest, or LinkedIn without stretching it.',
            icon: Crop,
          },
          {
            to: '/tools/engagement-rate-calculator',
            eyebrow: 'After you post',
            title: 'Check if it worked',
            text: 'Measure engagement by followers or reach, privately in your browser.',
            icon: BarChart3,
          },
        ]}
      />

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
