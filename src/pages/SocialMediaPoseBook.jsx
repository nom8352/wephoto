import { BarChart3, Crop, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import NextStep from '../components/NextStep';
import { usePageMeta } from '../hooks/usePageMeta';
import './CouplePoseBook.css';

const contactSheet = {
  image: '/pose-assets/social/12-social-media-poses.webp',
  width: 887,
  height: 1774,
  alt: 'Twelve natural social media poses demonstrated by an adult Australian woman in a bright Sydney studio',
};

const poses = [
  {
    number: '01',
    slug: 'natural-smile',
    title: 'Natural Smile',
    mood: 'Relax the shoulders',
    cues: ['Shift your weight onto one hip and place one hand in a pocket.', 'Breathe out before smiling so the expression stays soft.'],
    note: 'Keep the free arm slightly away from the body.',
    mistake: 'Forcing a wide smile the moment the shutter clicks.',
    fix: 'Breathe out once, then let the smile arrive in the next frame.',
  },
  {
    number: '02',
    slug: 'hair-tuck',
    title: 'Hair Tuck',
    mood: 'Create a candid moment',
    cues: ['Look down as you tuck a small section behind one ear.', 'Let the other hand hang naturally instead of posing both arms.'],
    note: 'Touch the hair lightly and keep the fingers relaxed.',
    mistake: 'Staring at the camera while both hands fumble in the hair.',
    fix: 'Look down first and keep only one hand lightly touching a single section.',
  },
  {
    number: '03',
    slug: 'look-to-light',
    title: 'Look to Light',
    mood: 'Use a clean profile',
    cues: ['Turn the body about 30 degrees towards the window.', 'Keep the chin level and let the eyes follow the light.'],
    note: 'Leave a little space between the arms and waist.',
    mistake: 'Squaring both shoulders straight toward the camera.',
    fix: 'Turn about 30 degrees toward the light and keep the chin level.',
  },
  {
    number: '04',
    slug: 'one-arm-up',
    title: 'One Arm Up',
    mood: 'Build an easy curve',
    cues: ['Lift one arm loosely above the head without locking the elbow.', 'Shift the hips in the opposite direction for an asymmetric line.'],
    note: 'Keep the shoulder down even while the arm is raised.',
    mistake: 'Locking the raised elbow and hiking the shoulder to the ear.',
    fix: 'Bend the elbow softly and keep the shoulder dropped away from the neck.',
  },
  {
    number: '05',
    slug: 'hand-on-hip',
    title: 'Hand on Hip',
    mood: 'Confident, not rigid',
    cues: ['Rest the fingertips at the hip instead of pressing the whole hand.', 'Angle the opposite shoulder slightly towards the camera.'],
    note: 'Soften the wrist and avoid pushing the elbow straight out.',
    mistake: 'Pressing the whole palm flat against the hip.',
    fix: 'Rest the fingertips lightly and turn the opposite shoulder toward the lens.',
  },
  {
    number: '06',
    slug: 'crossed-arm-laugh',
    title: 'Crossed-Arm Laugh',
    mood: 'Give a strong pose movement',
    cues: ['Cross the arms loosely with both hands still visible.', 'Look away from the lens and laugh through the next frame.'],
    note: 'Keep the forearms low so the shoulders stay open.',
    mistake: 'Crossing the arms high and tight across the chest.',
    fix: 'Keep forearms low with hands visible and laugh while looking away.',
  },
  {
    number: '07',
    slug: 'stool-lean',
    title: 'Stool Lean',
    mood: 'Change the height',
    cues: ['Sit near the front of the stool and raise one knee slightly.', 'Bring one hand near the chin and let the other arm fall forward.'],
    note: 'Lengthen through the waist before leaning into the pose.',
    mistake: 'Perching on the back of the stool and slumping forward.',
    fix: 'Sit near the front edge, lengthen the waist, then lean in gently.',
  },
  {
    number: '08',
    slug: 'floor-sit',
    title: 'Floor Sit',
    mood: 'Casual and grounded',
    cues: ['Raise one knee and fold the other leg comfortably underneath.', 'Rest the hands lightly around the knee without gripping.'],
    note: 'Sit on an angle rather than facing the camera squarely.',
    mistake: 'Facing the camera squarely with knees pulled tight together.',
    fix: 'Sit on an angle with one knee raised and hands resting lightly around it.',
  },
  {
    number: '09',
    slug: 'wall-lean',
    title: 'Wall Lean',
    mood: 'Use the setting',
    cues: ['Place one shoulder lightly against the wall and keep the hips free.', 'Look past the camera as if someone has just entered the room.'],
    note: 'Do not flatten the whole back against the wall.',
    mistake: 'Flattening the entire back and hips against the wall.',
    fix: 'Touch one shoulder lightly and leave the hips free from the surface.',
  },
  {
    number: '10',
    slug: 'walk-in',
    title: 'Walk In',
    mood: 'Add natural motion',
    cues: ['Take one small step towards the camera at half speed.', 'Let the arms swing and hold the expression until the next step.'],
    note: 'Use short steps so the body stays controlled and sharp.',
    mistake: 'Taking long strides that blur the face and body.',
    fix: 'Use short half-speed steps and hold the expression until the next step.',
  },
  {
    number: '11',
    slug: 'look-back',
    title: 'Look Back',
    mood: 'Show another angle',
    cues: ['Turn the body away first, then bring one shoulder back.', 'Look over the shoulder while keeping the neck long.'],
    note: 'Turn through the upper body instead of twisting only the neck.',
    mistake: 'Twisting only the neck while the feet stay planted forward.',
    fix: 'Turn through the upper body first, then bring the gaze back over the shoulder.',
  },
  {
    number: '12',
    slug: 'overhead-stretch',
    title: 'Overhead Stretch',
    mood: 'Finish loose and easy',
    cues: ['Raise both arms with bent elbows and softly cross the wrists.', 'Close the eyes, breathe out and let the torso curve naturally.'],
    note: 'Keep the hands relaxed and the shoulders away from the ears.',
    mistake: 'Raising locked arms with shoulders shrugged to the ears.',
    fix: 'Bend the elbows, cross wrists softly, and breathe out with eyes closed.',
  },
];

const SocialMediaPoseBook = () => {
  usePageMeta({
    title: '12 Social Media Poses for Women | WePhoto',
    description:
      'Twelve natural social media poses for women in one visual guide, with simple positioning tips for confident self portraits.',
    canonicalPath: '/pose-book/social-media',
    image: contactSheet.image,
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '12 Social Media Poses for Women',
    url: 'https://wephoto.com.au/pose-book/social-media',
    description:
      'A visual guide to twelve natural social media poses for women and self portraits.',
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
            <span className="eyebrow">WePhoto pose book · Self portraits</span>
            <div className="pose-board-title">
              <span aria-hidden="true">12</span>
              <h1>Social Media<br />Poses</h1>
            </div>
            <p>Simple <i /> Natural <i /> Confident</p>
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

          <nav className="pose-sheet-legend" aria-label="Social media pose index">
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
          <span className="eyebrow">Quick pose cues</span>
          <h2>Twelve prompts for your next post.</h2>
          <p>Start with one small action, then keep the frame that feels least posed.</p>
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
                {pose.cues.map((cue, cueIndex) => (
                  <li key={`${pose.slug}-${cueIndex}`}>{cue}</li>
                ))}
              </ol>
              <p className="pose-natural-note">{pose.note}</p>
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
            <span className="eyebrow">Make it your own</span>
            <h2>Use the sheet as a starting point, then keep moving between poses.</h2>
          </div>
          <Link to="/pose-book" className="button-primary">Explore more pose books</Link>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPoseBook;
