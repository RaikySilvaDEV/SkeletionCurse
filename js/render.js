const getSection = (id) => document.getElementById(id);

const buildSectionHeader = (title, subtitle, align = 'left') => {
  const headerClass = align === 'center' ? 'text-center mx-auto' : '';
  const header = createEl('div', `mb-10 ${headerClass}`.trim());
  const heading = createEl(
    'h2',
    'font-display text-2xl sm:text-3xl font-semibold text-zinc-100',
    title
  );
  const sub = createEl('p', 'mt-2 text-sm sm:text-base text-zinc-300', subtitle);
  header.append(heading, sub);
  return header;
};

const renderList = (containerId, items, renderItemFn) => {
  const container =
    typeof containerId === 'string'
      ? document.getElementById(containerId.replace('#', ''))
      : containerId;
  if (!container) {
    return;
  }
  container.textContent = '';
  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => {
    const node = renderItemFn(item, index);
    if (node) {
      fragment.append(node);
    }
  });
  container.append(fragment);
};

const renderHero = (data) => {
  const section = getSection('hero');
  if (!section) {
    return;
  }
  section.textContent = '';

  const container = createEl('div', 'mx-auto max-w-5xl px-6 py-14');
  const grid = createEl('div', 'grid gap-8 md:grid-cols-2 md:items-center');

  const left = createEl('div', 'space-y-6');
  const badge = createEl(
    'span',
    'inline-flex items-center rounded-full bg-emerald-600/20 px-3 py-1 text-xs font-semibold text-emerald-200',
    data.hero.badge
  );
  const headline = createEl(
    'h1',
    'font-display text-3xl sm:text-4xl font-semibold text-zinc-50',
    data.hero.headline
  );
  const subheadline = createEl(
    'p',
    'text-sm sm:text-base text-zinc-300 leading-relaxed',
    data.hero.subheadline
  );

  const ctaRow = createEl('div', 'flex flex-col gap-3 sm:flex-row sm:items-center');
  const cta = createEl(
    'a',
    'inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 shadow hover:bg-emerald-400',
    data.hero.cta
  );
  cta.href = '#preco';
  const ctaSub = createEl(
    'span',
    'text-xs text-zinc-400',
    data.pricing.guarantee
  );
  ctaRow.append(cta, ctaSub);

  const stats = createEl('div', 'grid grid-cols-3 gap-3 pt-2');
  data.hero.stats.forEach((stat) => {
    const statCard = createEl(
      'div',
      'rounded-3xl border border-zinc-800 bg-zinc-900 p-3 text-center shadow'
    );
    const value = createEl(
      'div',
      'text-base font-semibold text-zinc-100',
      stat.value
    );
    const label = createEl('div', 'text-xs text-zinc-400', stat.label);
    statCard.append(value, label);
    stats.append(statCard);
  });

  left.append(badge, headline, subheadline, ctaRow, stats);

  const right = createEl(
    'div',
    'rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow'
  );
  const mediaWrap = createEl(
    'div',
    'mb-4 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800'
  );
  const media = data.hero.media;
  if (media && media.type === 'video' && media.src) {
    const video = createEl(
      'video',
      'h-48 w-full object-cover sm:h-56'
    );
    video.src = media.src;
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    if (media.poster) {
      video.poster = media.poster;
    }
    mediaWrap.append(video);
    right.append(mediaWrap);
  } else if (media && media.src) {
    const image = createEl(
      'img',
      'h-48 w-full object-cover sm:h-56'
    );
    image.src = media.src;
    image.alt = media.alt || 'Imagem do curso';
    image.loading = 'eager';
    image.decoding = 'async';
    image.width = 1200;
    image.height = 800;
    mediaWrap.append(image);
    right.append(mediaWrap);
  }
  const rightTitle = createEl(
    'h3',
    'font-display text-base font-semibold text-zinc-100',
    'O que voce vai dominar'
  );
  const list = createEl('ul', 'mt-4 space-y-3');
  data.hero.highlights.forEach((item) => {
    const li = createEl('li', 'flex gap-3');
    const dot = createEl(
      'span',
      'mt-2 h-2 w-2 rounded-full bg-emerald-400'
    );
    const text = createEl('span', 'text-sm text-zinc-200', item);
    li.append(dot, text);
    list.append(li);
  });
  const rightFooter = createEl(
    'div',
    'mt-5 rounded-2xl bg-zinc-800 px-4 py-3 text-xs text-zinc-200',
    'Acesso imediato + atualizacoes durante 12 meses.'
  );
  right.append(rightTitle, list, rightFooter);

  grid.append(left, right);
  container.append(grid);
  section.append(container);
};

