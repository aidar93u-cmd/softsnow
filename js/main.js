function initClientsMarquee() {
	var marquee = document.querySelector('.clients__marquee')
	var track = marquee && marquee.querySelector('.clients__track')
	if (!marquee || !track) return

	// ponytail: duplicate until seamless loop >=2x viewport, keep even halves identical
	var origCells = Array.from(track.children)
	if (origCells.length) {
		var guard = 0
		while (track.scrollWidth < marquee.clientWidth * 2 + 200 && guard < 6) {
			origCells.forEach(function (c) {
				track.appendChild(c.cloneNode(true))
			})
			guard++
			if (track.children.length > 80) break
		}
	}

	var MOBILE_BREAKPOINT = 768
	var SPEED_DESKTOP = 0.45
	var SPEED_MOBILE = SPEED_DESKTOP * 2

	var speed = window.innerWidth <= MOBILE_BREAKPOINT ? SPEED_MOBILE : SPEED_DESKTOP
	function updateSpeed() {
		speed = window.innerWidth <= MOBILE_BREAKPOINT ? SPEED_MOBILE : SPEED_DESKTOP
	}
	window.addEventListener('resize', updateSpeed)

	var isPaused = false
	var isDragging = false
	var dragStartX = 0
	var dragStartScrollLeft = 0
	var dragMoved = false
	var pointerId = null
	var scrollPos = 0

	// seamless start - keep float pos in sync
	setTimeout(function () {
		var half = track.scrollWidth / 2
		if (half > 0) {
			scrollPos = half / 2
			marquee.scrollLeft = scrollPos
		} else {
			scrollPos = marquee.scrollLeft
		}
	}, 50)

	function tick() {
		if (!isPaused && !isDragging) {
			scrollPos += speed
			var halfWidth = track.scrollWidth / 2
			if (halfWidth > 0) {
				if (scrollPos >= halfWidth) scrollPos -= halfWidth
				else if (scrollPos < 0) scrollPos += halfWidth
			}
			marquee.scrollLeft = Math.round(scrollPos)
		} else {
			// keep pos in sync when paused/dragging (user may have scrolled)
			scrollPos = marquee.scrollLeft
		}
	}
	setInterval(tick, 16)

	marquee.addEventListener('mouseenter', function () {
		isPaused = true
	})
	marquee.addEventListener('mouseleave', function () {
		isPaused = false
		endDrag()
	})

	marquee.addEventListener('pointerdown', function (e) {
		// only primary button / touch
		if (e.button !== 0 && e.pointerType === 'mouse') return
		isDragging = true
		dragMoved = false
		dragStartX = e.clientX
		scrollPos = marquee.scrollLeft
		dragStartScrollLeft = scrollPos
		pointerId = e.pointerId
		marquee.classList.add('is-dragging')
		try {
			marquee.setPointerCapture(e.pointerId)
		} catch (err) {}
	})

	marquee.addEventListener('pointermove', function (e) {
		if (!isDragging) return
		var delta = e.clientX - dragStartX
		if (Math.abs(delta) > 3) dragMoved = true
		scrollPos = dragStartScrollLeft - delta
		var halfW = track.scrollWidth / 2
		if (halfW > 0) {
			if (scrollPos >= halfW) scrollPos -= halfW
			else if (scrollPos < 0) scrollPos += halfW
		}
		marquee.scrollLeft = Math.round(scrollPos)
		if (e.cancelable) e.preventDefault()
	})

	function endDrag() {
		if (!isDragging) return
		isDragging = false
		marquee.classList.remove('is-dragging')
		if (pointerId !== null) {
			try {
				marquee.releasePointerCapture(pointerId)
			} catch (err) {}
			pointerId = null
		}
	}

	marquee.addEventListener('pointerup', endDrag)
	marquee.addEventListener('pointercancel', endDrag)
	marquee.addEventListener('pointerleave', endDrag)

	marquee.addEventListener(
		'click',
		function (e) {
			if (dragMoved) {
				e.preventDefault()
				e.stopPropagation()
				dragMoved = false
			}
		},
		true,
	)

	// prevent native image drag
	track.querySelectorAll('img').forEach(function (img) {
		img.setAttribute('draggable', 'false')
	})
}

