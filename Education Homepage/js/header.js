$(function () {

  var body = $("body");
  var header = $("#cp-header");

  $(window).on("scroll", function () {

    header.toggleClass("scrolled-header", window.scrollY > 40);

  })

  $(".menu-btn,.menu-btn-white").on("click", function () {

    $(".cp-menu,.menu-overlay").addClass("active");

    $(body).addClass("lock-scroll");

  });

  $(".menu-close, .menu-overlay").on("click", function () {

    $(".cp-menu,.menu-overlay,.navbar-bottom .sub-dropdown").removeClass("active");

    $(body).removeClass("lock-scroll");

  });

  $(".navbar-bottom .sub-dropdown").click(function () {

    $(this).toggleClass("active").siblings().removeClass("active");

  });

})
