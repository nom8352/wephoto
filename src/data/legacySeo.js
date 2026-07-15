const legacySeoOverrides = {
  '/a-quick-insight-on-some-self-portrait-ideas-that-youll-love': {
    title: "Self-Portrait Ideas You'll Love | WePhoto",
    description:
      'Explore practical self-portrait ideas for stronger composition, natural expression, creative framing, and more confident social photos.',
  },
  '/get-the-perfect-self-portrait-photo-in-just-one-day': {
    title: 'How to Take a Better Self-Portrait in One Day | WePhoto',
    description:
      'Use simple lighting, framing, camera setup, and posing techniques to improve your self-portraits in one focused day of practice.',
  },
  '/how-to-add-charm-to-your-self-portrait-photography': {
    title: 'Add Character to Self-Portrait Photography | WePhoto',
    description:
      'Learn how setting, light, expression, styling, and composition can add more personality and visual interest to a self-portrait.',
  },
  '/how-to-make-the-family-portrait-photography-a-cake-walk': {
    title: 'How to Make Family Portraits Feel Easy | WePhoto',
    description:
      'Plan relaxed family portraits with simple group shapes, clear timing, natural interaction, and practical preparation before the shoot.',
  },
  '/mistakes-to-avoid-during-your-self-portrait-photography': {
    title: 'Self-Portrait Photography Mistakes to Avoid | WePhoto',
    description:
      'Avoid common self-portrait mistakes involving focus, lighting, camera height, background clutter, posing, and preparation.',
  },
  '/photo-studio-sydney/an-insight-on-the-key-aspects-related-to-self-portrait-photography': {
    title: 'Key Elements of Better Self-Portrait Photography | WePhoto',
    description:
      'Understand the equipment, composition, expression, timing, and creative choices that help a self-portrait communicate personality.',
  },
  '/selfies-with-a-pro-at-wephoto': {
    title: 'How to Take Better Selfies and Self-Portraits | WePhoto',
    description:
      'Improve selfies and self-portraits with practical guidance on light, camera position, expression, backgrounds, and simple preparation.',
  },
  '/tips-to-enhance-your-couple-photography-experience': {
    title: 'Tips for a Better Couple Photography Experience | WePhoto',
    description:
      'Prepare for relaxed couple photos with easy movement prompts, coordinated styling, clear communication, and natural interaction.',
  },
};

export function getLegacySeo(page) {
  return legacySeoOverrides[page.path] ?? {
    title: `${page.title} | WePhoto`,
    description: page.description,
  };
}
