$(function () {

    if (window.innerWidth < 768) {

        var footer_dropdown = $(".footer-section .footer-drop").on('click', function () {

            footer_dropdown.not(this).removeClass("active");

            footer_dropdown.not(this).siblings(".footer-list-items").slideUp(500);

            $(this).toggleClass("active");

            $(this).siblings(".footer-list-items").slideToggle(500);

        });
    }

})