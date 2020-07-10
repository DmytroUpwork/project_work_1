$(document).ready(function() {

  //scroll ==========================================================
  $(".course_scroll").on("click", function (e) {
    e.preventDefault();
    fullpage_api.moveTo(3);
    var instance = fullpage_api
      .getActiveSection()
      .item.querySelector(".section_course").fp_iscrollInstance;
    instance.scrollTo(0, -950, 900);
    setTimeout(function () {
      instance.refresh();
    }, 1000 + 150);
  });

  //owl carousel ===================================================
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 25,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  //slide page ======================================================
  new fullpage("main", {});

});

