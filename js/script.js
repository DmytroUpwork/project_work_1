// document.addEventListener("DOMContentLoaded", function () {

// });

$(document).ready(function () {
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


const $sections_info = document.querySelector(".section_course_page_course");
const $sections = document.querySelectorAll(".img_course");
for (const $section of $sections) {
  $section.onclick = () => {
    document.querySelector('.section_course_page_course').classList.add('active_visible');
    
    // var anchor = $(this);
    // $("html, body")
    //   .stop()
    //   .animate(
    //     {
    //       scrollTop: $(anchor.attr("href")).offset().top,
    //     },
    //     777
    //   );
    // e.preventDefault();
    // return false;
    
  
  };
};