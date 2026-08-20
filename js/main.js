// ponytail: duplicate track until >= 2x viewport (even count keeps the -50% loop seamless)
function initClientsMarquee() {
  const marquee = document.querySelector('.clients__marquee');
  const track = marquee && marquee.querySelector('.clients__track');
  if (!track) return;
  const cells = Array.from(track.children);
  while (track.scrollWidth < marquee.clientWidth * 2) {
    cells.forEach((c) => track.appendChild(c.cloneNode(true)));
  }
}

function initSwiper(selector, options) {
  const el = document.querySelector(selector);
  if (!el) return null;
  return new Swiper(el, options);
}

function bindNav(selector, swiper) {
  const navs = document.querySelectorAll(selector);
  if (!navs.length || !swiper) return;
  navs.forEach((nav) => {
    const prev = nav.querySelector('[data-scroll-prev]');
    const next = nav.querySelector('[data-scroll-next]');
    if (prev) prev.addEventListener('click', () => swiper.slidePrev());
    if (next) next.addEventListener('click', () => swiper.slideNext());
  });
}

function initAccordion(listSelector, openClass, buttonSelector) {
  const list = document.querySelector(listSelector);
  if (!list) return;
  list.addEventListener('click', (e) => {
    const btn = e.target.closest(buttonSelector);
    if (!btn) return;
    const item = btn.closest('li, .faq__item');
    if (!item) return;
    const isOpen = item.classList.contains(openClass);
    list.querySelectorAll(`.${openClass}`).forEach((el) => {
      el.classList.remove(openClass);
      const b = el.querySelector(buttonSelector);
      if (b) b.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add(openClass);
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}

// ponytail: placeholder client data — replace with CSV/fetch from real source (url = partner website)
function initClientsPage() {
  const grid = document.getElementById('clientsGrid');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.c-clients__card'));
  const filters = document.querySelectorAll('.tab-filter');
  const more = document.getElementById('clientsMore');
  const moreBtn = document.getElementById('clientsShowMore');
  const INITIAL = 16;
  let revealed = false;

  const apply = () => {
    const active = document.querySelector('.tab-filter.is-active');
    const filter = active ? active.dataset.filter : 'all';
    let shown = 0;
    cards.forEach((card) => {
      const on = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !on || (on && !revealed && shown >= INITIAL));
      if (on) shown++;
    });
    const total = cards.filter((c) => filter === 'all' || c.dataset.category === filter).length;
    if (more) more.hidden = revealed || total <= INITIAL;
  };

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      revealed = false;
      apply();
    });
  });

  if (moreBtn) {
    moreBtn.addEventListener('click', () => {
      revealed = true;
      apply();
    });
  }

  apply();
}

function initEventsPage() {
  const grid = document.getElementById('eventsGrid');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.events__card'));
  const filters = document.querySelectorAll('.tab-filter');
  const more = document.getElementById('eventsMore');
  const moreBtn = document.getElementById('eventsShowMore');
  const INITIAL = 8;
  let revealed = false;

  const apply = () => {
    const active = document.querySelector('.tab-filter.is-active');
    const filter = active ? active.dataset.filter : 'all';
    let shown = 0;
    cards.forEach((card) => {
      const on = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !on || (on && !revealed && shown >= INITIAL));
      if (on) shown++;
    });
    const total = cards.filter((c) => filter === 'all' || c.dataset.category === filter).length;
    if (more) more.classList.toggle('is-hidden', revealed || total <= INITIAL);
  };

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      revealed = false;
      apply();
    });
  });

  if (moreBtn) {
    moreBtn.addEventListener('click', () => {
      revealed = true;
      apply();
    });
  }

  apply();
}

