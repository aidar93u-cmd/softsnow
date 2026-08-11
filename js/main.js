document.addEventListener('DOMContentLoaded', () => {
  const clientsSwiper = new Swiper('.clients__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    speed: 600,
  });

  const partnersSwiper = new Swiper('.partners__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    speed: 600,
  });

  const projectsSwiper = new Swiper('.projects__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    speed: 600,
  });

  const eventsSwiper = new Swiper('.events__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    speed: 600,
  });

  const navs = [
    ['.partners .carousel-nav', partnersSwiper],
    ['.projects .carousel-nav', projectsSwiper],
    ['.events .carousel-nav', eventsSwiper],
  ];
  navs.forEach(([selector, swiper]) => {
    const nav = document.querySelector(selector);
    if (!nav) return;
    const prev = nav.querySelector('[data-scroll-prev]');
    const next = nav.querySelector('[data-scroll-next]');
    if (prev) prev.addEventListener('click', () => swiper.slidePrev());
    if (next) next.addEventListener('click', () => swiper.slideNext());
  });
});
