$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
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

    (function ($) {
        $(function () {
            $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
                $(this)
                    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                    .closest('div.container').find('div.catalog__content')
                    .removeClass('catalog__content_active').eq($(this).index())
                    .addClass('catalog__content_active');
            });
        });
    })(jQuery);

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


    // modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thank').fadeOut('slow');
    });


    // forms validation

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },

            messages: {
                name: "Пожалуйста, введите своё имя",
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильный формат адреса почты"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');


    // masked inputs

    $('input[name=phone]').mask("+380(99)-999-99-99");


    // mailer

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");


            $('form').trigger('reset');
        });

        return false;
    });

    // pageup + smooth scroll 

    $(window).scroll(function (scr) {
        if ($(this).scrollTop() > 900) {
            $('.pageup').fadeIn();
        } else
        {
            $('.pageup').fadeOut();
        }
    });


    function smoothScroll (anchor) {
        $(`a[href=#${anchor}]`).click(function() {
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top-40+"px"});
            return false;
        });
    }

    smoothScroll('up');
    smoothScroll('catalog');
});