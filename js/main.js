// ponytail: duplicate track until >= 2x viewport (even count keeps the -50% loop seamless)
function initClientsMarquee() {
	const marquee = document.querySelector('.clients__marquee')
	const track = marquee && marquee.querySelector('.clients__track')
	if (!track) return
	const cells = Array.from(track.children)
	while (track.scrollWidth < marquee.clientWidth * 2) {
		cells.forEach(c => track.appendChild(c.cloneNode(true)))
	}
}
function initFloatingHeader() {
	const header = document.querySelector('.header--sticky')
	if (!header) return

	const SHOW_THRESHOLD = 100
	const HIDE_THRESHOLD = 50
	const DIRECTION_DELTA = 6

	const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
	let prefersReduced = motionQuery.matches
	motionQuery.addEventListener('change', e => {
		prefersReduced = e.matches
	})

	let lastScrollY = Math.max(0, window.scrollY)
	let ticking = false

	let isFloating = lastScrollY > SHOW_THRESHOLD
	let isVisible = true
	let accumulatedDelta = 0

	function updateHeader() {
		const scrollY = Math.max(0, window.scrollY)
		const deltaY = scrollY - lastScrollY

		// --- Шаг А: Управление режимом is-floating ---
		if (!isFloating && scrollY > SHOW_THRESHOLD) {
			isFloating = true

			// СРАЗУ определяем намерение пользователя
			if (deltaY > 0) {
				// Едем вниз — прячем шапку моментально, минуя фиксацию
				header.classList.add('is-floating', 'is-hiding')
				header.classList.remove('is-visible')
				isVisible = false
				accumulatedDelta = 0
			} else {
				// Появляемся (например, при программном скролле вверх)
				header.classList.add('is-floating', 'is-visible')
				header.classList.remove('is-hiding')
				isVisible = true
			}
		} else if (isFloating && scrollY < HIDE_THRESHOLD) {
			isFloating = false
			header.classList.remove('is-floating', 'is-visible', 'is-hiding')
			isVisible = true
			accumulatedDelta = 0
		}

		// --- Шаг Б: Управление видимостью (только в плавающем режиме) ---
		if (isFloating) {
			accumulatedDelta += deltaY

			if (Math.abs(accumulatedDelta) >= DIRECTION_DELTA) {
				const movingDown = accumulatedDelta > 0

				if (movingDown && isVisible) {
					header.classList.add('is-hiding')
					header.classList.remove('is-visible')
					isVisible = false
					accumulatedDelta = 0
				} else if (!movingDown && !isVisible) {
					header.classList.add('is-visible')
					header.classList.remove('is-hiding')
					isVisible = true
					accumulatedDelta = 0
				} else {
					// Едем в ту же сторону, куда шапка уже направлена.
					// Сбрасываем аккумулятор, чтобы избежать переполнения.
					accumulatedDelta = 0
				}
			}
		}

		lastScrollY = scrollY
		ticking = false
	}

	function onScroll() {
		if (!ticking) {
			if (prefersReduced) {
				updateHeader()
			} else {
				requestAnimationFrame(updateHeader)
				ticking = true
			}
		}
	}

	function initState() {
		const scrollY = Math.max(0, window.scrollY)
		isFloating = scrollY > SHOW_THRESHOLD
		isVisible = true // При загрузке страницы шапка всегда должна быть видна
		accumulatedDelta = 0

		header.classList.remove('is-floating', 'is-visible', 'is-hiding')
		if (isFloating) {
			header.classList.add('is-floating', 'is-visible')
		}
	}

	initState()
	window.addEventListener('scroll', onScroll, { passive: true })
	window.addEventListener('resize', initState)
}
function initSearchPopup() {
	const searchBtn = document.querySelector('.btn--search')
	const popup = document.getElementById('search-popup')
	const overlay = document.getElementById('search-overlay') // Теперь отдельный элемент
	const panel = popup?.querySelector('.search-popup__panel')
	const form = popup?.querySelector('.search-popup__form')
	const input = popup?.querySelector('.search-popup__input')
	const header = document.querySelector('.header')

	if (!searchBtn || !popup || !overlay || !form || !input) return

	const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
	let prefersReduced = motionQuery.matches
	motionQuery.addEventListener('change', e => {
		prefersReduced = e.matches
	})

	const TRANSITION_DURATION = 300
	let lastFocused = null

	function open() {
		lastFocused = document.activeElement

		// Если шапка скрыта скроллом — показываем её
		if (header && header.classList.contains('is-hiding')) {
			header.classList.remove('is-hiding')
			header.classList.add('is-visible')
		}

		// Блокируем скролл страницы
		document.body.style.overflow = 'hidden'
		document.body.classList.add('is-search-open')

		popup.hidden = false

		// Двойной rAF для корректной работы transition
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				popup.classList.add('is-open')
				overlay.classList.add('is-open')
				input.focus({ preventScroll: true })
			})
		})

		document.addEventListener('keydown', onKeydown)
	}

	function close() {
		popup.classList.remove('is-open')
		overlay.classList.remove('is-open')

		const duration = prefersReduced ? 0 : TRANSITION_DURATION
		setTimeout(() => {
			popup.hidden = true
			document.body.classList.remove('is-search-open')
			document.body.style.overflow = ''
		}, duration)

		if (lastFocused) lastFocused.focus()
		document.removeEventListener('keydown', onKeydown)
	}

	function onKeydown(e) {
		if (e.key === 'Escape') close()
	}

	searchBtn.addEventListener('click', open)
	overlay.addEventListener('click', close)

	form.addEventListener('submit', e => {
		e.preventDefault()
		const query = input.value.trim()
		if (query) {
			window.location.href = `/search?q=${encodeURIComponent(query)}`
		}
	})

	// Отключаем анимации только если пользователь явно включил уменьшенное движение
	if (prefersReduced) {
		popup.style.transition = 'none'
		overlay.style.transition = 'none'
		if (panel) panel.style.transition = 'none'
	}
}

