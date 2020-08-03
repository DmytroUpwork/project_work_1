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
      992: {
        items: 3,
      },
    },
  });
  
  
  //  скрипт прокрутки к якорям =======================================
  $("form[action*=#]").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("action")).offset().top,
        },
        777
      );
    e.preventDefault();
    return false;
  });

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


  // изменение значения селект =====================================
  $(".building").on("click", function () {
    var id = $(this).attr("data-n");
    $(".form-control")
      .find("[value=" + id + "]")
      .prop("selected", true);
  });

  // стрелка селекта =============================================
  $(".select_tick").click(function () {
    var $target = $(this).toggleClass("class_active");
    $(".select_tick").not($target).removeClass("class_active");
  });

  // закрытие стрелок селекта по клику вне элемента =====================
  $(document).mouseup(function (e){ 
		var div = $(".select_tick");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
      $(".select_tick").removeClass("class_active");
		}
	});

});


