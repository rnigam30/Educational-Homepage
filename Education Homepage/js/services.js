$(function () {
    $(".service-cards").slick({

        dots: true,

        arrows: false,

        slidesToShow: 3,

        slidesToScroll: 1,

        infinite: false,

        responsive: [
            {

                breakpoint: 768,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1
                }
            }
        ]
    });
});