// ponytail: multiple <details> dropdowns — native toggle works everywhere; JS only adds badges + reset + removable chips
function initDropdown() {
  const bar = document.querySelector('.projects__filters');
  if (!bar) return;
  const dropdowns = Array.from(bar.querySelectorAll('.dropdown'));
  const chips = document.getElementById('projectsChips');
  const reset = document.getElementById('projectsReset');
  const allChecks = Array.from(bar.querySelectorAll('.dropdown__check'));
  const chipX = '<svg class="projects__chip-x" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';

  const grid = document.querySelector('.projects__grid');
  const cards = grid ? Array.from(grid.querySelectorAll('.projects__card')) : [];
  const empty = document.getElementById('projectsEmpty');
  const more = document.getElementById('projectsMore');
  const moreBtn = document.getElementById('projectsShowMore');
  const STEP = 2;
  let visible = 4;
  let lastMatched = 0;

  const renderChips = () => {
    chips.innerHTML = '';
    allChecks.forEach((c) => {
      if (!c.checked) return;
      const text = c.closest('.dropdown__option').textContent.trim();
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'projects__chip';
      btn.setAttribute('aria-label', `Убрать фильтр: ${text}`);
      btn.innerHTML = `<span>${text}</span>${chipX}`;
      btn.addEventListener('click', () => {
        c.checked = false;
        sync();
      });
      chips.appendChild(btn);
    });
  };

  const applyFilter = () => {
    const active = {};
    dropdowns.forEach((dd) => {
      const checked = Array.from(dd.querySelectorAll('.dropdown__check:checked')).map((c) => c.value);
      if (checked.length) active[dd.dataset.filter] = new Set(checked);
    });
    let matched = 0;
    cards.forEach((card) => {
      let show = true;
      for (const [grp, set] of Object.entries(active)) {
        const vals = (card.dataset[grp] || '').split(/\s+/).filter(Boolean);
        if (!vals.some((v) => set.has(v))) {
          show = false;
          break;
        }
      }
      card.classList.toggle('is-matched', show);
      if (!show) {
        card.hidden = true;
        return;
      }
      matched++;
      card.hidden = matched > visible;
    });
    lastMatched = matched;
    empty.hidden = matched > 0;
    updateMore();
  };

  const updateMore = () => {
    if (more) more.hidden = lastMatched <= visible;
  };

  const reveal = (els) => {
    els.forEach((el, i) => {
      el.classList.remove('card-appear');
      void el.offsetWidth;
      el.style.animationDelay = `${i * 80}ms`;
      el.classList.add('card-appear');
    });
  };

  if (moreBtn) {
    moreBtn.addEventListener('click', () => {
      const hidden = cards.filter((c) => c.classList.contains('is-matched') && c.hidden);
      visible += STEP;
      applyFilter();
      reveal(hidden);
    });
  }

  const sync = () => {
    let total = 0;
    dropdowns.forEach((dd) => {
      const checks = dd.querySelectorAll('.dropdown__check');
      const n = Array.from(checks).filter((c) => c.checked).length;
      const badge = dd.querySelector('.dropdown__count');
      badge.textContent = n;
      badge.classList.toggle('is-hidden', n === 0);
      total += n;
    });
    renderChips();
    applyFilter();
    reset.classList.toggle('is-hidden', total === 0);
  };

  allChecks.forEach((c) => c.addEventListener('change', sync));
  reset.addEventListener('click', () => {
    allChecks.forEach((c) => (c.checked = false));
    sync();
  });
  document.addEventListener('click', (e) => {
    dropdowns.forEach((dd) => {
      if (dd.open && !dd.contains(e.target)) dd.open = false;
    });
  });
  dropdowns.forEach((dd) =>
    dd.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') dd.open = false;
    })
  );
  sync();
}

// ponytail: one popup template, cloned per click; src filled from the tab's screenshot
function initDemoPopup() {
  const tpl = document.getElementById('s-features-popup');
  const btns = document.querySelectorAll('.s-features__demo');
  if (!tpl || !btns.length) return;
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const panel = btn.closest('.s-features__panel');
      const img = panel ? panel.querySelector('.s-features__img') : null;
      const node = tpl.cloneNode(true);
      node.hidden = false;
      if (img) {
        const popupImg = node.querySelector('.s-features-popup__img');
        popupImg.src = img.src;
        popupImg.alt = img.alt;
      }
      Fancybox.show([{ src: node, type: 'html' }], {
        Toolbar: false,
        Thumbs: false,
        closeButton: false,
        Carousel: { infinite: false },
      });
    });
  });
}

