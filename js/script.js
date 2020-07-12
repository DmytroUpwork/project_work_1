$(document).ready(function() {

  //scroll ==========================================================
  // new fullpage("main", {});



  // $(".course_scroll").on("click", function (e) {
  //   e.preventDefault();
  //   fullpage_api.moveTo(3);
  //   var instance = fullpage_api
  //     .getActiveSection()
  //     .item.querySelector(".section_course").fp_iscrollInstance;
  //   instance.scrollTo(0, -950, 900);
  //   setTimeout(function () {
  //     instance.refresh();
  //   }, 1000 + 150);
  // });

  //owl carousel ===================================================
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 25,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });


  // изменение значения селект =====================================
  $(".building").on("click", function () {
    var id = $(this).attr("data-n");
    $(".select")
      .find("[value=" + id + "]")
      .prop("selected", true);
  });

  // временный скрипт прокрутки=======================================
  $("a[href*=#]").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top,
        },
        777
      );
    e.preventDefault();
    return false;
  });

});





