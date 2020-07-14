// document.addEventListener("DOMContentLoaded", function () {

// });

$(document).ready(function () {
      //owl carousel ===================================================
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 35,
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
  
  $(".select_tick").on("click", function () {
    $(this).toggleClass("class_active");
  });



});


