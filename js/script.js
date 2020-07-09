$(document).ready(function() {
  //slide page ======================================================
  new fullpage("main", {});

  //scroll ==========================================================
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

});