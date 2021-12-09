$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        adaptiveHeight: true,

        prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/next.svg"></button>',

        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });
});