function lockScroll() {
	document.body.style.overflow = 'hidden'
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

	const useEl = searchBtn.querySelector('use')
	const baseHref = useEl ? useEl.getAttribute('href').split('#')[0] : 'assets/img/sprite.svg'
	const searchHref = baseHref + '#icon-search'
	const closeHref = baseHref + '#icon-close'

	const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
	let prefersReduced = motionQuery.matches
	motionQuery.addEventListener('change', e => {
		prefersReduced = e.matches
	})

	const TRANSITION_DURATION = 300
	let lastFocused = null

	function setSearchIcon(isOpen) {
		if (useEl) {
			useEl.setAttribute('href', isOpen ? closeHref : searchHref)
			const svg = useEl.closest('svg')
			if (svg) {
				svg.setAttribute('viewBox', isOpen ? '0 0 24 24' : '0 0 15.9 15.9')
				svg.setAttribute('width', isOpen ? '16' : '15.9')
				svg.setAttribute('height', isOpen ? '16' : '15.9')
			}
		}
		searchBtn.classList.toggle('is-active', isOpen)
		searchBtn.setAttribute('aria-expanded', String(isOpen))
		searchBtn.setAttribute('aria-label', isOpen ? 'Закрыть поиск' : 'Поиск')
	}

	function open() {
		if (popup.classList.contains('is-open')) return
		lastFocused = document.activeElement

		// Если шапка скрыта скроллом — показываем её
		if (header && header.classList.contains('is-hiding')) {
			header.classList.remove('is-hiding')
			header.classList.add('is-visible')
		}

		// Блокируем скролл страницы с компенсацией скроллбара
		lockScroll()
		document.body.classList.add('is-search-open')
		setSearchIcon(true)

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
		if (!popup.classList.contains('is-open') && popup.hidden) return
		popup.classList.remove('is-open')
		overlay.classList.remove('is-open')
		setSearchIcon(false)

		const duration = prefersReduced ? 0 : TRANSITION_DURATION
		setTimeout(() => {
			popup.hidden = true
			document.body.classList.remove('is-search-open')
			unlockScroll()
		}, duration)

		if (lastFocused && typeof lastFocused.focus === 'function') {
			// ponytail: фокус возвращаем после анимации, чтобы не сбивать trap
			setTimeout(() => {
				if (document.contains(lastFocused)) lastFocused.focus({ preventScroll: true })
			}, duration)
		}
		document.removeEventListener('keydown', onKeydown)
	}

	function onKeydown(e) {
		if (e.key === 'Escape') close()
		// DEF-54: фокус не уходит из поиска на страницу под ним
		else trapTab(popup, e)
	}

	function toggle() {
		if (popup.classList.contains('is-open')) close()
		else open()
	}

	searchBtn.setAttribute('aria-expanded', 'false')
	searchBtn.addEventListener('click', toggle)
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
		const gridEl = grid
		if (window.SoftSnow && gridEl && gridEl.dataset.ajax && typeof SoftSnow.loadList === 'function') {
			gridEl.dataset.page = '1'
			SoftSnow.loadList(gridEl, 1)
			return
		}
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
			if (window.SoftSnow && grid && grid.dataset.ajax && typeof SoftSnow.loadList === 'function') {
				const next = Number(grid.dataset.page || 1) + 1
				grid.dataset.page = String(next)
				SoftSnow.loadList(grid, next)
				return
			}
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
			// DEF-40: лок чужого оверлея (меню/поиск/модалка) не затираем
			if (open) lockScroll()
			else unlockScroll()
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
		if (window.SoftSnow && grid && grid.dataset.ajax && typeof SoftSnow.loadList === 'function') {
			grid.dataset.page = '1'
			SoftSnow.loadList(grid, 1)
			return
		}
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
			if (window.SoftSnow && grid && grid.dataset.ajax && typeof SoftSnow.loadList === 'function') {
				const next = Number(grid.dataset.page || 1) + 1
				grid.dataset.page = String(next)
				SoftSnow.loadList(grid, next)
				return
			}
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
	if (!tpl || !btns.length || typeof Swiper === 'undefined' || typeof Fancybox === 'undefined') return
	const panels = Array.from(document.querySelectorAll('.features__panel'))
	const images = panels
		.map(p => {
			const img = p.querySelector('.features__img')
			return img ? { src: img.src, alt: img.alt || '' } : null
		})
		.filter(Boolean)
	if (!images.length) return

	function openAt(index) {
		const node = tpl.cloneNode(true)
		node.hidden = false
		node.removeAttribute('id')
		const swiperEl = node.querySelector('.features-popup__swiper')
		const wrapper = node.querySelector('.swiper-wrapper')
		const thumbsWrap = node.querySelector('.features-popup__thumbs')
		const prevBtn = node.querySelector('.features-popup__nav--prev')
		const nextBtn = node.querySelector('.features-popup__nav--next')
		if (!swiperEl || !wrapper || !thumbsWrap) return

		wrapper.innerHTML = ''
		images.forEach(data => {
			const slide = document.createElement('div')
			slide.className = 'swiper-slide'
			slide.innerHTML = `<img src="${data.src}" alt="${data.alt}" draggable="false">`
			wrapper.appendChild(slide)
		})

		thumbsWrap.innerHTML = ''
		images.forEach((data, i) => {
			const b = document.createElement('button')
			b.type = 'button'
			b.className = 'features-popup__thumb'
			b.setAttribute('role', 'tab')
			b.setAttribute('aria-label', `Слайд ${i + 1}`)
			b.innerHTML = `<img src="${data.src}" alt="">`
			thumbsWrap.appendChild(b)
		})

		let swiper = null
		function sync() {
			const idx = swiper ? swiper.activeIndex : index
			Array.from(thumbsWrap.children).forEach((b, i) => {
				b.classList.toggle('is-active', i === idx)
				b.setAttribute('aria-selected', String(i === idx))
			})
			if (prevBtn) prevBtn.disabled = idx === 0
			if (nextBtn) nextBtn.disabled = idx === images.length - 1
			const active = thumbsWrap.querySelector('.is-active')
			if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
		}

		Fancybox.show([{ src: node, type: 'html' }], {
			Toolbar: false,
			Thumbs: false,
			closeButton: false,
			Carousel: { infinite: false },
			dragToClose: false,
		})

		// init swiper after fancybox has moved node into DOM
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				swiper = new Swiper(swiperEl, {
					slidesPerView: 1,
					spaceBetween: 0,
					speed: 400,
					loop: false,
					allowTouchMove: true,
					watchOverflow: true,
					initialSlide: Math.max(0, Math.min(index, images.length - 1)),
					keyboard: { enabled: true },
				})
				swiper.on('slideChange', sync)
				sync()
				if (prevBtn) prevBtn.addEventListener('click', () => swiper.slidePrev(400))
				if (nextBtn) nextBtn.addEventListener('click', () => swiper.slideNext(400))
				Array.from(thumbsWrap.children).forEach((b, i) => {
					b.addEventListener('click', () => swiper.slideTo(i, 400))
				})
				// clean on close
				const fancy = typeof Fancybox.getInstance === 'function' ? Fancybox.getInstance() : null
				if (fancy && fancy.on) {
					fancy.on('destroy', () => {
						if (swiper) {
							swiper.destroy(true, true)
							swiper = null
						}
					})
				} else {
					// fallback: watch for container removal
					const obs = new MutationObserver(() => {
						if (!document.contains(node) && swiper) {
							swiper.destroy(true, true)
							swiper = null
							obs.disconnect()
						}
					})
					obs.observe(document.body, { childList: true, subtree: true })
				}
			})
		})
	}

	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			const panel = btn.closest('.features__panel')
			const idx = panel ? panels.indexOf(panel) : 0
			openAt(idx >= 0 ? idx : 0)
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
	unlockScroll()
}

