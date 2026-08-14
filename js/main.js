function initSwiper(selector, options) {
  const el = document.querySelector(selector);
  if (!el) return null;
  return new Swiper(el, options);
}

function bindNav(selector, swiper) {
  const nav = document.querySelector(selector);
  if (!nav || !swiper) return;
  const prev = nav.querySelector('[data-scroll-prev]');
  const next = nav.querySelector('[data-scroll-next]');
  if (prev) prev.addEventListener('click', () => swiper.slidePrev());
  if (next) next.addEventListener('click', () => swiper.slideNext());
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
const clientsData = [
  { name: 'РАНХиГС', cat: 'vuz', desc: 'Цифровизация процессов академии', logo: 'client-1.jpg', url: 'client-detail.html' },
  { name: 'СПбПУ', cat: 'vuz', desc: 'Корпоративный портал вуза', logo: 'client-2.jpg', url: 'https://spbpu.example.com' },
  { name: 'МГУ', cat: 'vuz', desc: 'Электронный документооборот', logo: 'client-3.jpg', url: 'https://msu.example.com' },
  { name: 'Минцифры', cat: 'gov', desc: 'Государственные сервисы', logo: 'client-4.jpg', url: 'https://minczifry.example.com' },
  { name: 'Росреестр', cat: 'gov', desc: 'Система согласований', logo: 'client-5.jpg', url: 'https://rosreestr.example.com' },
  { name: 'ФНС', cat: 'gov', desc: 'Интеграция ведомств', logo: 'client-6.png', url: 'https://fns.example.com' },
  { name: 'Газпром', cat: 'biz', desc: 'Управление проектами', logo: 'client-7.png', url: 'https://gazprom.example.com' },
  { name: 'Сбер', cat: 'biz', desc: 'КЭДО для сотрудников', logo: 'client-8.png', url: 'https://sber.example.com' },
  { name: 'РЖД', cat: 'biz', desc: 'Корпоративный портал', logo: 'client-9.png', url: 'https://rzd.example.com' },
  { name: 'Ростелеком', cat: 'biz', desc: 'Цифровые сервисы', logo: 'client-10.png', url: 'https://rostelecom.example.com' },
  { name: 'ИТМО', cat: 'vuz', desc: 'Платформа для вузов', logo: 'client-1.jpg', url: 'https://itmo.example.com' },
  { name: 'МФТИ', cat: 'vuz', desc: 'Учебные процессы', logo: 'client-2.jpg', url: 'https://mfti.example.com' },
  { name: 'Минобрнауки', cat: 'gov', desc: 'Отраслевая система', logo: 'client-3.jpg', url: 'https://minobrnauki.example.com' },
  { name: 'Росатом', cat: 'gov', desc: 'Документооборот', logo: 'client-4.jpg', url: 'https://rosatom.example.com' },
  { name: 'Лукойл', cat: 'biz', desc: 'Стратегия и проекты', logo: 'client-5.jpg', url: 'https://lukoil.example.com' },
  { name: 'X5 Group', cat: 'biz', desc: 'Внутренние коммуникации', logo: 'client-6.png', url: 'https://x5.example.com' },
];

function initClientsPage() {
  const grid = document.getElementById('clientsGrid');
  if (!grid) return;
  const STEP = 12;
  let visible = STEP;

  function cardHTML(c) {
    return `<a class="c-clients__card" href="${c.url}" target="_blank" rel="noopener" data-category="${c.cat}">
      <svg class="c-clients__icon" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true"><use href="#icon-arrow"/></svg>
      <div class="c-clients__body">
        <h3 class="c-clients__name">${c.name}</h3>
        <p class="c-clients__desc">${c.desc}</p>
      </div>
      <img class="c-clients__logo" src="assets/img/${c.logo}" alt="${c.name}" width="136" height="136">
    </a>`;
  }

  function render(filter) {
    const items = clientsData.filter((c) => filter === 'all' || c.cat === filter);
    grid.innerHTML = items.map(cardHTML).join('');
    Array.from(grid.children).forEach((el, i) => {
      if (i >= visible) el.classList.add('is-hidden');
    });
  }

  render('all');

  const filters = document.querySelectorAll('.c-filter');
  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      visible = STEP;
      render(btn.dataset.filter);
      updateMore();
    });
  });

  const more = document.getElementById('clientsShowMore');
  function updateMore() {
    if (!more) return;
    const active = document.querySelector('.c-filter.is-active');
    const total = clientsData.filter((c) => !active || active.dataset.filter === 'all' || c.cat === active.dataset.filter).length;
    more.style.display = visible < total ? '' : 'none';
  }
  if (more) {
    more.addEventListener('click', () => {
      visible = clientsData.length;
      Array.from(grid.children).forEach((el) => el.classList.remove('is-hidden'));
      updateMore();
    });
  }
  updateMore();
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

document.addEventListener('DOMContentLoaded', () => {
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

  const testimonialsSwiper = initSwiper('.testimonials__swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    rewind: true,
    speed: 600,
  });

  [
    ['.partners .carousel-nav', partnersSwiper],
    ['.projects .carousel-nav', projectsSwiper],
    ['.events .carousel-nav', eventsSwiper],
    ['.testimonials .carousel-nav', testimonialsSwiper],
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
  initDropdown();

  document.querySelectorAll('.s-tasks__item:first-child, .faq__item:first-child').forEach((el) => {
    el.classList.add('is-open');
    const b = el.querySelector('.s-tasks__q, .faq__q');
    if (b) b.setAttribute('aria-expanded', 'true');
  });
});