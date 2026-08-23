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

// ponytail: desktop = one screen-slide per 4 cards (grid), mobile = flat card slides
function initFactsSlider() {
  const root = document.querySelector('.projects--about');
  if (!root || root.dataset.factsInit) return;
  root.dataset.factsInit = '1';
  const swiperEl = root.querySelector('.facts__swiper');
  const wrapper = swiperEl.querySelector('.swiper-wrapper');
  const slides = Array.from(wrapper.children);
  const mq = window.matchMedia('(min-width: 768px)');
  let swiper = null;

  root.querySelectorAll('[data-scroll-prev]').forEach((b) =>
    b.addEventListener('click', () => swiper && swiper.slidePrev()));
  root.querySelectorAll('[data-scroll-next]').forEach((b) =>
    b.addEventListener('click', () => swiper && swiper.slideNext()));

  function build() {
    wrapper.innerHTML = '';
    if (mq.matches) {
      for (let i = 0; i < slides.length; i += 4) {
        const group = document.createElement('div');
        group.className = 'swiper-slide facts__screen';
        slides.slice(i, i + 4).forEach((s) => group.appendChild(s));
        wrapper.appendChild(group);
      }
    } else {
      slides.forEach((s) => wrapper.appendChild(s));
    }
    if (swiper) swiper.destroy(true, true);
    swiper = new Swiper(swiperEl, { slidesPerView: 1, spaceBetween: 10, speed: 600, rewind: true });
  }

  build();
  mq.addEventListener('change', build);
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
      el.offsetHeight;
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
  const cards = Array.from(grid.querySelectorAll('.clients__card'));
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

function initDropdown() {
  const bar = document.querySelector('.projects__filters');
  if (!bar) return;
  const dropdowns = Array.from(bar.querySelectorAll('.dropdown'));
  const chips = document.getElementById('projectsChips');
  const reset = document.getElementById('projectsReset');
  const allChecks = Array.from(bar.querySelectorAll('.dropdown__check'));
  const chipX = '<svg class="projects__chip-x" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';

  const grid = document.querySelector('.projects__grid, #eventsGrid');
  const cards = grid ? Array.from(grid.querySelectorAll('.projects__card, .events__card')) : [];
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
  const tpl = document.getElementById('features-popup');
  const btns = document.querySelectorAll('.features__demo');
  if (!tpl || !btns.length) return;
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const panel = btn.closest('.features__panel');
      const img = panel ? panel.querySelector('.features__img') : null;
      const node = tpl.cloneNode(true);
      node.hidden = false;
      if (img) {
        const popupImg = node.querySelector('.features-popup__img');
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

function closeMobileMenu(menu, burger) {
  menu.classList.remove('is-open');
  burger.classList.remove('is-open');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Открыть меню');
  document.body.classList.remove('menu-open');
  document.body.style.overflow = '';
}

function initMobileMenu() {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  if (!burger || !nav || document.querySelector('.mobile-menu')) return;

  const menu = document.createElement('nav');
  menu.className = 'mobile-menu';
  menu.setAttribute('aria-label', 'Мобильное меню');

  const inner = document.createElement('div');
  inner.className = 'container mobile-menu__inner';

  nav.querySelectorAll('.header__link').forEach((a) => {
    const clone = a.cloneNode(true);
    inner.appendChild(clone);
  });

  const phone = document.querySelector('.header .header__phone-num');
  if (phone) {
    const phoneClone = phone.cloneNode(true);
    phoneClone.className = 'mobile-menu__phone';
    inner.appendChild(phoneClone);
  }

  const cta = document.querySelector('.header .btn--primary');
  if (cta) {
    const ctaClone = cta.cloneNode(true);
    ctaClone.classList.add('mobile-menu__cta');
    inner.appendChild(ctaClone);
  }

  menu.appendChild(inner);
  document.body.appendChild(menu);

  burger.addEventListener('click', () => {
    const open = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', open);
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.addEventListener('click', (e) => {
    if (e.target === menu || e.target.closest('a')) closeMobileMenu(menu, burger);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && menu.classList.contains('is-open')) closeMobileMenu(menu, burger);
  });
}

function initContactsMap() {
  const el = document.getElementById('contacts-map');
  if (!el || typeof ymaps === 'undefined') return;
  ymaps.ready(() => {
    const center = [59.9320, 30.3515];
    const map = new ymaps.Map(el, { center, zoom: 16, controls: [] });
    const placemark = new ymaps.Placemark([59.9320, 30.3416], {}, {
      iconLayout: ymaps.templateLayoutFactory.createClass(
        '<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">' +
          '<path d="M25.5 0.288675C25.8094 0.110042 26.1906 0.110042 26.5 0.288675L48.0167 12.7113C48.3261 12.89 48.5167 13.2201 48.5167 13.5774V38.4226C48.5167 38.7799 48.3261 39.11 48.0167 39.2887L26.5 51.7113C26.1906 51.89 25.8094 51.89 25.5 51.7113L3.98334 39.2887C3.67394 39.11 3.48334 38.7799 3.48334 38.4226V13.5773C3.48334 13.2201 3.67394 12.89 3.98334 12.7113L25.5 0.288675Z" fill="#1342F3"/>' +
          '<circle cx="26" cy="26" r="4" fill="white"/>' +
        '</svg>'
      ),
      iconShape: { type: 'Rectangle', coordinates: [[0, 0], [52, 52]] },
      iconOffset: [-26, -52]
    });
    map.geoObjects.add(placemark);
    map.behaviors.disable('scrollZoom');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initClientsMarquee();
  initContactsMap();
  window.addEventListener('resize', initClientsMarquee);

  const clientsSwiper = initSwiper('.clients__swiper', {
    slidesPerView: 7.8,
    spaceBetween: 10,
    rewind: true,
    speed: 600,

  });

  const partnersSwiper = initSwiper('.partners__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    rewind: true,
    speed: 600,
    breakpoints: { 768: { slidesPerView: 4 } },
  });

  const projectsSwiper = initSwiper('.projects__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    rewind: true,
    speed: 600,
    breakpoints: { 768: { slidesPerView: 2 } },
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
    slidesPerView: 1.5,
    spaceBetween: 10,
    rewind: true,
    speed: 600,
    breakpoints: { 768: { slidesPerView: 3 } },
  });

  const gallerySwiper = initSwiper('.gallery__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    rewind: true,
    speed: 600,
  });

  initFactsSlider();

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
    const panels = document.querySelectorAll('.features__panel');
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

// Request popup: phone mask + Just-validate (validates on input)
function initRequestForm() {
  const form = document.getElementById('request-form');
  if (!form || typeof JustValidate === 'undefined') return;

  if (typeof Fancybox !== 'undefined') {
    Fancybox.bind('[data-fancybox]', { Toolbar: false, closeButton: false });
  }

  const phone = form.querySelector('.js-phone');
  const success = document.querySelector('#request-popup .modal-form__success');
  const head = document.querySelector('#request-popup .modal-form__head');

  if (phone) {
    phone.addEventListener('input', () => {
      let d = phone.value.replace(/\D/g, '');
      if (d.startsWith('8')) d = '7' + d.slice(1);
      if (d.startsWith('7')) d = d.slice(1);
      d = d.slice(0, 10);
      let out = '';
      if (d.length) out = '+7 (' + d.slice(0, 3);
      if (d.length > 3) out += ') ' + d.slice(3, 6);
      if (d.length > 6) out += '-' + d.slice(6, 8);
      if (d.length > 8) out += '-' + d.slice(8, 10);
      phone.value = out;
    });
  }

  const validator = new JustValidate(form, {
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    errorFieldStyle: {},
    errorLabelStyle: { display: 'none' },
    errorFieldCssClass: 'form-field--invalid',
  });

  validator
    .addField('.js-fio', [
      { rule: 'required' },
      { rule: 'minLength', value: 3 },
    ])
    .addField('.js-email', [
      { rule: 'required' },
      { rule: 'email' },
    ])
    .addField('.js-phone', [
      { rule: 'required' },
      {
        validator: () => phone && phone.value.replace(/\D/g, '').length === 11,
      },
    ])
    .addField('.js-consent', [{ rule: 'required' }]);

  validator.onSuccess(() => {
    if (head) head.classList.add('is-hidden');
    form.classList.add('is-hidden');
    if (success) success.classList.remove('is-hidden');
  });

  // reset form state when the popup closes
  document.addEventListener('fancybox:afterClose', () => {
    form.reset();
    form.classList.remove('is-hidden');
    if (head) head.classList.remove('is-hidden');
    if (success) success.classList.add('is-hidden');
    form.querySelectorAll('.form-field--invalid').forEach((el) => el.classList.remove('form-field--invalid'));
  });
}

  initAccordion('.tasks__list', 'is-open', '.tasks__q');
  initAccordion('.faq__list', 'is-open', '.faq__q');

  initClientsPage();
  initDropdown();
  initDemoPopup();
  initVideoPopup();
  initProgramTabs();
  initMobileMenu();
  initRequestForm();

  document.querySelectorAll('.tasks__item:first-child, .faq__item:first-child').forEach((el) => {
    el.classList.add('is-open');
    const b = el.querySelector('.tasks__q, .faq__q');
    if (b) b.setAttribute('aria-expanded', 'true');
  });
});

// ponytail: CSS `position: sticky` on .stages__head-col handles the floating left block natively