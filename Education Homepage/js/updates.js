$(function () {
    $(".hide").hide();
    $(".view-less").hide();
    $(".view-more").on("click", function () {
        $(".hide").slideDown(1000);
        $(".view-less").show();
        $(this).hide();
    });
    $(".view-less").on("click", function () {
        $(".hide").slideUp(1000);
        $(".view-more").show();
        $(this).hide();
    });
})