// ponytail: hover/click on a program block shows its matching content panel
function initProgramTabs() {
  const list = document.querySelector('.program__list');
  const panels = document.querySelectorAll('.program__panel');
  if (!list || !panels.length) return;
  const setActive = (item) => {
    list.querySelectorAll('.program__item').forEach((b) => {
      const on = b === item;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', String(on));
    });
    panels.forEach((p) => {
      const on = p.dataset.tab === item.dataset.tab;
      p.classList.toggle('is-active', on);
      p.setAttribute('aria-hidden', String(!on));
    });
  };
  list.querySelectorAll('.program__item').forEach((item) => {
    item.addEventListener('mouseenter', () => setActive(item));
    item.addEventListener('click', () => setActive(item));
  });
}

// ponytail: open the section video in a Fancybox popup
function initVideoPopup() {
  const plays = document.querySelectorAll('.video__player .video__play');
  if (!plays.length || typeof Fancybox === 'undefined') return;
  plays.forEach((play) => {
    play.addEventListener('click', () => {
      const src = play.dataset.videoSrc;
      if (!src) return;
      const videoHtml = `<video controls autoplay playsinline style="max-width:100%;max-height:80vh"><source src="${src}" type="video/mp4"></video>`;
      Fancybox.show([{ src: videoHtml, type: 'html' }], {
        Toolbar: false,
        Thumbs: false,
        closeButton: 'top',
        Carousel: { infinite: false }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initClientsMarquee();
  window.addEventListener('resize', initClientsMarquee);

  const clientsSwiper = initSwiper('.clients__swiper', {
    slidesPerView: 7.8,
    spaceBetween: 10,
    rewind: true,
    speed: 600,

  });

  const partnersSwiper = initSwiper('.partners__swiper', {
    slidesPerView: 4,
    spaceBetween: 10,
    rewind: true,
    speed: 600,
  });

  const projectsSwiper = initSwiper('.projects__swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    rewind: true,
    speed: 600,
  });

  const eventsSwiper = initSwiper('.events__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    rewind: true,
    speed: 600,
  });

  const eventsFeaturedSwiper = initSwiper('.events-featured__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 800,
    effect: 'slide',
  });

  const testimonialsSwiper = initSwiper('.testimonials__swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    rewind: true,
    speed: 600,
  });

  const gallerySwiper = initSwiper('.gallery__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    rewind: true,
    speed: 600,
  });

  const galleryDots = Array.from(document.querySelectorAll('.gallery__dot'));
  if (gallerySwiper && galleryDots.length) {
    const syncDots = () => {
      galleryDots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === gallerySwiper.realIndex);
        dot.setAttribute('aria-selected', String(i === gallerySwiper.realIndex));
      });
    };
    galleryDots.forEach((dot, i) => {
      dot.addEventListener('click', () => gallerySwiper.slideTo(i));
    });
    gallerySwiper.on('slideChange', syncDots);
    syncDots();
  }

  [
    ['.partners .carousel-nav', partnersSwiper],
    ['.projects .carousel-nav', projectsSwiper],
    ['.events .carousel-nav', eventsSwiper],
    ['.events-featured .carousel-nav', eventsFeaturedSwiper],
    ['.testimonials .carousel-nav', testimonialsSwiper],
    ['.gallery .carousel-nav', gallerySwiper],
  ].forEach(([selector, swiper]) => bindNav(selector, swiper));

  const tabs = document.querySelector('.tabs');
  if (tabs) {
    const panels = document.querySelectorAll('.s-features__panel');
    tabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.tabs__btn');
      if (!btn) return;
      tabs.querySelectorAll('.tabs__btn').forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      const idx = btn.dataset.tab;
      panels.forEach((p) => {
        const on = p.dataset.tab === idx;
        p.classList.toggle('is-active', on);
        p.setAttribute('aria-hidden', String(!on));
      });
    });
  }

  initAccordion('.s-tasks__list', 'is-open', '.s-tasks__q');
  initAccordion('.faq__list', 'is-open', '.faq__q');

  initClientsPage();
  initEventsPage();
  initDropdown();
  initDemoPopup();
  initVideoPopup();
  initProgramTabs();

  document.querySelectorAll('.s-tasks__item:first-child, .faq__item:first-child').forEach((el) => {
    el.classList.add('is-open');
    const b = el.querySelector('.s-tasks__q, .faq__q');
    if (b) b.setAttribute('aria-expanded', 'true');
  });
});