function initSwiper(selector, options) {
	if (typeof Swiper === 'undefined') return null
	const el = document.querySelector(selector)
	if (!el) return null
	return new Swiper(el, options)
}

function bindNav(selector, swiper) {
	const navs = document.querySelectorAll(selector)
	if (!navs.length || !swiper) return
	navs.forEach(nav => {
		// ponytail: пропускаем клоны nav внутри .swiper-slide-duplicate (loop-слайды Swiper),
		// чтобы обработчики не дублировались на скрытых копиях
		if (nav.closest('.swiper-slide-duplicate')) return
		const prev = nav.querySelector('[data-scroll-prev]')
		const next = nav.querySelector('[data-scroll-next]')
		if (prev) prev.addEventListener('click', () => swiper.slidePrev())
		if (next) next.addEventListener('click', () => swiper.slideNext())
	})
}

// ponytail: desktop = one screen-slide per 4 cards (grid), mobile = flat card slides
function initFactsSlider() {
	const root = document.querySelector('.projects--about')
	const swiperEl = root && root.querySelector('.facts__swiper')
	if (!root || !swiperEl || root.dataset.factsInit || typeof Swiper === 'undefined') return
	root.dataset.factsInit = '1'
	const wrapper = swiperEl.querySelector('.swiper-wrapper')
	const slides = Array.from(wrapper.children)
	const mq = window.matchMedia('(min-width: 768px)')
	let swiper = null

	root.querySelectorAll('[data-scroll-prev]').forEach(b => b.addEventListener('click', () => swiper && swiper.slidePrev()))
	root.querySelectorAll('[data-scroll-next]').forEach(b => b.addEventListener('click', () => swiper && swiper.slideNext()))

	function build() {
		wrapper.innerHTML = ''
		if (mq.matches) {
			for (let i = 0; i < slides.length; i += 4) {
				const group = document.createElement('div')
				group.className = 'swiper-slide facts__screen'
				slides.slice(i, i + 4).forEach(s => group.appendChild(s))
				wrapper.appendChild(group)
			}
		} else {
			slides.forEach(s => wrapper.appendChild(s))
		}
		if (swiper) swiper.destroy(true, true)
		swiper = new Swiper(swiperEl, { slidesPerView: 'auto', spaceBetween: 10, speed: 600, loop: true })
	}

	build()
	mq.addEventListener('change', build)
}

function initAccordion(listSelector, openClass, buttonSelector) {
	const list = document.querySelector(listSelector)
	if (!list) return
	list.addEventListener('click', e => {
		const btn = e.target.closest(buttonSelector)
		if (!btn) return
		const item = btn.closest('li, .faq__item')
		if (!item) return
		const isOpen = item.classList.contains(openClass)
		list.querySelectorAll(`.${openClass}`).forEach(el => {
			el.classList.remove(openClass)
			el.offsetHeight
			const b = el.querySelector(buttonSelector)
			if (b) b.setAttribute('aria-expanded', 'false')
		})
		if (!isOpen) {
			item.classList.add(openClass)
			btn.setAttribute('aria-expanded', 'true')
		}
	})
}

// ponytail: placeholder client data — replace with CSV/fetch from real source (url = partner website)
function initClientsPage() {
	const grid = document.getElementById('clientsGrid')
	if (!grid) return
	const cards = Array.from(grid.querySelectorAll('.clients__card'))
	const filters = document.querySelectorAll('.tab-filter')
	const more = document.getElementById('clientsMore')
	const moreBtn = document.getElementById('clientsShowMore')
	const INITIAL = 16
	let revealed = false

	const apply = () => {
		const active = document.querySelector('.tab-filter.is-active')
		const filter = active ? active.dataset.filter : 'all'
		let shown = 0
		cards.forEach(card => {
			const on = filter === 'all' || card.dataset.category === filter
			card.classList.toggle('is-hidden', !on || (on && !revealed && shown >= INITIAL))
			if (on) shown++
		})
		const total = cards.filter(c => filter === 'all' || c.dataset.category === filter).length
		if (more) more.hidden = revealed || total <= INITIAL
	}

	filters.forEach(btn => {
		btn.addEventListener('click', () => {
			filters.forEach(b => b.classList.remove('is-active'))
			btn.classList.add('is-active')
			revealed = false
			apply()
		})
	})

	if (moreBtn) {
		moreBtn.addEventListener('click', () => {
			revealed = true
			apply()
		})
	}

	apply()
}