// DEF-40: снимаем лок скролла, только если его не держит другой оверлей
// (мобильное меню, поиск, Fancybox) — иначе клики мимо фильтров,
// закрытие поиска и т.п. отпирают чужой лок
function unlockScroll() {
	if (!document.body.classList.contains('menu-open') && !document.body.classList.contains('is-search-open') && !document.querySelector('.fancybox__container')) {
		document.body.style.overflow = ''
	}
}

// DEF-54: видимые фокусируемые внутри контейнера (для трапа Tab)
function trapItems(container) {
	return Array.from(container.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])')).filter(el => {
		const r = el.getBoundingClientRect()
		return r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== 'hidden'
	})
}

// DEF-54: зацикливание Tab внутри открытого контейнера
function trapTab(container, e) {
	if (e.key !== 'Tab') return
	const items = trapItems(container)
	if (!items.length) return
	const first = items[0]
	const last = items[items.length - 1]
	if (e.shiftKey && document.activeElement === first) {
		e.preventDefault()
		last.focus()
	} else if (!e.shiftKey && document.activeElement === last) {
		e.preventDefault()
		first.focus()
	}
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
		const groupLink = link.cloneNode(true)
		// DEF-22: состояние группы для скринридера
		groupLink.setAttribute('aria-expanded', 'true')
		group.appendChild(groupLink)
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
		if (open) {
			lockScroll()
			// DEF-54: фокус в меню при открытии. Через rAF и без фильтра
			// visibility — меню открывается с transition (0.25s), в полёте
			// trapItems() видит hidden и вернул бы пусто
			requestAnimationFrame(() => {
				if (!menu.classList.contains('is-open')) return
				const first = menu.querySelector('.mobile-menu__list a, .mobile-menu__cta')
				if (first) first.focus({ preventScroll: true })
			})
		} else {
			unlockScroll()
		}
	})

	menu.addEventListener('keydown', e => {
		if (!menu.classList.contains('is-open')) return
		if (e.key === 'Escape') {
			closeMobileMenu(menu, burger)
			burger.focus({ preventScroll: true })
			return
		}
		// DEF-54: фокус не уходит на страницу под меню
		trapTab(menu, e)
	})

	menu.addEventListener('click', e => {
		if (e.target === menu) {
			closeMobileMenu(menu, burger)
			return
		}
		const groupLink = e.target.closest('.mobile-menu__group > .header__link')
		if (groupLink) {
			e.preventDefault()
			const grp = groupLink.parentElement
			grp.classList.toggle('is-open')
			groupLink.setAttribute('aria-expanded', String(grp.classList.contains('is-open')))
			return
		}
		if (e.target.closest('a')) closeMobileMenu(menu, burger)
	})

	window.addEventListener('resize', () => {
		if (window.innerWidth > 1024 && menu.classList.contains('is-open')) closeMobileMenu(menu, burger)
	})
}