const renderSocialProof = (data) => {
  const section = getSection('provasocial');
  if (!section) {
    return;
  }
  section.textContent = '';

  const container = createEl('div', 'mx-auto max-w-5xl px-6 py-12');
  const header = buildSectionHeader(
    'Times que confiam',
    'Marcas e equipes que ja aplicam o metodo no dia a dia.'
  );
  const carousel = createEl('div', 'mt-6 carousel carousel-logos');
  const list = createEl('div', 'carousel-track');
  list.id = 'logos-list';

  carousel.append(list);
  container.append(header, carousel);
  section.append(container);

  renderList('logos-list', data.logos, (logo) => {
    const card = createEl(
      'div',
      'flex flex-col items-center gap-2 rounded-3xl border border-zinc-800 bg-zinc-900 px-3 py-3 text-xs font-semibold text-zinc-200 shadow'
    );
    if (logo.logo) {
      const image = createEl('img', 'h-8 w-auto invert');
      image.src = logo.logo;
      image.alt = logo.name ? `${logo.name} logo` : 'Logo';
      image.loading = 'lazy';
      image.decoding = 'async';
      image.width = 160;
      image.height = 64;
      card.append(image);
    }
    const text = createEl('span', 'text-center', logo.name);
    card.append(text);
    return card;
  });
};

const renderPainPoints = (data) => {
  const section = getSection('problema');
  if (!section) {
    return;
  }
  section.textContent = '';

  const container = createEl('div', 'mx-auto max-w-5xl px-6 py-12');
  const header = buildSectionHeader(
    'O que esta travando suas vendas',
    'Identifique os pontos de friccao que afastam alunos.'
  );
  const list = createEl('div', 'mt-8 grid gap-4 md:grid-cols-3');
  list.id = 'pains-list';

  container.append(header, list);
  section.append(container);

  renderList('pains-list', data.pains, (pain) => {
    const card = createEl(
      'div',
      'rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow'
    );
    const title = createEl(
      'h3',
      'font-display text-base font-semibold text-zinc-100',
      pain.title
    );
    const desc = createEl(
      'p',
      'mt-2 text-sm text-zinc-300',
      pain.description
    );
    card.append(title, desc);
    return card;
  });
};

const renderModules = (data) => {
  const section = getSection('curso');
  if (!section) {
    return;
  }
  section.textContent = '';

  const container = createEl('div', 'mx-auto max-w-5xl px-6 py-12');
  const header = buildSectionHeader(
    'Conteudo organizado por modulos',
    'Uma trilha direta ao ponto, do primeiro rascunho ao lancamento.'
  );
  const list = createEl('div', 'mt-8 grid gap-4 lg:grid-cols-2');
  list.id = 'modules-list';

  container.append(header, list);
  section.append(container);

  renderList('modules-list', data.modules, (module, index) => {
    const card = createEl(
      'div',
      'rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow'
    );
    const badge = createEl(
      'span',
      'inline-flex items-center rounded-full bg-emerald-600/20 px-3 py-1 text-xs font-semibold text-emerald-200',
      `Modulo ${index + 1}`
    );
    const title = createEl(
      'h3',
      'font-display mt-3 text-base font-semibold text-zinc-100',
      module.title
    );
    const desc = createEl(
      'p',
      'mt-2 text-sm text-zinc-300',
      module.description
    );
    const topics = createEl('ul', 'mt-3 space-y-2 text-sm text-zinc-300');
    module.topics.forEach((topic) => {
      const item = createEl('li', 'flex items-start gap-2');
      const dot = createEl(
        'span',
        'mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400'
      );
      const text = createEl('span', 'leading-relaxed', topic);
      item.append(dot, text);
      topics.append(item);
    });
    card.append(badge, title, desc, topics);
    return card;
  });
};

const renderTestimonials = (data) => {
  const section = getSection('depoimentos');
  if (!section) {
    return;
  }
  section.textContent = '';

  const container = createEl('div', 'mx-auto max-w-5xl px-6 py-12');
  const header = buildSectionHeader(
    'Resultados reais',
    'Depoimentos de quem aplicou o metodo e vendeu mais.'
  );
  const carousel = createEl('div', 'mt-8 carousel carousel-testimonials');
  const list = createEl('div', 'carousel-track');
  list.id = 'testimonials-list';

  carousel.append(list);
  container.append(header, carousel);
  section.append(container);

  renderList('testimonials-list', data.testimonials, (item) => {
    const card = createEl(
      'div',
      'flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow'
    );
    const header = createEl('div', 'flex items-center gap-3');
    const avatar = createEl(
      'img',
      'h-12 w-12 rounded-full border border-zinc-800 object-cover'
    );
    avatar.src = item.avatar || '';
    avatar.alt = item.name || 'Aluno';
    avatar.loading = 'lazy';
    avatar.width = 96;
    avatar.height = 96;

    const info = createEl('div');
    const name = createEl(
      'div',
      'text-sm font-semibold text-zinc-100',
      item.name
    );
    info.append(name);
    if (item.role) {
      const role = createEl('div', 'text-xs text-zinc-400', item.role);
      info.append(role);
    }

    header.append(avatar, info);

    const quote = createEl('p', 'mt-4 text-sm text-zinc-200', item.quote);
    card.append(header, quote);
    return card;
  });
};

