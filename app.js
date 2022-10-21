const buttonBurger = document.querySelector(".burger");
const navbar = document.querySelector(".nav-responsive");


let lastfeatShow = 0;

buttonBurger.addEventListener( 'click', () => {

  navbar.classList.toggle("nav-show");
  (buttonBurger.classList.contains("fa-bars")) ? (buttonBurger.classList.replace("fa-bars", "fa-close")) : (buttonBurger.classList.replace("fa-close", "fa-bars"));
  
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 499px
      600: {
        slidesPerView: 2,
        spaceBetweenSlides: 50
      },
      700: {
        slidesPerView: 3,
        spaceBetweenSlides: 50
      }
    }
});
