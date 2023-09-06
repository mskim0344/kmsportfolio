// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     loop: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    autoHeight : true,
    autowidth : true
  },
});