function initDropdown() {
	const bar = document.querySelector('.projects__filters')
	if (!bar) return
	const dropdowns = Array.from(bar.querySelectorAll('.dropdown'))
	const chips = document.getElementById('projectsChips')
	const reset = document.getElementById('projectsReset')
	const allChecks = Array.from(bar.querySelectorAll('.dropdown__check'))
	const chipX = '<svg class="projects__chip-x" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'

	const grid = document.querySelector('.projects__grid, #eventsGrid')
	const cards = grid ? Array.from(grid.querySelectorAll('.projects__card, .events__card')) : []
	const empty = document.getElementById('projectsEmpty')
	const more = document.getElementById('projectsMore')
	const moreBtn = document.getElementById('projectsShowMore')
	// ponytail: шаг подгрузки равен числу карточек в строке — projects.html (3 в ряд) → 2, events.html (4 в ряд) → 4
	const STEP = grid && grid.id === 'eventsGrid' ? 4 : 2
	let visible = 4
	let lastMatched = 0

	const filtersToggle = document.querySelector('.projects__filters-toggle')
	const filtersCount = document.querySelector('.projects__filters-count')
	const filtersClose = document.querySelector('.projects__filters-close')
	const applyBtn = document.getElementById('projectsApply')
	const filterbar = document.querySelector('.projects__filterbar')

	const setFiltersOpen = open => {
		bar.classList.toggle('is-filters-open', open)
		if (filtersToggle) filtersToggle.setAttribute('aria-expanded', String(open))
		if (window.innerWidth <= 768) {
			// ponytail: в шторке группы фильтров раскрыты всегда — details открываются вместе с ней
			dropdowns.forEach(dd => {
				dd.open = open
			})
			document.body.style.overflow = open ? 'hidden' : ''
		}
	}

	if (filtersToggle && filterbar) {
		filtersToggle.addEventListener('click', () => {
			setFiltersOpen(!bar.classList.contains('is-filters-open'))
		})
		document.addEventListener('click', e => {
			if (!filterbar.contains(e.target)) setFiltersOpen(false)
		})
	}

	if (filtersClose) filtersClose.addEventListener('click', () => setFiltersOpen(false))
	if (applyBtn) applyBtn.addEventListener('click', () => setFiltersOpen(false))

	const renderChips = () => {
		chips.innerHTML = ''
		allChecks.forEach(c => {
			if (!c.checked) return
			const text = c.closest('.dropdown__option').textContent.trim()
			const btn = document.createElement('button')
			btn.type = 'button'
			btn.className = 'projects__chip'
			btn.setAttribute('aria-label', `Убрать фильтр: ${text}`)
			btn.innerHTML = `<span>${text}</span>${chipX}`
			btn.addEventListener('click', () => {
				c.checked = false
				sync()
			})
			chips.appendChild(btn)
		})
	}

	const applyFilter = () => {
		const active = {}
		dropdowns.forEach(dd => {
			const checked = Array.from(dd.querySelectorAll('.dropdown__check:checked')).map(c => c.value)
			if (checked.length) active[dd.dataset.filter] = new Set(checked)
		})
		let matched = 0
		cards.forEach(card => {
			let show = true
			for (const [grp, set] of Object.entries(active)) {
				const vals = (card.dataset[grp] || '').split(/\s+/).filter(Boolean)
				if (!vals.some(v => set.has(v))) {
					show = false
					break
				}
			}
			card.classList.toggle('is-matched', show)
			if (!show) {
				card.hidden = true
				return
			}
			matched++
			card.hidden = matched > visible
		})
		lastMatched = matched
		empty.hidden = matched > 0
		updateMore()
	}

	const updateMore = () => {
		if (more) more.hidden = lastMatched <= visible
	}

	const reveal = els => {
		els.forEach((el, i) => {
			el.classList.remove('card-appear')
			void el.offsetWidth
			el.style.animationDelay = `${i * 80}ms`
			el.classList.add('card-appear')
		})
	}

	if (moreBtn) {
		moreBtn.addEventListener('click', () => {
			const hidden = cards.filter(c => c.classList.contains('is-matched') && c.hidden)
			visible += STEP
			applyFilter()
			reveal(hidden)
		})
	}

	const sync = () => {
		let total = 0
		dropdowns.forEach(dd => {
			const checks = dd.querySelectorAll('.dropdown__check')
			const n = Array.from(checks).filter(c => c.checked).length
			const badge = dd.querySelector('.dropdown__count')
			badge.textContent = n
			badge.classList.toggle('is-hidden', n === 0)
			total += n
		})
		renderChips()
		applyFilter()
		reset.classList.toggle('is-hidden', total === 0)
		if (filtersCount) {
			filtersCount.textContent = total
			filtersCount.classList.toggle('is-hidden', total === 0)
		}
		if (applyBtn) applyBtn.textContent = 'Показать ' + total
	}

	allChecks.forEach(c => c.addEventListener('change', sync))
	reset.addEventListener('click', () => {
		allChecks.forEach(c => (c.checked = false))
		sync()
	})
	document.addEventListener('click', e => {
		if (window.innerWidth <= 768 && bar.classList.contains('is-filters-open')) return
		dropdowns.forEach(dd => {
			if (dd.open && !dd.contains(e.target)) dd.open = false
		})
	})
	dropdowns.forEach(dd =>
		dd.addEventListener('keydown', e => {
			if (e.key === 'Escape') dd.open = false
		}),
	)
	sync()
}

// ponytail: one popup template, cloned per click; src filled from the tab's screenshot
function initDemoPopup() {
	const tpl = document.getElementById('features-popup')
	const btns = document.querySelectorAll('.features__demo')
	if (!tpl || !btns.length || typeof Fancybox === 'undefined') return
	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			const panel = btn.closest('.features__panel')
			const img = panel ? panel.querySelector('.features__img') : null
			const node = tpl.cloneNode(true)
			node.hidden = false
			if (img) {
				const popupImg = node.querySelector('.features-popup__img')
				popupImg.src = img.src
				popupImg.alt = img.alt
			}
			Fancybox.show([{ src: node, type: 'html' }], {
				Toolbar: false,
				Thumbs: false,
				closeButton: false,
				Carousel: { infinite: false },
			})
		})
	})
}

