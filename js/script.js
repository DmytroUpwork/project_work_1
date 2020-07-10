$(document).ready(function() {

  //scroll ==========================================================
  // new fullpage("main", {});



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



  // $("main").fullpage({
  //   navigation: true,
  //   anchors: ["firstPage", "secondPage"],
  //   scrollOverflow: true,
  //   normalScrollElements: ".author_popup, .overlay, .sidebar, .lg-visible",
  // });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // document.querySelector("#form_email").onwheel = (e) => e.stopPropagation();

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



});

