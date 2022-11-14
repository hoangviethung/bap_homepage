(function ($) {
    "use strict";
    const imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            (this._window = $(window)),
                (this._document = $(document)),
                (this._body = $("body")),
                (this._html = $("html"));
        },
        methods: function (e) {
            imJs.initSliderHeroBanner();
            imJs.initSliderClients();
            imJs.initSliderTestimonials();
        },
        initSliderHeroBanner() {
            const swiperHeroBanner = new Swiper(
                ".hero-banner-swiper .swiper-container",
                {
                    slidesPerView: 1,
                    speed: 1000,
                    simulateTouch: false,
                    autoplay: {
                        delay: 5000,
                    },
                    pagination: {
                        el: ".hero-banner-swiper .swiper-pagination",
                        clickable: true,
                    },
                    on: {},
                },
            );
        },
        initSliderClients() {
            const swiperHeroBanner01 = new Swiper(
                ".clients-swiper--01 .swiper-container",
                {
                    slidesPerView: 10,
                    spaceBetween: 32,
                    freeMode: true,
                    speed: 3000,
                    autoplay: {
                        delay: 1000,
                    },
                    on: {},
                },
            );
            const swiperHeroBanner02 = new Swiper(
                ".clients-swiper--02 .swiper-container",
                {
                    slidesPerView: 10,
                    spaceBetween: 32,
                    freeMode: true,
                    speed: 3000,
                    autoplay: {
                        delay: 1500,
                    },
                    on: {},
                },
            );
        },
        initSliderTestimonials() {
            const swiperTestimonials = new Swiper(
                ".testimonials-swiper .swiper-container",
                {
                    slidesPerView: 1,
                    simulateTouch: false,
                    autoplay: {
                        delay: 5000,
                    },
                    navigation: {
                        nextEl: ".testimonials-swiper .swiper-button-next",
                        prevEl: ".testimonials-swiper .swiper-button-prev",
                    },
                    on: {},
                },
            );
        },
    };
    imJs.m();
})(jQuery, window);