const renderBonuses = (data) => {
  const section = getSection('bonus');
  if (!section) {
    return;
  }
  section.textContent = '';

  const container = createEl('div', 'mx-auto max-w-5xl px-6 py-12');
  const header = buildSectionHeader(
    'Bonus para acelerar resultados',
    'Recursos extras para voce sair na frente logo na primeira entrega.'
  );

  const grid = createEl('div', 'mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]');
  const list = createEl('div', 'grid gap-4');
  list.id = 'bonuses-list';

  const countdownCard = createEl(
    'div',
    'rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow'
  );
  const countdownTitle = createEl(
    'h3',
    'font-display text-lg font-semibold text-zinc-100',
    'Oferta encerra em'
  );
  const countdownHint = createEl(
    'p',
    'mt-2 text-sm text-zinc-400',
    'Garanta o valor promocional antes da virada.'
  );
  const countdownGrid = createEl(
    'div',
    'mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4'
  );
  countdownGrid.id = 'countdown';

  const parts = [
    { id: 'countdown-days', label: 'Dias' },
    { id: 'countdown-hours', label: 'Horas' },
    { id: 'countdown-minutes', label: 'Minutos' },
    { id: 'countdown-seconds', label: 'Segundos' },
  ];

  parts.forEach((part) => {
    const box = createEl(
      'div',
      'rounded-2xl bg-emerald-500/10 px-4 py-3 text-center'
    );
    const value = createEl(
      'div',
      'text-2xl font-semibold text-emerald-100'
    );
    value.id = part.id;
    const label = createEl(
      'div',
      'text-xs text-emerald-200/80',
      part.label
    );
    box.append(value, label);
    countdownGrid.append(box);
  });

  const countdownCta = createEl(
    'a',
    'mt-4 inline-flex w-full items-center justify-center rounded-3xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 shadow hover:bg-emerald-400',
    'Aproveitar oferta'
  );
  countdownCta.href = '#preco';

  countdownCard.append(countdownTitle, countdownHint, countdownGrid, countdownCta);
  grid.append(list, countdownCard);
  container.append(header, grid);
  section.append(container);

  renderList('bonuses-list', data.bonuses, (bonus) => {
    const card = createEl(
      'div',
      'rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow'
    );
    const title = createEl(
      'h3',
      'font-display text-lg font-semibold text-zinc-100',
      bonus.title
    );
    const desc = createEl(
      'p',
      'mt-3 text-sm leading-relaxed text-zinc-300',
      bonus.description
    );
    card.append(title, desc);
    return card;
  });
};

const renderPricing = (data) => {
  const section = getSection('preco');
  if (!section) {
    return;
  }
  section.textContent = '';

  const container = createEl('div', 'mx-auto max-w-5xl px-6 py-12');
  const header = buildSectionHeader(
    'Planos do curso',
    'Escolha a opcao que faz mais sentido para voce.'
  );

  const plansTitle = createEl(
    'h3',
    'font-display text-lg font-semibold text-zinc-100',
    'Escolha seu plano'
  );
  const plansHint = createEl(
    'p',
    'mt-2 text-sm text-zinc-300',
    'Opcoes simples para diferentes momentos.'
  );
  const plansCarousel = createEl('div', 'mt-5 carousel carousel-plans');
  const plansList = createEl('div', 'carousel-track');
  plansList.id = 'plans-list';

  plansCarousel.append(plansList);
  container.append(header, plansTitle, plansHint, plansCarousel);
  section.append(container);

  renderList(plansList, data.pricing.plans || [], (plan) => {
    const planCard = createEl(
      'div',
      'rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow'
    );
    const name = createEl(
      'div',
      'font-display text-base font-semibold text-zinc-100',
      plan.name
    );
    const priceWrap = createEl('div', 'mt-2 space-y-1');
    const priceNow = createEl(
      'div',
      'text-2xl font-semibold text-zinc-50',
      plan.priceNow || ''
    );
    const priceBefore = createEl(
      'div',
      'text-xs text-zinc-400 line-through',
      plan.priceBefore || ''
    );
    priceWrap.append(priceNow);
    if (plan.priceBefore) {
      priceWrap.append(priceBefore);
    }
    const desc = createEl(
      'p',
      'mt-2 text-sm text-zinc-300',
      plan.description
    );
    const features = createEl('ul', 'mt-4 space-y-2 text-sm text-zinc-300');
    (plan.features || []).forEach((feature) => {
      const item = createEl('li', 'flex items-start gap-2');
      const dot = createEl(
        'span',
        'mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400'
      );
      const text = createEl('span', 'leading-relaxed', feature);
      item.append(dot, text);
      features.append(item);
    });
    const button = createEl(
      'a',
      'mt-4 inline-flex w-full items-center justify-center rounded-3xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow hover:bg-emerald-400',
      plan.cta || data.hero.cta
    );
    button.href = '#preco';
    planCard.append(name, priceWrap, desc, features, button);
    return planCard;
  });
};