// ponytail: hover/click on a program block shows its matching content panel
function initProgramTabs() {
	const list = document.querySelector('.program__list')
	const panels = document.querySelectorAll('.program__panel')
	if (!list || !panels.length) return
	const setActive = item => {
		list.querySelectorAll('.program__item').forEach(b => {
			const on = b === item
			b.classList.toggle('is-active', on)
			b.setAttribute('aria-selected', String(on))
		})
		panels.forEach(p => {
			const on = p.dataset.tab === item.dataset.tab
			p.classList.toggle('is-active', on)
			p.setAttribute('aria-hidden', String(!on))
		})
	}
	list.querySelectorAll('.program__item').forEach(item => {
		item.addEventListener('mouseenter', () => setActive(item))
		item.addEventListener('click', () => setActive(item))
	})
}

// ponytail: open the section video in a Fancybox popup
function initVideoPopup() {
	const plays = document.querySelectorAll('.video__player .video__play')
	if (!plays.length || typeof Fancybox === 'undefined') return
	plays.forEach(play => {
		play.addEventListener('click', () => {
			const src = play.dataset.videoSrc
			if (!src) return
			const videoHtml = `<video controls autoplay playsinline style="max-width:100%;max-height:80vh"><source src="${src}" type="video/mp4"></video>`
			Fancybox.show([{ src: videoHtml, type: 'html' }], {
				Toolbar: false,
				Thumbs: false,
				closeButton: 'top',
				Carousel: { infinite: false },
			})
		})
	})
}

function closeMobileMenu(menu, burger) {
	menu.classList.remove('is-open')
	burger.classList.remove('is-open')
	burger.setAttribute('aria-expanded', 'false')
	burger.setAttribute('aria-label', 'Открыть меню')
	document.body.classList.remove('menu-open')
	document.body.style.overflow = ''
}

function initMobileMenu() {
	const burger = document.querySelector('.header__burger')
	const nav = document.querySelector('.header__nav')
	if (!burger || !nav || document.querySelector('.mobile-menu')) return

	const menu = document.createElement('nav')
	menu.className = 'mobile-menu'
	menu.setAttribute('aria-label', 'Мобильное меню')

	const inner = document.createElement('div')
	inner.className = 'container mobile-menu__inner'

	const list = document.createElement('div')
	list.className = 'mobile-menu__list'

	nav.querySelectorAll('.header__nav-item').forEach(item => {
		const link = item.querySelector('.header__link')
		const panel = item.querySelector('.header__dropdown-panel')
		if (!panel) {
			if (link.getAttribute('href') === 'contacts.html') return
			list.appendChild(link.cloneNode(true))
			return
		}
		const group = document.createElement('div')
		group.className = 'mobile-menu__group'
		group.appendChild(link.cloneNode(true))
		const sub = document.createElement('div')
		sub.className = 'mobile-menu__sub'
		panel.querySelectorAll('.header__dropdown-link').forEach(l => sub.appendChild(l.cloneNode(true)))
		group.appendChild(sub)
		list.appendChild(group)
	})

	inner.appendChild(list)

	list.querySelectorAll('.mobile-menu__group').forEach(g => g.classList.add('is-open'))

	const phoneWrap = document.querySelector('.header .header__phone')
	if (phoneWrap) {
		const contacts = document.createElement('div')
		contacts.className = 'mobile-menu__contacts'
		const label = phoneWrap.querySelector('.header__phone-label')
		const num = phoneWrap.querySelector('.header__phone-num')
		if (label) contacts.appendChild(label.cloneNode(true))
		if (num) contacts.appendChild(num.cloneNode(true))
		inner.appendChild(contacts)
	}

	const cta = document.querySelector('.header .btn--primary')
	if (cta) {
		const ctaClone = cta.cloneNode(true)
		ctaClone.classList.add('mobile-menu__cta')
		inner.appendChild(ctaClone)
	}

	menu.appendChild(inner)
	document.body.appendChild(menu)

	burger.addEventListener('click', () => {
		const open = !menu.classList.contains('is-open')
		menu.classList.toggle('is-open', open)
		burger.classList.toggle('is-open', open)
		burger.setAttribute('aria-expanded', String(open))
		burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню')
		document.body.classList.toggle('menu-open', open)
		document.body.style.overflow = open ? 'hidden' : ''
	})

	menu.addEventListener('click', e => {
		if (e.target === menu) {
			closeMobileMenu(menu, burger)
			return
		}
		const groupLink = e.target.closest('.mobile-menu__group > .header__link')
		if (groupLink) {
			e.preventDefault()
			groupLink.parentElement.classList.toggle('is-open')
			return
		}
		if (e.target.closest('a')) closeMobileMenu(menu, burger)
	})

	window.addEventListener('resize', () => {
		if (window.innerWidth > 1024 && menu.classList.contains('is-open')) closeMobileMenu(menu, burger)
	})
}

