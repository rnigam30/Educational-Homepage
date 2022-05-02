$(function () {
    $(".cities-wrapper").slick({

        dots: false,

        arrows: true,

        prevArrow: "<img src='./images/countries/arrow-left.jpg' alt='arrow-left' class='arrow-left'>",

        nextArrow: "<img src='./images/countries/arrow-right.jpg' alt='arrow-right' class='arrow-right'>",

        slidesToShow: 4,

        slidesToScroll: 1,

        infinite: false,

        // autoplay: true,

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
