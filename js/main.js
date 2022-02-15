const swiper = new Swiper('.main-slider', {
   spaceBetween: 30,
   loop: true,
   navigation: {
      nextEl: '.main-slider_arrow',
  },
  breakpoints: {
     320: {
        slidesPerView: 1,
     },
     768: {
         slidesPerView: 2,
     }
  } 
});
let burger = document.querySelector('.menu-burger');
let closeMeny = document.querySelector('.header_menu-close');
let menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
   menuMobile.style.display = 'block';
})
closeMeny.addEventListener('click', () => {
   menuMobile.style.display = 'none';
})