const renderFAQ = (data) => {
  const section = getSection('faq');
  if (!section) {
    return;
  }
  section.textContent = '';

  const container = createEl('div', 'mx-auto max-w-5xl px-6 py-12');
  const header = buildSectionHeader(
    'Perguntas frequentes',
    'Tire suas duvidas antes de entrar para a turma.'
  );

  const list = createEl('div', 'mt-10 space-y-4');
  list.id = 'faq-list';

  renderList(list, data.faq, (item, index) => {
    const wrapper = createEl(
      'div',
      'rounded-2xl border border-zinc-800 bg-zinc-950'
    );
    const button = createEl(
      'button',
      'flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-zinc-100'
    );
    button.type = 'button';
    button.id = `faq-trigger-${index}`;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `faq-panel-${index}`);

    const question = createEl('span', 'text-base', item.question);
    const icon = createEl('span', 'text-zinc-400');
    icon.dataset.icon = 'toggle';
    icon.textContent = '+';

    button.append(question, icon);

    const panel = createEl(
      'div',
      'hidden px-5 pb-5 text-sm leading-relaxed text-zinc-300'
    );
    panel.id = `faq-panel-${index}`;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', button.id);

    const answer = createEl('p', '', item.answer);
    panel.append(answer);

    wrapper.append(button, panel);
    return wrapper;
  });

  const ctaCard = createEl(
    'div',
    'mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-zinc-800 bg-zinc-900 p-6 sm:flex-row sm:items-center'
  );
  const ctaText = createEl('div', 'space-y-2');
  const ctaTitle = createEl(
    'h3',
    'font-display text-lg font-semibold text-zinc-100',
    'Pronto para sua proxima landing?'
  );
  const ctaDesc = createEl(
    'p',
    'text-sm text-zinc-300',
    'Entre para a turma e entregue paginas com mais conversao.'
  );
  ctaText.append(ctaTitle, ctaDesc);

  const ctaButton = createEl(
    'a',
    'inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 shadow hover:bg-emerald-400',
    data.hero.cta
  );
  ctaButton.href = '#preco';

  ctaCard.append(ctaText, ctaButton);
  container.append(header, list, ctaCard);
  section.append(container);

  const buttons = $$('button[aria-controls]', list);

  const toggle = (btn, open) => {
    const panelId = btn.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    const icon = btn.querySelector('[data-icon="toggle"]');
    if (!panel) {
      return;
    }
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    panel.classList.toggle('hidden', !open);
    if (icon) {
      icon.textContent = open ? '-' : '+';
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      buttons.forEach((other) => toggle(other, false));
      toggle(btn, !isOpen);
    });
  });
};

const renderCountdown = (endDateISO) => {
  const end = new Date(endDateISO).getTime();
  if (Number.isNaN(end)) {
    return;
  }

  const daysEl = document.getElementById('countdown-days');
  const hoursEl = document.getElementById('countdown-hours');
  const minutesEl = document.getElementById('countdown-minutes');
  const secondsEl = document.getElementById('countdown-seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
    return;
  }

  const pad = (value) => String(value).padStart(2, '0');

  let intervalId = null;

  const update = () => {
    const diff = Math.max(0, end - Date.now());
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = String(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);

    if (diff <= 0 && intervalId) {
      clearInterval(intervalId);
    }
  };

  update();
  if (end > Date.now()) {
    intervalId = setInterval(update, 1000);
    return intervalId;
  }
  return null;
};

window.renderList = renderList;
window.renderHero = renderHero;
window.renderSocialProof = renderSocialProof;
window.renderPainPoints = renderPainPoints;
window.renderModules = renderModules;
window.renderTestimonials = renderTestimonials;
window.renderBonuses = renderBonuses;
window.renderPricing = renderPricing;
window.renderFAQ = renderFAQ;
window.renderCountdown = renderCountdown;
