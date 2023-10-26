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
    center: false
  });

  $(".product-action-carousel").owlCarousel({
    items: 1,
    nav: true,
    margin: 30,
    loop: true,
    center: false
  });

  $(".reviews-carousel").owlCarousel({
    items: 3,
    nav: true,
    margin: 30,
    loop: true,
    center: false
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
