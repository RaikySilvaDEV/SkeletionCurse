const sectionSpecs = [
  { id: 'hero', className: 'relative overflow-hidden' },
  { id: 'provasocial', className: 'py-2' },
  { id: 'problema', className: 'py-2 bg-zinc-900/30' },
  { id: 'curso', className: 'py-2' },
  { id: 'depoimentos', className: 'py-2 bg-zinc-900/30' },
  { id: 'bonus', className: 'py-2' },
  { id: 'preco', className: 'py-2 bg-zinc-900/30' },
  { id: 'faq', className: 'py-2' },
];

const buildSections = () => {
  const app = $('#app');
  if (!app) {
    return;
  }
  app.textContent = '';
  sectionSpecs.forEach((spec) => {
    const section = createEl('section', spec.className);
    section.id = spec.id;
    app.append(section);
  });
};

const setFooterYear = () => {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
};

const triggerFadeUp = () => {
  if (typeof window.startFadeUp === 'function') {
    window.startFadeUp();
    return;
  }
  if (typeof window.applyFadeUp === 'function') {
    window.applyFadeUp();
  }
};

const triggerInteractions = () => {
  if (typeof window.startInteractions === 'function') {
    window.startInteractions();
    return;
  }
  if (typeof window.applyInteractions === 'function') {
    window.applyInteractions();
  }
};

const init = () => {
  buildSections();
  renderHero(DATA);
  renderSocialProof(DATA);
  renderPainPoints(DATA);
  renderModules(DATA);
  renderTestimonials(DATA);
  renderBonuses(DATA);
  renderPricing(DATA);
  renderFAQ(DATA);
  renderCountdown(DATA.countdownEnd);
  setFooterYear();
  triggerFadeUp();
  triggerInteractions();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