function initContactsMap() {
	const el = document.getElementById('contacts-map')
	if (!el || typeof ymaps === 'undefined') return
	ymaps.ready(() => {
		// На мобильных карта стоит отдельным блоком — точка в центре, зум меньше
		const isMobile = window.matchMedia('(max-width: 767px)').matches
		const placemarkCoords = [59.932, 30.3416]
		const center = isMobile ? placemarkCoords : [59.932, 30.3515]
		const map = new ymaps.Map(el, { center, zoom: isMobile ? 15 : 16, controls: [] })
		const placemark = new ymaps.Placemark(
			placemarkCoords,
			{},
			{
				iconLayout: ymaps.templateLayoutFactory.createClass(
					'<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">' +
						'<path d="M25.5 0.288675C25.8094 0.110042 26.1906 0.110042 26.5 0.288675L48.0167 12.7113C48.3261 12.89 48.5167 13.2201 48.5167 13.5774V38.4226C48.5167 38.7799 48.3261 39.11 48.0167 39.2887L26.5 51.7113C26.1906 51.89 25.8094 51.89 25.5 51.7113L3.98334 39.2887C3.67394 39.11 3.48334 38.7799 3.48334 38.4226V13.5773C3.48334 13.2201 3.67394 12.89 3.98334 12.7113L25.5 0.288675Z" fill="#1342F3"/>' +
						'<circle cx="26" cy="26" r="4" fill="white"/>' +
						'</svg>',
				),
				iconShape: {
					type: 'Rectangle',
					coordinates: [
						[0, 0],
						[52, 52],
					],
				},
				iconOffset: [-26, -52],
			},
		)
		map.geoObjects.add(placemark)
		map.behaviors.disable('scrollZoom')
	})
}

function initCookieBanner() {
	const banner = document.getElementById('cookie-banner')
	if (!banner) return
	if (!sessionStorage.getItem('cookieConsent')) banner.hidden = false
	const accept = banner.querySelector('[data-cookie-accept]')
	if (accept) {
		accept.addEventListener('click', () => {
			sessionStorage.setItem('cookieConsent', '1')
			banner.hidden = true
		})
	}
}

