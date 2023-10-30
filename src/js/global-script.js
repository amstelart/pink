// Если на проекте jQuery
$( document ).ready(function() {
  // code
  $('.accordion-group').ariaAccordion({});

  $(".product-carousel").owlCarousel({
    items: 3,
    nav: true,
    margin: 30,
    loop: true,
    center: true,
    navText: ["<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15 26L3 14L15 2' stroke='#A05175' stroke-width='3' stroke-linecap='round'/></svg>", "<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L14 14L2 26' stroke='#A05175' stroke-width='3' stroke-linecap='round'/></svg>"],
    responsive : {
      0 : {
        items: 1,
        nav: true,
        loop: true,
        center: true,
      },
      480 : {
        items: 3,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 3,
      },
      1200 : {
        items: 4,
        center: false
      },
      1800 : {
        items: 4,
        center: false
      }
    }
  });

  $(".images-carousel").owlCarousel({
    items: 1,
    nav: true,
    margin: 30,
    loop: true,
    center: false,
    navText: ["<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15 26L3 14L15 2' stroke='#A05175' stroke-width='3' stroke-linecap='round'/></svg>", "<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L14 14L2 26' stroke='#A05175' stroke-width='3' stroke-linecap='round'/></svg>"]
  });

  $(".product-action-carousel").owlCarousel({
    items: 1,
    nav: true,
    margin: 30,
    loop: true,
    center: false,
    navText: ["<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15 26L3 14L15 2' stroke='#fff' stroke-width='3' stroke-linecap='round'/></svg>", "<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L14 14L2 26' stroke='#fff' stroke-width='3' stroke-linecap='round'/></svg>"]
  });

  $(".reviews-carousel").owlCarousel({
    items: 3,
    nav: true,
    margin: 30,
    loop: true,
    center: false,
    navText: ["<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15 26L3 14L15 2' stroke='#A05175' stroke-width='3' stroke-linecap='round'/></svg>", "<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L14 14L2 26' stroke='#A05175' stroke-width='3' stroke-linecap='round'/></svg>"]
  });
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
