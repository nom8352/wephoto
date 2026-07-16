import { chromium } from 'playwright';

const base = process.env.CHECK_BASE || 'http://127.0.0.1:5173';

const results = [];

const check = (name, ok, detail = '') => {
  results.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ` — ${detail}` : ''}`);
};

const browser = await chromium.launch({
  headless: true,
  channel: process.env.PW_CHANNEL || 'chrome',
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  await page.goto(`${base}/pose-book/men`, { waitUntil: 'networkidle' });
  const nextLinks = page.locator('.next-step-card');
  check('pose book shows NextStep cards', (await nextLinks.count()) >= 2, `count=${await nextLinks.count()}`);
  check(
    'NextStep links to image size tool',
    await page.locator('a.next-step-card[href="/tools/image-size-calculator"]').count() === 1,
  );
  check(
    'NextStep links to engagement tool',
    await page.locator('a.next-step-card[href="/tools/engagement-rate-calculator"]').count() === 1,
  );

  const legend = page.locator('.pose-sheet-legend a').first();
  const href = await legend.getAttribute('href');
  await legend.click();
  await page.waitForTimeout(400);
  const hash = await page.evaluate(() => location.hash);
  check('legend click updates hash', Boolean(hash) && href?.includes(hash.replace('#', '')), `hash=${hash}`);
  const targetOutline = await page.evaluate(() => {
    const el = document.querySelector('.pose-guide-card:target');
    if (!el) return null;
    return getComputedStyle(el).outlineStyle;
  });
  check('target card has outline', targetOutline && targetOutline !== 'none', `outline=${targetOutline}`);

  const mistakeBlocks = await page.locator('.pose-fix').count();
  check('mistake/fix blocks render on men book', mistakeBlocks >= 12, `count=${mistakeBlocks}`);

  await page.goto(`${base}/tools/engagement-rate-calculator`, { waitUntil: 'networkidle' });
  check(
    'calculator shows PrivacyBadge',
    (await page.locator('.privacy-badge').count()) >= 1,
  );
  check(
    'calculator NextStep back to pose library',
    (await page.locator('a.next-step-card[href="/pose-book"]').count()) >= 1,
  );

  await page.goto(`${base}/tools/reels-safe-zone-checker`, { waitUntil: 'networkidle' });
  check('reels tool loads H1', (await page.locator('h1').count()) >= 1);
  check('reels frame present', (await page.locator('.safe-zone-frame').count()) === 1);
  await page.getByRole('button', { name: 'TikTok' }).click();
  await page.waitForTimeout(200);
  const tiktokActive = await page.getByRole('button', { name: 'TikTok' }).getAttribute('aria-pressed');
  check('TikTok platform toggle works', tiktokActive === 'true');

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${base}/pose-book/social-media`, { waitUntil: 'networkidle' });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  check('mobile no horizontal overflow on social pose book', !overflow);

  await page.goto(`${base}/tools`, { waitUntil: 'networkidle' });
  check(
    'tools hub lists reels checker',
    (await page.locator('a[href="/tools/reels-safe-zone-checker"]').count()) >= 1,
  );
  check(
    'tools hub lists caption counter',
    (await page.locator('a[href="/tools/caption-character-counter"]').count()) >= 1,
  );

  await page.goto(`${base}/tools/caption-character-counter`, { waitUntil: 'networkidle' });
  check('caption tool loads H1', (await page.locator('h1').count()) >= 1);
  await page.getByRole('button', { name: 'X / Twitter post' }).click();
  await page.locator('textarea').fill(`${'a'.repeat(281)}`);
  await page.waitForTimeout(150);
  const overClass = await page.locator('.caption-count-over').count();
  check('caption counter marks over-limit text', overClass >= 1);
} catch (error) {
  check('script error', false, error.message);
} finally {
  await browser.close();
}

const failed = results.filter((item) => !item.ok);
console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
if (failed.length) process.exit(1);
