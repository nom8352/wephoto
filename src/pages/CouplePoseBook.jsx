import { ArrowDown, Camera, CircleAlert, Heart, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './CouplePoseBook.css';

const poses = [
  {
    number: '01',
    slug: 'soft-side-by-side',
    title: 'Soft Side by Side',
    mood: 'The easy opener',
    image: '/pose-assets/couples/01-soft-side-by-side.webp',
    width: 1003,
    height: 1568,
    alt: 'Australian couple standing side by side and holding hands in a portrait studio',
    callouts: ['shoulders gently together', 'keep the joined hands loose'],
    steps: [
      'Turn both bodies about 20 degrees towards the camera.',
      'Bring the inside shoulders close without pressing together.',
      'Hold hands softly and shift weight onto the outside legs.',
    ],
    camera: 'Full length · Eye level · 50 mm',
    avoid: 'Do not pull the joined hands down or lock both knees.',
  },
  {
    number: '02',
    slug: 'forehead-touch',
    title: 'Forehead Touch',
    mood: 'Quiet and connected',
    image: '/pose-assets/couples/02-forehead-touch.webp',
    width: 992,
    height: 1586,
    alt: 'Australian couple touching foreheads in a warm studio portrait',
    callouts: ['touch foreheads, not noses', 'hands land softly'],
    steps: [
      'Face each other in a relaxed three-quarter profile.',
      'Step close enough for the foreheads to meet naturally.',
      'Place hands at the waist and upper arms, then close the eyes.',
    ],
    camera: 'Three-quarter or full length · Side angle',
    avoid: 'Avoid lifting the chin; keep both necks long and relaxed.',
  },
  {
    number: '03',
    slug: 'back-hug',
    title: 'The Back Hug',
    mood: 'Warm, not crowded',
    image: '/pose-assets/couples/03-back-hug.webp',
    width: 992,
    height: 1586,
    alt: 'Australian couple posing with a gentle back hug in a studio',
    callouts: ['offset the faces', 'layer the hands at the waist'],
    steps: [
      'Place one partner half a step behind and slightly to the side.',
      'Wrap the arms around the waist without squeezing the shoulders.',
      'Keep one face to camera while the other partner looks across.',
    ],
    camera: 'Full or three-quarter length · Slightly above waist',
    avoid: 'Do not hide the rear partner completely behind the front shoulder.',
  },
  {
    number: '04',
    slug: 'walk-together',
    title: 'Walk Together',
    mood: 'Movement makes it natural',
    image: '/pose-assets/couples/04-walk-together.webp',
    width: 1122,
    height: 1402,
    alt: 'Australian couple walking hand in hand during a studio portrait session',
    callouts: ['take tiny, slow steps', 'look at each other first'],
    steps: [
      'Start farther back and take three very small steps forward.',
      'Keep joined hands near hip height and let the free arms swing.',
      'Look at each other, then towards the camera on the next pass.',
    ],
    camera: 'Full length · Continuous focus · Fast shutter',
    avoid: 'Large steps look rushed; keep the stride short and easy.',
  },
  {
    number: '05',
    slug: 'seated-shoulder-lean',
    title: 'Seated Shoulder Lean',
    mood: 'Calm and close',
    image: '/pose-assets/couples/05-seated-shoulder-lean.webp',
    width: 1003,
    height: 1568,
    alt: 'Australian couple seated together with a shoulder lean in a studio',
    callouts: ['sit on the front half', 'lean from the shoulder'],
    steps: [
      'Sit close on the front half of the bench with feet grounded.',
      'Angle the knees slightly away to keep the silhouettes clear.',
      'Rest the head lightly on the shoulder and soften every hand.',
    ],
    camera: 'Three-quarter length · Seated eye level · 50 mm',
    avoid: 'Do not collapse through the waist; stay tall before leaning in.',
  },
  {
    number: '06',
    slug: 'look-back',
    title: 'The Look Back',
    mood: 'Playful with shape',
    image: '/pose-assets/couples/06-look-back.webp',
    width: 983,
    height: 1600,
    alt: 'Australian couple holding hands while one partner looks back in a studio pose',
    callouts: ['keep a soft bend in the arm', 'turn from the shoulders'],
    steps: [
      'Place one partner a small step ahead and connect the inside hands.',
      'Keep the joined arms soft instead of pulling them straight.',
      'Turn from the shoulders, then bring the eyes back to your partner.',
    ],
    camera: 'Full length · Eye level · Leave space to move',
    avoid: 'Do not twist only the neck; let the upper body join the turn.',
  },
];

const CouplePoseBook = () => {
  usePageMeta({
    title: 'Couple Pose Book | Easy Studio Poses | WePhoto',
    description:
      'Six easy couple poses with clear positioning, camera tips and visual notes for a relaxed WePhoto studio session.',
    canonicalPath: '/pose-book/couples',
    image: poses[0].image,
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'WePhoto Couple Pose Book',
    url: 'https://wephoto.com.au/pose-book/couples',
    description:
      'A visual guide to six easy couple poses for a relaxed self-portrait studio session.',
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

      <section id="top" className="pose-book-hero site-shell">
        <div className="pose-book-intro card" data-reveal style={{ '--delay': '0.05s' }}>
          <div>
            <span className="eyebrow">WePhoto pose book · Couples</span>
            <h1>Less posing.<br />More connection.</h1>
            <p>
              Six simple starting points for couples who want natural studio portraits without
              wondering what to do with every hand, shoulder, or step.
            </p>
          </div>
          <div className="pose-book-intro-note" aria-hidden="true">
            <span>start here</span>
            <ArrowDown size={34} strokeWidth={1.7} />
          </div>
        </div>

        <nav className="pose-book-index" aria-label="Couple pose index">
          {poses.map((pose) => (
            <a key={pose.slug} href={`#${pose.slug}`}>
              <span>{pose.number}</span>
              {pose.title}
            </a>
          ))}
        </nav>
      </section>

      <div className="pose-book-pages site-shell">
        {poses.map((pose, index) => (
          <article
            id={pose.slug}
            key={pose.slug}
            className="pose-spread card"
            data-reveal
            style={{ '--delay': '0.08s' }}
          >
            <figure className="pose-photo">
              <img
                src={pose.image}
                alt={pose.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                width={pose.width}
                height={pose.height}
              />
              <figcaption>WePhoto Couple Pose {pose.number}</figcaption>
              <span className="photo-callout photo-callout-one">{pose.callouts[0]}</span>
              <span className="photo-callout photo-callout-two">{pose.callouts[1]}</span>
            </figure>

            <div className="pose-notes">
              <header>
                <span className="pose-number">Pose {pose.number}</span>
                <p className="pose-mood">{pose.mood}</p>
                <h2>{pose.title}</h2>
              </header>

              <ol className="pose-steps">
                {pose.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <div className="pose-camera-note">
                <Camera size={18} strokeWidth={2} />
                <div>
                  <span>Camera note</span>
                  <p>{pose.camera}</p>
                </div>
              </div>

              <div className="pose-avoid-note">
                <CircleAlert size={18} strokeWidth={2} />
                <div>
                  <span>Keep it natural</span>
                  <p>{pose.avoid}</p>
                </div>
              </div>

              <a className="next-pose" href={index < poses.length - 1 ? `#${poses[index + 1].slug}` : '#top'}>
                {index < poses.length - 1 ? 'Next pose' : 'Back to the top'}
                <MoveRight size={18} strokeWidth={2.1} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <section className="pose-book-cta site-shell">
        <div className="pose-book-cta-card card">
          <Heart size={28} strokeWidth={1.8} />
          <div>
            <span className="eyebrow">Save your favourites</span>
            <h2>Use these as a starting point, then make each pose feel like you.</h2>
          </div>
          <Link to="/booking" className="button-primary">Plan your session</Link>
        </div>
      </section>
    </div>
  );
};

export default CouplePoseBook;