document.addEventListener('DOMContentLoaded', () => {
	initFloatingHeader()
	initSearchPopup()
	initClientsMarquee()
	initContactsMap()
	window.addEventListener('resize', initClientsMarquee)

	if (typeof AOS !== 'undefined') {
		AOS.init({
			duration: 700,
			once: true,
			offset: 80,
			easing: 'ease-out-cubic',
		})
	}

	const clientsSwiper = initSwiper('.clients__swiper', {
		slidesPerView: 7.8,
		spaceBetween: 10,
		loop: true,
		speed: 600,
	})

	const partnersSwiper = initSwiper('.partners__swiper', {
		slidesPerView: 1.1,
		spaceBetween: 10,
		loop: true,
		speed: 600,
		breakpoints: { 768: { slidesPerView: 4 } },
	})

	const projectsSwiper = initSwiper('.projects__swiper', {
		slidesPerView: 1.1,
		spaceBetween: 10,
		loop: true,
		speed: 600,
		breakpoints: { 768: { slidesPerView: 2 } },
	})

	const eventsSwiper = initSwiper('.events__swiper', {
		slidesPerView: 1.1,
		spaceBetween: 10,
		loop: true,
		speed: 600,
		breakpoints: { 768: { slidesPerView: 'auto' } },
	})
	// ponytail: events-featured — синхронизированная пара слайдеров через Controller
	// Без loop, чтобы кнопки навигации получали класс disabled на краях.
	// Листание только стрелками, свайпы отключены.

	const eventsFeaturedMediaSwiper = initSwiper('.events-featured__media-swiper', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: false,
		speed: 800,
		effect: 'slide',
		allowTouchMove: false,
		watchOverflow: true, // Скрывает кнопки, если слайдов <= 1
	})

	const eventsFeaturedTextSwiper = initSwiper('.events-featured__text-swiper', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: false,
		speed: 800,
		effect: 'slide',
		allowTouchMove: false,
		watchOverflow: true,
		controller: {
			control: eventsFeaturedMediaSwiper,
			by: 'slide',
			inverse: false,
		},
		navigation: {
			nextEl: '.events-featured__nav [data-scroll-next]',
			prevEl: '.events-featured__nav [data-scroll-prev]',
			disabledClass: 'is-disabled', // Класс для кнопок на краях
		},
	})

	const eventsFeaturedSwiper = eventsFeaturedTextSwiper

	const testimonialsSwiper = initSwiper('.testimonials__swiper', {
		slidesPerView: 1.1,
		spaceBetween: 10,
		loop: true,
		speed: 600,
		breakpoints: { 768: { slidesPerView: 3 } },
	})

	// doc.html: .testimonials__cards — сетка 2x1 на десктопе (через CSS),
	// горизонтальный Swiper-свайпер на мобиле. На ≥768 Swiper не должен ломать
	// CSS-grid, поэтому slidesPerView: 'auto' + spaceBetween: 0.
	initSwiper('.testimonials__cards', {
		slidesPerView: 1.1,
		spaceBetween: 10,
		loop: true,
		speed: 600,
		breakpoints: { 768: { slidesPerView: 'auto', spaceBetween: 0 } },
	})

	const gallerySwiper = initSwiper('.gallery__swiper', {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		speed: 600,
		breakpoints: { 768: { slidesPerView: 1 } },
	})

	const eventPartnersSwiper = initSwiper('.event-partners__swiper', {
		slidesPerView: 1.1,
		spaceBetween: 10,
		loop: true,
		speed: 600,
		breakpoints: { 768: { slidesPerView: 3 } },
	})

	initFactsSlider()

	const galleryDots = Array.from(document.querySelectorAll('.gallery__dot'))
	if (gallerySwiper && galleryDots.length) {
		const syncDots = () => {
			galleryDots.forEach((dot, i) => {
				dot.classList.toggle('is-active', i === gallerySwiper.realIndex)
				dot.setAttribute('aria-selected', String(i === gallerySwiper.realIndex))
			})
		}
		galleryDots.forEach((dot, i) => {
			dot.addEventListener('click', () => gallerySwiper.slideTo(i))
		})
		gallerySwiper.on('slideChange', syncDots)
		syncDots()
	}

	;[
		['.partners .carousel-nav', partnersSwiper],
		['.projects .carousel-nav', projectsSwiper],
		['.events .carousel-nav', eventsSwiper],
		['.events-featured .carousel-nav', eventsFeaturedSwiper],
		['.testimonials .carousel-nav', testimonialsSwiper],
		['.gallery .carousel-nav', gallerySwiper],
	].forEach(([selector, swiper]) => bindNav(selector, swiper))

	const tabs = document.querySelector('.tabs')
	if (tabs) {
		const panels = document.querySelectorAll('.features__panel')
		tabs.addEventListener('click', e => {
			const btn = e.target.closest('.tabs__btn')
			if (!btn) return
			tabs.querySelectorAll('.tabs__btn').forEach(b => {
				b.classList.remove('is-active')
				b.setAttribute('aria-selected', 'false')
			})
			btn.classList.add('is-active')
			btn.setAttribute('aria-selected', 'true')
			const idx = btn.dataset.tab
			panels.forEach(p => {
				const on = p.dataset.tab === idx
				p.classList.toggle('is-active', on)
				p.setAttribute('aria-hidden', String(!on))
			})
		})
	}

	// Form popups (#request-popup, #subscribe-popup): phone mask + Just-validate +
	// body→success swap + per-popup reset on Fancybox close.
	function bindFormPopup(popupId, formId, configure) {
		const popup = document.getElementById(popupId)
		const form = document.getElementById(formId)
		if (!popup || !form || typeof JustValidate === 'undefined') return

		const success = popup.querySelector('.modal-form__success')
		const head = popup.querySelector('.modal-form__head')

		const resetState = () => {
			form.reset()
			form.classList.remove('is-hidden')
			if (head) head.classList.remove('is-hidden')
			if (success) success.classList.add('is-hidden')
			form.querySelectorAll('.form-field--invalid').forEach(el => el.classList.remove('form-field--invalid'))
		}

		const showSuccess = () => {
			if (head) head.classList.add('is-hidden')
			form.classList.add('is-hidden')
			if (success) success.classList.remove('is-hidden')
		}

		configure({ form, showSuccess, resetState })

		// Reset state once the popup closes. Fancybox 5 doesn't expose a global
		// event bus and `data-fancybox-close` lives inside the cloned container
		// (not the source). We delegate two paths that always fire on close:
		//   1) ESC keydown on the document while the popup is open
		//   2) click on any `[data-fancybox-close]` (X-button, "Хорошо") — these
		//      are global, Fancybox recognises them via its own delegated handler.
		// The reset runs once the Fancybox container is fully torn down, which we
		// observe via MutationObserver. After firing we re-arm the observer so
		// the popup can be reopened cleanly.
		const armObserver = () => {
			if (typeof MutationObserver === 'undefined') return
			const observer = new MutationObserver(() => {
				const container = document.querySelector('.fancybox__container')
				const closed = !container || !document.body.contains(container) || container.classList.contains('fancybox__container--hidden')
				if (closed) {
					resetState()
					observer.disconnect()
				}
			})
			observer.observe(document.body, { childList: true, subtree: true })
		}
		armObserver()
		document.addEventListener('keydown', e => {
			if (e.key !== 'Escape') return
			const container = document.querySelector('.fancybox__container')
			if (container) resetState()
		})
		// Re-arm observer after every successful submit so the next open/close
		// cycle also resets correctly.
		form.addEventListener('submit', armObserver, true)
	}

	// Request popup: phone mask + Just-validate (validates on input)
	function initRequestForm() {
		if (typeof Fancybox !== 'undefined') {
			Fancybox.bind('[data-fancybox]', { Toolbar: false, closeButton: false })
		}

		bindFormPopup('request-popup', 'request-form', ({ form, showSuccess }) => {
			const phone = form.querySelector('.js-phone')

			if (phone) {
				phone.addEventListener('input', () => {
					let d = phone.value.replace(/\D/g, '')
					if (d.startsWith('8')) d = '7' + d.slice(1)
					if (d.startsWith('7')) d = d.slice(1)
					d = d.slice(0, 10)
					let out = ''
					if (d.length) out = '+7 (' + d.slice(0, 3)
					if (d.length > 3) out += ') ' + d.slice(3, 6)
					if (d.length > 6) out += '-' + d.slice(6, 8)
					if (d.length > 8) out += '-' + d.slice(8, 10)
					phone.value = out
				})
			}

			const validator = new JustValidate(form, {
				validateOnBlur: true,
				validateOnChange: true,
				validateOnInput: true,
				errorFieldStyle: {},
				errorLabelStyle: { display: 'none' },
				errorFieldCssClass: 'form-field--invalid',
			})

			validator
				.addField('.js-position', [{ rule: 'required' }, { rule: 'minLength', value: 3 }])
				.addField('.js-fio', [{ rule: 'required' }, { rule: 'minLength', value: 3 }])
				.addField('.js-email', [{ rule: 'required' }, { rule: 'email' }])
				.addField('.js-phone', [
					{ rule: 'required' },
					{
						validator: () => phone && phone.value.replace(/\D/g, '').length === 11,
					},
				])
				.addField('.js-consent', [{ rule: 'required' }])

			validator.onSuccess(() => showSuccess())
		})
	}

	// Subscribe popup: email + consent, success swap
	function initSubscribeForm() {
		bindFormPopup('subscribe-popup', 'subscribe-form', ({ form, showSuccess }) => {
			const validator = new JustValidate(form, {
				validateOnBlur: true,
				validateOnChange: true,
				validateOnInput: true,
				errorFieldStyle: {},
				errorLabelStyle: { display: 'none' },
				errorFieldCssClass: 'form-field--invalid',
			})

			validator.addField('.js-email', [{ rule: 'required' }, { rule: 'email' }]).addField('.js-consent', [{ rule: 'required' }])

			validator.onSuccess(() => showSuccess())
		})
	}

	// History timeline (about.html): переключение текста + изображения по клику на год + плавный fade
	function initHistoryTimeline() {
		const section = document.querySelector('.history')
		if (!section) return

		const years = Array.from(section.querySelectorAll('.history__year'))
		const cards = Array.from(section.querySelectorAll('.history__card'))
		const images = Array.from(section.querySelectorAll('.history__img'))
		if (!years.length || !cards.length || !images.length) return

		let isAnimating = false

		const activate = (year, withAnimation = true) => {
			if (!year || isAnimating) return
			const targetCard = cards.find(c => c.dataset.year === year)
			const targetImg = images.find(i => i.dataset.year === year)
			if (!targetCard || !targetImg) return
			const currentCard = cards.find(c => c.classList.contains('is-active'))
			const currentImg = images.find(i => i.classList.contains('is-active'))

			if (currentCard === targetCard) {
				years.forEach(y => {
					const active = y.dataset.year === year
					y.classList.toggle('is-active', active)
					y.setAttribute('aria-selected', active ? 'true' : 'false')
				})
				return
			}

			if (!withAnimation) {
				currentCard && currentCard.classList.remove('is-active')
				currentImg && currentImg.classList.remove('is-active')
				targetCard.classList.add('is-active')
				targetImg.classList.add('is-active')
				years.forEach(y => {
					const active = y.dataset.year === year
					y.classList.toggle('is-active', active)
					y.setAttribute('aria-selected', active ? 'true' : 'false')
				})
				return
			}

			isAnimating = true
			currentCard && currentCard.classList.remove('is-active')
			currentImg && currentImg.classList.remove('is-active')

			requestAnimationFrame(() => {
				targetCard.classList.add('is-active')
				targetImg.classList.add('is-active')
				years.forEach(y => {
					const active = y.dataset.year === year
					y.classList.toggle('is-active', active)
					y.setAttribute('aria-selected', active ? 'true' : 'false')
				})
				const onEnd = e => {
					if (e.propertyName !== 'opacity') return
					targetCard.removeEventListener('transitionend', onEnd)
					targetImg.removeEventListener('transitionend', onEnd)
					isAnimating = false
				}
				targetCard.addEventListener('transitionend', onEnd)
				targetImg.addEventListener('transitionend', onEnd)
				setTimeout(() => {
					isAnimating = false
				}, 500)
			})
		}

		years.forEach(btn => {
			btn.addEventListener('click', () => activate(btn.dataset.year))
			btn.addEventListener('keydown', e => {
				if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
				e.preventDefault()
				const i = years.indexOf(btn)
				const next = e.key === 'ArrowRight' ? years[(i + 1) % years.length] : years[(i - 1 + years.length) % years.length]
				next.focus()
				activate(next.dataset.year)
			})
		})

		const initial = cards.find(c => c.classList.contains('is-active')) || cards[0]
		activate(initial.dataset.year, false)
	}

	// ponytail: catalog cards are links on desktop, accordion items on mobile (Figma 1742:13167)
	function initCatalogAccordion() {
		const list = document.querySelector('.catalog__list')
		if (!list) return
		const first = list.querySelector('.catalog__card')
		if (first) first.classList.add('is-open')
		list.addEventListener('click', e => {
			if (window.innerWidth > 768) return
			const card = e.target.closest('.catalog__card')
			if (!card) return
			e.preventDefault()
			card.classList.toggle('is-open')
		})
	}

	// ponytail: eco-cards are a diagram on desktop, stacked accordion on mobile (Figma 403:77227)
	function initEcoAccordion() {
		const list = document.querySelector('.ecosystem__diagram')
		if (!list) return
		const cards = list.querySelectorAll('.eco-card')
		if (cards.length) cards[cards.length - 1].classList.add('is-open')
		list.addEventListener('click', e => {
			if (window.innerWidth > 768) return
			const card = e.target.closest('.eco-card')
			if (!card) return
			const isOpen = card.classList.contains('is-open')
			list.querySelectorAll('.eco-card.is-open').forEach(c => c.classList.remove('is-open'))
			if (!isOpen) card.classList.add('is-open')
		})
	}

	// Lines from the core to each eco-card icon.
	// Desktop-only: 6 dashed lines (SVG stroke-dasharray — no CSS dotted/border).
	// Position is computed from getBoundingClientRect so it stays correct when
	// text wraps or the layout rescales at 1280/1024.
	function initEcoLines() {
		const diagram = document.querySelector('.ecosystem__diagram')
		const core = diagram && diagram.querySelector('.ecosystem__core')
		if (!core) return

		let svg = diagram.querySelector('.ecosystem__lines')
		if (!svg) {
			svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
			svg.setAttribute('class', 'ecosystem__lines')
			svg.setAttribute('aria-hidden', 'true')
			diagram.prepend(svg)
		}
		const NS = 'http://www.w3.org/2000/svg'
		const dash = '5 7' // dashed rhythm — set on the SVG stroke, not CSS dotted
		const dotGap = 9 // gap before the icon so the line does not touch it
		const iconRadius = 32 // .eco-card__icon is 4rem wide

		function draw() {
			const diaRect = diagram.getBoundingClientRect()
			if (diaRect.width < 2 || diaRect.height < 2) return
			const coreRect = core.getBoundingClientRect()
			const cx = coreRect.left - diaRect.left + coreRect.width / 2
			const cy = coreRect.top - diaRect.top + coreRect.height / 2

			svg.setAttribute('viewBox', '0 0 ' + diaRect.width + ' ' + diaRect.height)
			svg.setAttribute('width', diaRect.width)
			svg.setAttribute('height', diaRect.height)
			svg.setAttribute('preserveAspectRatio', 'none')
			svg.replaceChildren()

			diagram.querySelectorAll('.eco-card').forEach(card => {
				const icon = card.querySelector('.eco-card__icon')
				if (!icon) return
				const ir = icon.getBoundingClientRect()
				const ix = ir.left - diaRect.left + ir.width / 2
				const iy = ir.top - diaRect.top + ir.height / 2
				const dx = ix - cx
				const dy = iy - cy
				const len = Math.hypot(dx, dy)
				if (len < 1) return
				const ux = dx / len
				const uy = dy / len
				const ex = ix - ux * (iconRadius + dotGap)
				const ey = iy - uy * (iconRadius + dotGap)
				const color = getComputedStyle(icon).color

				const g = document.createElementNS(NS, 'g')
				g.setAttribute('stroke', color)
				g.setAttribute('stroke-width', '2')
				g.setAttribute('fill', 'none')
				g.setAttribute('stroke-linecap', 'round')
				g.setAttribute('opacity', '0.4')

				const line = document.createElementNS(NS, 'line')
				line.setAttribute('x1', cx)
				line.setAttribute('y1', cy)
				line.setAttribute('x2', ex)
				line.setAttribute('y2', ey)
				line.setAttribute('stroke-dasharray', dash)
				g.appendChild(line)

				const circle = document.createElementNS(NS, 'circle')
				circle.setAttribute('cx', ex)
				circle.setAttribute('cy', ey)
				circle.setAttribute('r', '5')
				g.appendChild(circle)

				svg.appendChild(g)
			})
		}

		draw()

		let raf = 0
		const onResize = () => {
			if (raf) return
			raf = requestAnimationFrame(() => {
				raf = 0
				draw()
			})
		}
		// AOS animates the whole diagram with fade-up (700ms translateY) —
		// redraw once it has landed so the coordinates match the final position.
		diagram.addEventListener('transitionend', onResize)
		window.addEventListener('resize', onResize)
		if (document.fonts && document.fonts.ready) {
			document.fonts.ready.then(draw)
		}
		setTimeout(draw, 900)
	}

	initAccordion('.tasks__list', 'is-open', '.tasks__q')
	initAccordion('.faq__list', 'is-open', '.faq__q')
	initHistoryTimeline()
	initCatalogAccordion()
	initEcoLines()

	initClientsPage()
	initDropdown()
	initDemoPopup()
	initVideoPopup()
	initProgramTabs()
	initMobileMenu()
	initRequestForm()
	initSubscribeForm()
	initCookieBanner()

	document.querySelectorAll('.tasks__item:first-child, .faq__item:first-child').forEach(el => {
		el.classList.add('is-open')
		const b = el.querySelector('.tasks__q, .faq__q')
		if (b) b.setAttribute('aria-expanded', 'true')
	})
})

