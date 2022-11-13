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
            imJs.initSliderHeroBanner01();
            imJs.initSliderClients01();
        },
        initSliderHeroBanner01() {
            const swiperHeroBanner01 = new Swiper(
                ".hero-banner-01-swiper .swiper-container",
                {
                    slidesPerView: 1,
                    speed: 1000,
                    simulateTouch: false,
                    autoplay: {
                        delay: 5000,
                    },
                    pagination: {
                        el: ".hero-banner-01-swiper .swiper-pagination",
                        clickable: true,
                    },
                    on: {},
                },
            );
        },
        initSliderClients01() {
            const swiperHeroBanner01 = new Swiper(
                ".clients-01-swiper--01 .swiper-container",
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
                ".clients-01-swiper--02 .swiper-container",
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
    };
    imJs.m();
})(jQuery, window);