// DEF-22: состояние десктопных дропдаунов шапки (атрибуты — в разметке,
// здесь только переключение значения при hover/focus)
function initHeaderDropdowns() {
	document.querySelectorAll('.header__dropdown').forEach(dd => {
		const link = dd.querySelector(':scope > .header__link, :scope .header__link')
		if (!link) return
		const set = on => link.setAttribute('aria-expanded', String(on))
		dd.addEventListener('mouseenter', () => set(true))
		dd.addEventListener('mouseleave', () => set(false))
		link.addEventListener('focus', () => set(true))
		dd.addEventListener('focusout', e => {
			if (!dd.contains(e.relatedTarget)) set(false)
		})
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
		['.testimonials .carousel-nav', testimonialsSwiper],
		['.gallery .carousel-nav', gallerySwiper],
	].forEach(([selector, swiper]) => bindNav(selector, swiper))

	// ponytail: scope tabs/panels per .features section (two sections on same page)
	document.querySelectorAll('.features').forEach(section => {
		const tabs = section.querySelector('.tabs')
		if (!tabs) return
		const panels = section.querySelectorAll('.features__panel')
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
			requestAnimationFrame(() => {
				if (typeof window.updateFeaturesClamp === 'function') window.updateFeaturesClamp()
			})
		})
	})

	// ponytail: clamp long text in features panels to image height + "Показать больше"
	window.updateFeaturesClamp = function () {
		// only active panels are visible (display:grid), hidden have 0 height
		document.querySelectorAll('.features__panel.is-active').forEach(panel => {
			const inner = panel.querySelector('.features__content-inner')
			const img = panel.querySelector('.features__img')
			if (!inner) return
			let more = panel.querySelector('.features__more')
			// reset for measurement
			inner.classList.remove('is-clamped', 'is-expanded')
			inner.style.maxHeight = ''
			if (more) more.remove()

			if (window.innerWidth <= 768) return

			const imgH = img ? Math.round(img.getBoundingClientRect().height) : 0
			const limit = imgH > 40 ? imgH : 520
			// natural height after reset
			const naturalH = inner.scrollHeight
			if (naturalH <= limit + 24) return

			inner.classList.add('is-clamped')
			inner.style.maxHeight = limit + 'px'

			more = document.createElement('button')
			more.type = 'button'
			more.className = 'features__more'
			more.textContent = 'Показать больше'
			more.setAttribute('aria-expanded', 'false')
			more.addEventListener('click', () => {
				const expanded = inner.classList.contains('is-expanded')
				if (expanded) {
					inner.classList.remove('is-expanded')
					inner.classList.add('is-clamped')
					inner.style.maxHeight = limit + 'px'
					more.textContent = 'Показать больше'
					more.setAttribute('aria-expanded', 'false')
				} else {
					inner.classList.remove('is-clamped')
					inner.classList.add('is-expanded')
					inner.style.maxHeight = 'none'
					more.textContent = 'Скрыть'
					more.setAttribute('aria-expanded', 'true')
				}
			})
			const content = panel.querySelector('.features__content')
			if (content) {
				const demo = content.querySelector('.features__demo')
				if (demo) demo.before(more)
				else content.appendChild(more)
			} else {
				inner.after(more)
			}
		})
		// cleanup inactive panels (remove stale buttons/clamp)
		document.querySelectorAll('.features__panel:not(.is-active)').forEach(panel => {
			const inner = panel.querySelector('.features__content-inner')
			if (!inner) return
			inner.classList.remove('is-clamped', 'is-expanded')
			inner.style.maxHeight = ''
			const more = panel.querySelector('.features__more')
			if (more) more.remove()
		})
	}
	const scheduleClamp = () => requestAnimationFrame(() => window.updateFeaturesClamp())
	// init after layout + after images
	scheduleClamp()
	window.addEventListener('load', scheduleClamp)
	window.addEventListener('resize', () => {
		clearTimeout(window._featuresClampTimer)
		window._featuresClampTimer = setTimeout(scheduleClamp, 150)
	})

	// Form popups (#request-popup, #subscribe-popup): phone mask + Just-validate +
	// body→success swap + reset через штатное событие Fancybox.
	// Все resetState попапов копятся в formResets и вызываются из on.destroy
	// единственного Fancybox.bind (см. initRequestForm).
	const formResets = []
	function bindFormPopup(popupId, formId, configure) {
		const popup = document.getElementById(popupId)
		const form = document.getElementById(formId)
		if (!popup || !form || typeof JustValidate === 'undefined') return

		const success = popup.querySelector('.modal-form__success')
		const head = popup.querySelector('.modal-form__head')
		const body = popup.querySelector('.modal-form__body')
		const errorEl = popup.querySelector('[data-form-error]')
		const submit = form.querySelector('[type="submit"]')
		// DEF-59: opener для возврата фокуса; didSubmit отличает успех от черновика
		let opener = null
		let errSeq = 0

		// DEF-02: блокировка кнопки на время отправки
		const setSubmitting = on => {
			if (!submit) return
			if (on && !submit.dataset.label) submit.dataset.label = submit.textContent
			submit.disabled = on
			submit.setAttribute('aria-disabled', String(on))
			form.setAttribute('aria-busy', String(on))
			submit.textContent = on ? 'Отправка…' : submit.dataset.label || submit.textContent
		}

		// DEF-01/DEF-46: видимая ошибка отправки (role="alert" — в разметке)
		const showError = msg => {
			if (errorEl) {
				errorEl.textContent = msg
				errorEl.classList.remove('is-hidden')
			}
			if (body) body.classList.remove('is-hidden')
			if (head) head.classList.remove('is-hidden')
			if (success) success.classList.add('is-hidden')
		}

		const resetState = () => {
			const wasSuccess = success && !success.classList.contains('is-hidden')
			// DEF-59: полный сброс (включая текст) — только после успеха;
			// неотправленный черновик сохраняем, чистим лишь ошибки
			if (wasSuccess) form.reset()
			form.classList.remove('is-hidden')
			if (head) head.classList.remove('is-hidden')
			if (body) body.classList.remove('is-hidden')
			if (success) success.classList.add('is-hidden')
			if (errorEl) {
				errorEl.textContent = ''
				errorEl.classList.add('is-hidden')
			}
			setSubmitting(false)
			form.querySelectorAll('.form-field--invalid').forEach(el => el.classList.remove('form-field--invalid'))
			form.querySelectorAll('.form-field__error').forEach(el => el.remove())
			syncAria()
			// DEF-59: фокус — на кнопку, открывшую окно. Fancybox при закрытии
			// сам дважды трогает фокус (restore + снос в BODY в конце teardown),
			// поэтому: как только контейнер исчез — ставим фокус сразу и ещё
			// ~1с удерживаем (если teardown перебьёт обратно на BODY — возвращаем).
			// Чужой фокус (пользователь уже табнул дальше) не отбираем.
			const backTo = opener
			opener = null
			const focusBack = () => {
				if (document.querySelector('.fancybox__container')) {
					requestAnimationFrame(focusBack)
					return
				}
				const visible = el => {
					const r = el.getBoundingClientRect()
					return r.width > 0 && r.height > 0
				}
				let target = backTo && document.contains(backTo) && visible(backTo) ? backTo : null
				if (!target) {
					// DEF-59: opener мог стать невидимым (ресайз с открытой модалкой) —
					// тогда берём первый видимый триггер того же окна
					target = Array.from(document.querySelectorAll('[data-fancybox][data-src="#' + popupId + '"]')).find(visible) || null
				}
				if (!target) return
				const t0 = performance.now()
				const guard = () => {
					const a = document.activeElement
					if (a === target) return
					if (a && a !== document.body && a !== document.documentElement) return
					if (performance.now() - t0 > 1200) return
					target.focus({ preventScroll: true })
					setTimeout(guard, 120)
				}
				guard()
			}
			requestAnimationFrame(focusBack)
		}

		// DEF-22: состояние полей для скринридера — aria-invalid +
		// привязка текста ошибки через aria-describedby
		const syncAria = () => {
			form.querySelectorAll('.form-field__input, .form-check__input').forEach(input => {
				const invalid = input.classList.contains('form-field--invalid')
				input.setAttribute('aria-invalid', String(invalid))
				if (!invalid) {
					input.removeAttribute('aria-describedby')
					return
				}
				const wrap = input.closest('.form-field, .form-check')
				let label = wrap ? wrap.querySelector('.form-field__error') : null
				if (!label) label = form.querySelector('.modal-form__checks > .form-field__error')
				if (!label) return
				if (!label.id) label.id = popupId + '-err-' + errSeq++
				input.setAttribute('aria-describedby', label.id)
			})
		}
		;['input', 'change', 'focusout'].forEach(ev => form.addEventListener(ev, () => requestAnimationFrame(syncAria)))
		syncAria()

		const showSuccess = () => {
			if (head) head.classList.add('is-hidden')
			form.classList.add('is-hidden')
			if (success) success.classList.remove('is-hidden')
		}

		configure({ form, showSuccess, showError, setSubmitting, resetState, syncAria })

		// DEF-38: сброс через штатное событие Fancybox destroy — ловит X, «Хорошо»,
		// ESC и клик по фону разом. resetState идемпотентен, двойной вызов безопасен.
		// Сам destroy-обработчик висит на единственном Fancybox.bind в initRequestForm.
		formResets.push(resetState)

		// DEF-59: запоминаем кнопку-триггер, чтобы вернуть на неё фокус
		document.addEventListener('click', e => {
			if (!e.target || typeof e.target.closest !== 'function') return
			const trigger = e.target.closest('[data-fancybox]')
			if (trigger && trigger.dataset.src === '#' + popupId) opener = trigger
		})
	}

	// Request popup: phone mask + Just-validate (validates on input)
	function initRequestForm() {
		if (typeof Fancybox !== 'undefined') {
			Fancybox.bind('[data-fancybox]', {
				Toolbar: false,
				closeButton: false,
				on: { destroy: () => formResets.forEach(fn => fn()) },
			})
		}

		bindFormPopup('request-popup', 'request-form', ({ form, showSuccess, showError, setSubmitting, syncAria }) => {
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
				errorFieldCssClass: 'form-field--invalid',
				errorLabelCssClass: 'form-field__error',
				errorLabelStyle: {},
			})

			validator
				.addField('.js-position', [
					{ rule: 'required', errorMessage: 'Укажите должность' },
					{ rule: 'minLength', value: 3, errorMessage: 'Минимум 3 символа' },
				])
				.addField('.js-fio', [
					{ rule: 'required', errorMessage: 'Укажите ФИО' },
					{ rule: 'minLength', value: 3, errorMessage: 'Минимум 3 символа' },
				])
				.addField('.js-email', [
					{ rule: 'required', errorMessage: 'Укажите e-mail' },
					{ rule: 'email', errorMessage: 'Введите корректный e-mail' },
				])
				.addField('.js-phone', [
					{ rule: 'required', errorMessage: 'Укажите телефон' },
					{
						validator: () => phone && phone.value.replace(/\D/g, '').length === 11,
						errorMessage: 'Введите номер полностью: +7 (___) ___-__-__',
					},
				])
				.addField('.js-consent', [{ rule: 'required', errorMessage: 'Подтвердите согласие' }])

			// DEF-22: провал валидации — обновить aria-invalid/describedby
			validator.onFail(() => requestAnimationFrame(syncAria))

			validator.onSuccess(async event => {
				event?.preventDefault?.()
				if (!navigator.onLine) {
					showError('Нет соединения с интернетом. Проверьте связь и попробуйте ещё раз.')
					return
				}
				setSubmitting(true)
				try {
					// BACKEND-HOOK: разработчик заменяет мок ниже на реальный запрос, например:
					// const res = await fetch('/api/lead', { method: 'POST', body: new FormData(form), signal: AbortSignal.timeout(10000) })
					// if (!res.ok) throw new Error('Server error: ' + res.status)
					if (window.SoftSnow && typeof SoftSnow.sendForm === 'function') {
						const ok = await SoftSnow.sendForm(form, 'request')
						if (!ok) throw new Error('sendForm returned false')
					} else {
						await new Promise(resolve => setTimeout(resolve, 600))
					}
					showSuccess()
				} catch (err) {
					showError('Не удалось отправить заявку. Попробуйте ещё раз позже.')
				} finally {
					setSubmitting(false)
				}
			})
		})
	}

	// Subscribe popup: email + consent, success swap
	function initSubscribeForm() {
		bindFormPopup('subscribe-popup', 'subscribe-form', ({ form, showSuccess, showError, setSubmitting, syncAria }) => {
			const validator = new JustValidate(form, {
				validateOnBlur: true,
				validateOnChange: true,
				validateOnInput: true,
				errorFieldCssClass: 'form-field--invalid',
				errorLabelCssClass: 'form-field__error',
				errorLabelStyle: {},
			})

			validator
				.addField('.js-email', [
					{ rule: 'required', errorMessage: 'Укажите e-mail' },
					{ rule: 'email', errorMessage: 'Введите корректный e-mail' },
				])
				.addField('.js-consent', [{ rule: 'required', errorMessage: 'Подтвердите согласие' }])

			// DEF-22: провал валидации — обновить aria-invalid/describedby
			validator.onFail(() => requestAnimationFrame(syncAria))

			validator.onSuccess(async event => {
				event?.preventDefault?.()
				if (!navigator.onLine) {
					showError('Нет соединения с интернетом. Проверьте связь и попробуйте ещё раз.')
					return
				}
				setSubmitting(true)
				try {
					// BACKEND-HOOK: разработчик заменяет мок ниже на реальный запрос, например:
					// const res = await fetch('/api/subscribe', { method: 'POST', body: new FormData(form), signal: AbortSignal.timeout(10000) })
					// if (!res.ok) throw new Error('Server error: ' + res.status)
					if (window.SoftSnow && typeof SoftSnow.sendForm === 'function') {
						const ok = await SoftSnow.sendForm(form, 'subscribe')
						if (!ok) throw new Error('sendForm returned false')
					} else {
						await new Promise(resolve => setTimeout(resolve, 600))
					}
					showSuccess()
				} catch (err) {
					showError('Не удалось оформить подписку. Попробуйте ещё раз позже.')
				} finally {
					setSubmitting(false)
				}
			})
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

	// Floating ring (desktop wider than 1024 only): eco-cards are absolutely
	// positioned with their icons on a circle around the core, so every line
	// has equal length by construction. 6 cards = circle in 8 sectors
	// (top/bottom empty), 5 cards = circle in 6 sectors (bottom empty,
	// first card on top). Dashed lines (SVG stroke-dasharray, no CSS dotted),
	// white dot where each line meets its icon. Redrawn from
	// getBoundingClientRect (fonts, resize, AOS landing).
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
		const D = Math.PI / 180
		// slot angles, 0° = east, y grows down.
		// 6: left top->bottom 225/180/135, right top->bottom 315/0/45.
		// 5: first card top 270, left 210/150, right 330/30.
		const SLOTS = { 6: [225, 180, 135, 315, 0, 45], 5: [270, 210, 150, 330, 30] }

		function clearFloat(cards) {
			diagram.classList.remove('is-placed')
			diagram.style.height = ''
			cards.forEach(c => {
				c.style.left = ''
				c.style.top = ''
				c.style.width = ''
			})
			svg.replaceChildren()
			svg.removeAttribute('viewBox')
			svg.removeAttribute('width')
			svg.removeAttribute('height')
		}

		function draw() {
			const cards = [...diagram.querySelectorAll('.eco-card')]
			const slots = SLOTS[cards.length]
			const floating = window.innerWidth > 1024 && !!slots
			// сторону зеркала задаём всегда (кольцо + планшетная сетка);
			// верхняя (idx0 при 5) — как правая
			cards.forEach((card, i) => {
				const top = floating && cards.length === 5 && i === 0
				const left = top ? false : floating ? Math.cos(slots[i] * D) < 0 : i < Math.ceil(cards.length / 2)
				card.classList.toggle('is-left', left)
			})
			if (!floating) {
				clearFloat(cards)
				return
			}
			const diaW = diagram.getBoundingClientRect().width
			if (diaW < 2) return
			// ponytail: class first (static flow off), then measure + stretch
			diagram.classList.add('is-placed')
			const rootFont = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
			const padL = parseFloat(getComputedStyle(cards[0]).paddingLeft) || 0
			const padR = parseFloat(getComputedStyle(cards[0]).paddingRight) || 0
			// ring radius: core half (10rem) + icon (2rem) + pads + air, +20px clear of the glows
			const R = Math.min(20 * rootFont + 20, diaW / 2 - 14 * rootFont)
			if (R < 40) {
				clearFloat(cards)
				return
			}
			// glow--2 radius drives where dots sit (measured live, rootFont-aware)
			const glowEl = diagram.querySelector('.ecosystem__glow--2')
			const glowRect = glowEl ? glowEl.getBoundingClientRect() : null
			const Rglow = glowRect ? (glowRect.width + glowRect.height) / 4 : 0
			// cx is height-independent — measure once up front (widths need it)
			const coreRect0 = core.getBoundingClientRect()
			const diaRect0 = diagram.getBoundingClientRect()
			const cx0 = coreRect0.left - diaRect0.left + coreRect0.width / 2

			// pass 1: stretch each card to its block edge, icon side stays free
			cards.forEach((card, i) => {
				const icon = card.querySelector('.eco-card__icon')
				if (!icon) return
				const a = slots[i] * D
				const toRight = !card.classList.contains('is-left')
				const sx = cx0 + Math.cos(a) * R
				const iconR = icon.getBoundingClientRect().width / 2
				if (toRight) {
					const left = sx - iconR - padL
					card.style.left = left + 'px'
					card.style.width = diaW - left + 'px'
				} else {
					card.style.left = '0px'
					card.style.width = sx + iconR + padR + 'px'
				}
			})
			// heights depend on stretched widths — measure, then fix diagram height
			const maxCardH = Math.max(...cards.map(c => c.getBoundingClientRect().height))
			diagram.style.height = 2 * R + maxCardH + 3 * rootFont + 'px'
			// core recenters once the explicit height lands — re-read
			const diaRect = diagram.getBoundingClientRect()
			const coreRect = core.getBoundingClientRect()
			const cx = coreRect.left - diaRect.left + coreRect.width / 2
			const cy = coreRect.top - diaRect.top + coreRect.height / 2

			svg.setAttribute('viewBox', '0 0 ' + diaRect.width + ' ' + diaRect.height)
			svg.setAttribute('width', diaRect.width)
			svg.setAttribute('height', diaRect.height)
			svg.setAttribute('preserveAspectRatio', 'none')
			svg.replaceChildren()

			cards.forEach((card, i) => {
				const icon = card.querySelector('.eco-card__icon')
				if (!icon) return
				const a = slots[i] * D
				const ux = Math.cos(a)
				const uy = Math.sin(a)
				// icon sits exactly on its slot by construction (stretched width);
				// pin the card vertically, draw line + dot
				const cr = card.getBoundingClientRect()
				const ir = icon.getBoundingClientRect()
				const iy0 = ir.top - cr.top + ir.height / 2
				card.style.top = cy + uy * R - iy0 + 'px'
				// line from the core center; white dot sits exactly on the
				// .ecosystem__glow--2 circle (radius measured live)
				const iconR = ir.width / 2
				const Rend = Rglow > 0 ? Math.min(Rglow, R - iconR - 8) : R - iconR - 10
				const ex = cx + ux * Rend
				const ey = cy + uy * Rend
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
		// AOS animates the whole diagram with fade-up (700ms translateY) вЂ”
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
	initEcoAccordion()
	initEcoLines()

	initClientsPage()
	initDropdown()
	initDemoPopup()
	initVideoPopup()
	initProgramTabs()
	initMobileMenu()
	initHeaderDropdowns()
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