// Анимация печатной машинки только для динамического слова в hero
document.addEventListener('DOMContentLoaded', () => {
	const dynamicEl = document.querySelector('.hero__dynamic-word')

	if (!dynamicEl || !dynamicEl.dataset.words) return

	const words = dynamicEl.dataset.words.split(',')

	let charIndex = 0
	let wordIndex = 0
	let isDeleting = false

	const typeSpeed = 70
	const deleteSpeed = 40
	const pauseTime = 2000

	function type() {
		const currentWord = words[wordIndex]

		if (isDeleting) {
			dynamicEl.textContent = currentWord.substring(0, charIndex - 1)
			charIndex--
		} else {
			dynamicEl.textContent = currentWord.substring(0, charIndex + 1)
			charIndex++
		}

		let nextSpeed = isDeleting ? deleteSpeed : typeSpeed

		if (!isDeleting && charIndex === currentWord.length) {
			// Слово напечатано — пауза, потом стирание
			isDeleting = true
			nextSpeed = pauseTime
		} else if (isDeleting && charIndex === 0) {
			// Слово стёрто — переход к следующему
			isDeleting = false
			wordIndex = (wordIndex + 1) % words.length
			nextSpeed = 500
		}

		setTimeout(type, nextSpeed)
	}

	dynamicEl.textContent = ''
	type()
})
