// Если на проекте jQuery
$( document ).ready(function() {
  // code
  $(".star-rating-svg").starRating({
    totalStars: 5,
    strokeWidth: 0,
    useGradient: false,
    activeColor: '#A05175',
    useFullStars: true,
    starSize: 25,
    readOnly: true
  });

  $(".send-rating").starRating({
    initialRating: 3.5,
    strokeWidth: 0,
    useFullStars: false,
    useGradient: false,
    activeColor: '#A05175',
    ratedColor: '#A05175',
    hoverColor: '#A05175',
    starSize: 25,
    disableAfterRate: true,
    onHover: function(currentIndex, currentRating, $el){
      $('.live-rating').text(currentIndex);
    },
    onLeave: function(currentIndex, currentRating, $el){
      $('.live-rating').text(currentRating);
    }
  });

  $('.accordion-group').ariaAccordion({});

  $(".product-carousel").owlCarousel({
    items: 3,
    nav: true,
    dots: false,
    margin: 30,
    loop: true,
    center: true,
    navText: ["<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15 26L3 14L15 2' stroke='#A05175' stroke-width='3' stroke-linecap='round'/></svg>", "<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L14 14L2 26' stroke='#A05175' stroke-width='3' stroke-linecap='round'/></svg>"],
    responsive : {
      0 : {
        items: 2,
        nav: false,
        loop: false,
        center: false,
      },
      // 480 : {
      //   items: 3,
      // },
      // 768 : {
      //   items: 3,
      // },
      992 : {
        stagePadding: 50,
        center: false,
        items: 4,
        nav: false
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
    dots: false,
    margin: 30,
    loop: true,
    center: false,
    navText: ["<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15 26L3 14L15 2' stroke='#A05175' stroke-width='3' stroke-linecap='round'/></svg>", "<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L14 14L2 26' stroke='#A05175' stroke-width='3' stroke-linecap='round'/></svg>"]
  });

  $(".product-action-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    margin: 30,
    loop: true,
    center: false,
    navText: ["<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15 26L3 14L15 2' stroke='#fff' stroke-width='3' stroke-linecap='round'/></svg>", "<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L14 14L2 26' stroke='#fff' stroke-width='3' stroke-linecap='round'/></svg>"],
    responsive : {
      0 : {
        nav: false,
      },
      768 : {
        nav: true,
      }
    }
  });

  $(".cart-dop__carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    margin: 30,
    loop: true,
    center: false,
    navText: ["<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15 26L3 14L15 2' stroke='#fff' stroke-width='3' stroke-linecap='round'/></svg>", "<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L14 14L2 26' stroke='#fff' stroke-width='3' stroke-linecap='round'/></svg>"],
    responsive : {
      0 : {
        nav: false,
      },
      768 : {
        nav: true,
        items: 3
      }
    }
  });

  $(".reviews-carousel").owlCarousel({
    items: 3,
    nav: false,
    dots: false,
    margin: 30,
    loop: true,
    center: false,
    navText: ["<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M15 26L3 14L15 2' stroke='#A05175' stroke-width='3' stroke-linecap='round'/></svg>", "<svg width='17' height='28' viewBox='0 0 17 28' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L14 14L2 26' stroke='#A05175' stroke-width='3' stroke-linecap='round'/></svg>"],
    responsive : {
      0 : {
        items: 1,
        nav: false
      },
      480 : {
        items: 2,
        nav: false
      },
      992 : {
        items: 3,
        nav: false
      },
      1290 : {
        items: 3,
        nav: true,
      }
    }
  });

  // product view carousel
  var sync1 = jQuery("#sync1");
  var sync2 = jQuery("#sync2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1
    .owlCarousel({
    items: 1,
    slideSpeed: 3000,
    margin: 16,
    nav: false,

    //   animateOut: 'fadeOut',
    autoplayHoverPause: true,
    autoplaySpeed: 1400, //過場速度
    dots: false,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        item: 1,
        autoplay: false
      },
      600: {
        items: 1,
        autoplay: false
      }
    },
    responsiveRefreshRate: 200,
    navText: [
      '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
      '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'
    ]
  })
    .on("changed.owl.carousel", syncPosition);

  sync2
    .on("initialized.owl.carousel", function() {
    sync2
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: slidesPerPage,
    dots: false,
    margin: 16,
    //   nav: true,
    smartSpeed: 1000,
    slideSpeed: 1000,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2
    .find(".owl-item.active")
    .first()
    .index();
    var end = sync2
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = jQuery(this).index();
    sync1.data("owl.carousel").to(number, 300, true);
  });
  // product view carousel END
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
