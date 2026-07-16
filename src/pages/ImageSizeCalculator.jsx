import { useState } from 'react';
import { Camera, Crop, Image, LockKeyhole, RotateCcw, ScanLine, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import NextStep from '../components/NextStep';
import PrivacyBadge from '../components/PrivacyBadge';
import { usePageMeta } from '../hooks/usePageMeta';
import './Tools.css';

const presets = [
  { id: 'instagram-square', platform: 'Instagram', format: 'Square post', width: 1080, height: 1080 },
  { id: 'instagram-portrait', platform: 'Instagram', format: 'Portrait post', width: 1080, height: 1350 },
  { id: 'story-reel', platform: 'Instagram', format: 'Story / Reel', width: 1080, height: 1920 },
  { id: 'pinterest-pin', platform: 'Pinterest', format: 'Standard Pin', width: 1000, height: 1500 },
  { id: 'youtube-thumbnail', platform: 'YouTube', format: 'Thumbnail', width: 1280, height: 720 },
  { id: 'linkedin-square', platform: 'LinkedIn', format: 'Square post', width: 1200, height: 1200 },
];

const toDimension = (value) => Math.max(0, Math.round(Number(value) || 0));
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const formatRatio = (width, height) => {
  if (!width || !height) return '0:0';
  const divisor = gcd(width, height);
  return `${width / divisor}:${height / divisor}`;
};

const ImageSizeCalculator = () => {
  const [sourceWidth, setSourceWidth] = useState('4032');
  const [sourceHeight, setSourceHeight] = useState('3024');
  const [targetWidth, setTargetWidth] = useState('1080');
  const [targetHeight, setTargetHeight] = useState('1350');
  const [selectedPreset, setSelectedPreset] = useState('instagram-portrait');

  usePageMeta({
    title: 'Social Media Image Size & Ratio Calculator | WePhoto',
    description: 'Calculate image aspect ratios, resize dimensions, and crop amounts for Instagram, Pinterest, YouTube, and LinkedIn without stretching photos.',
    canonicalPath: '/tools/image-size-calculator',
  });

  const sourceW = toDimension(sourceWidth);
  const sourceH = toDimension(sourceHeight);
  const targetW = toDimension(targetWidth);
  const targetH = toDimension(targetHeight);
  const isReady = sourceW > 0 && sourceH > 0 && targetW > 0 && targetH > 0;
  const coverScale = isReady ? Math.max(targetW / sourceW, targetH / sourceH) : 0;
  const resizedW = Math.round(sourceW * coverScale);
  const resizedH = Math.round(sourceH * coverScale);
  const cropX = Math.max(0, resizedW - targetW);
  const cropY = Math.max(0, resizedH - targetH);
  const sourceRatio = sourceH ? sourceW / sourceH : 0;
  const targetRatio = targetH ? targetW / targetH : 0;
  const cropDirection = Math.abs(sourceRatio - targetRatio) < 0.001
    ? 'No crop needed'
    : sourceRatio > targetRatio
      ? 'Crop left and right'
      : 'Crop top and bottom';

  const selectPreset = (preset) => {
    setSelectedPreset(preset.id);
    setTargetWidth(String(preset.width));
    setTargetHeight(String(preset.height));
  };

  const reset = () => {
    setSourceWidth('4032');
    setSourceHeight('3024');
    selectPreset(presets[1]);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Social Media Image Size and Aspect Ratio Calculator',
    url: 'https://wephoto.com.au/tools/image-size-calculator',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  };

  return (
    <div className="tool-detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="tool-detail-hero site-shell" data-reveal>
        <Link to="/tools" className="tool-back-link">Creator tools / Calculator 02</Link>
        <span className="tools-kicker">Social image preparation</span>
        <h1>Image Size &<br /><em>Ratio Calculator</em></h1>
        <p>See exactly how a photo fits a social format. Resize proportionally, identify the crop, and avoid stretched images.</p>
        <PrivacyBadge />
      </section>

      <section className="calculator-shell site-shell">
        <div className="calculator-panel image-calculator-panel" data-reveal>
          <div className="calculator-group-heading"><span>01</span><h2>Enter your original image</h2></div>
          <div className="calculator-form-grid calculator-dimensions">
            <label className="calculator-field"><span>Original width</span><div><input type="number" min="1" inputMode="numeric" value={sourceWidth} onChange={(event) => setSourceWidth(event.target.value)} /><small>px</small></div></label>
            <label className="calculator-field"><span>Original height</span><div><input type="number" min="1" inputMode="numeric" value={sourceHeight} onChange={(event) => setSourceHeight(event.target.value)} /><small>px</small></div></label>
          </div>

          <div className="calculator-group-heading"><span>02</span><h2>Choose the destination</h2></div>
          <div className="image-preset-grid">
            {presets.map((preset) => (
              <button key={preset.id} type="button" className={selectedPreset === preset.id ? 'active' : ''} aria-pressed={selectedPreset === preset.id} onClick={() => selectPreset(preset)}>
                <strong>{preset.platform}</strong><span>{preset.format}</span><small>{preset.width} × {preset.height}</small>
              </button>
            ))}
          </div>

          <div className="calculator-form-grid calculator-dimensions calculator-custom-target">
            <label className="calculator-field"><span>Target width</span><div><input type="number" min="1" inputMode="numeric" value={targetWidth} onChange={(event) => { setSelectedPreset('custom'); setTargetWidth(event.target.value); }} /><small>px</small></div></label>
            <label className="calculator-field"><span>Target height</span><div><input type="number" min="1" inputMode="numeric" value={targetHeight} onChange={(event) => { setSelectedPreset('custom'); setTargetHeight(event.target.value); }} /><small>px</small></div></label>
          </div>

          <button type="button" className="calculator-reset" onClick={reset}><RotateCcw size={16} /> Reset values</button>
        </div>

        <aside className="calculator-result image-result" aria-live="polite" data-reveal style={{ '--delay': '0.1s' }}>
          <span className="calculator-result-label">Proportional resize result</span>
          <div className="ratio-preview" style={{ '--preview-ratio': targetW && targetH ? `${targetW} / ${targetH}` : '1 / 1' }}>
            <span>{targetW || 0} × {targetH || 0}</span>
            <ScanLine size={26} />
          </div>
          <div className="image-result-main">
            <span><small>Original ratio</small><b>{formatRatio(sourceW, sourceH)}</b></span>
            <span><small>Target ratio</small><b>{formatRatio(targetW, targetH)}</b></span>
            <span><small>Resize image to</small><b>{resizedW} × {resizedH}</b></span>
            <span><small>Then crop</small><b>{cropX}px × {cropY}px</b></span>
          </div>
          <strong className="crop-direction"><Crop size={18} /> {cropDirection}</strong>
          <div className="calculator-result-note"><LockKeyhole size={18} /><span>No image upload is needed. Only the dimensions are calculated.</span></div>
        </aside>
      </section>

      <section className="tool-explainer site-shell">
        <article data-reveal>
          <Image size={24} />
          <h2>Resize without distortion</h2>
          <p>The calculator scales width and height together until the target frame is covered. It never changes one dimension independently, so people and objects keep their natural proportions.</p>
        </article>
        <article data-reveal style={{ '--delay': '0.08s' }}>
          <Crop size={24} />
          <h2>Plan the crop before editing</h2>
          <p>The result shows whether the target needs a side crop or a top-and-bottom crop. Keep faces, text, and important details away from the edges that will be removed.</p>
        </article>
      </section>

      <section className="tool-reference site-shell">
        <header className="tools-section-heading" data-reveal>
          <span>Quick size reference</span>
          <h2>Common social image formats at a glance.</h2>
        </header>
        <div className="tool-size-table-wrap" data-reveal>
          <table className="tool-size-table">
            <thead><tr><th>Platform</th><th>Format</th><th>Pixels</th><th>Ratio</th></tr></thead>
            <tbody>
              {presets.map((preset) => (
                <tr key={preset.id}><td>{preset.platform}</td><td>{preset.format}</td><td>{preset.width} × {preset.height}</td><td>{formatRatio(preset.width, preset.height)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="tool-faq-grid">
          <details data-reveal>
            <summary>Does this calculator stretch my image?</summary>
            <p>No. It scales both dimensions by the same amount, then shows the crop required to fill the selected format.</p>
          </details>
          <details data-reveal>
            <summary>Why is cropping sometimes necessary?</summary>
            <p>A landscape photo and a portrait post use different aspect ratios. Filling the frame without distortion means some pixels must be removed from the longer edge.</p>
          </details>
          <details data-reveal>
            <summary>Where should I place faces and text?</summary>
            <p>Keep essential details near the centre when adapting one image to several formats. The crop direction tells you which edges need the most breathing room.</p>
          </details>
          <details data-reveal>
            <summary>Do I need to upload my photo?</summary>
            <p>No. Enter the original width and height shown in your image information. WePhoto only calculates dimensions and never receives the image.</p>
          </details>
        </div>
      </section>

      <NextStep
        heading="Need better photos to post in the first place?"
        items={[
          {
            to: '/pose-book',
            eyebrow: 'Pose library',
            title: 'Browse 108 pose ideas',
            text: 'Nine visual pose sheets with step-by-step direction for every shot.',
            icon: Camera,
          },
          {
            to: '/pose-book/selfie-mirror',
            eyebrow: 'Most popular',
            title: 'Selfie & mirror poses',
            text: 'Flattering phone angles and mirror-photo prompts you can try today.',
            icon: Users,
          },
        ]}
      />
    </div>
  );
};

export default ImageSizeCalculator;
