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
            imJs.initSliderFeaturedProjects();
            imJs.initSliderStartupProducts();
            imJs.hoverOffices();
        },
        initSliderHeroBanner() {
            const swiperHeroBanner = new Swiper(".hero-banner-swiper", {
                slidesPerView: 1,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                },
                effect: "cards",
                grabCursor: true,
                pagination: {
                    el: ".hero-banner-swiper .swiper-pagination",
                    clickable: true,
                },
                on: {},
            });
        },
        initSliderClients() {
            const swiperHeroBanner01 = new Swiper(".clients-swiper--01", {
                slidesPerView: 3,
                spaceBetween: 16,
                freeMode: true,
                speed: 3000,
                loop: true,
                autoplay: {
                    delay: 1000,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                    1200: {
                        slidesPerView: 8,
                    },
                    1600: {
                        slidesPerView: 10,
                        spaceBetween: 32,
                    },
                },
                on: {},
            });
            const swiperHeroBanner02 = new Swiper(".clients-swiper--02", {
                slidesPerView: 3,
                spaceBetween: 16,
                loop: true,
                freeMode: true,
                speed: 3000,
                autoplay: {
                    delay: 1500,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                    1200: {
                        slidesPerView: 8,
                    },
                    1600: {
                        slidesPerView: 10,
                        spaceBetween: 32,
                    },
                },
                on: {},
            });
        },
        initSliderTestimonials() {
            const swiperTestimonials = new Swiper(".testimonials-swiper", {
                slidesPerView: 1,
                simulateTouch: false,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                },
                navigation: {
                    nextEl: ".testimonials-swiper .swiper-button-next",
                    prevEl: ".testimonials-swiper .swiper-button-prev",
                },
                on: {},
            });
        },
        initSliderFeaturedProjects() {
            const swiperFeaturedProjects = new Swiper(
                ".featured-projects-swiper .swiper",
                {
                    slidesPerView: 3,
                    simulateTouch: false,
                    autoplay: {
                        delay: 5000,
                    },
                    spaceBetween: 16,
                    navigation: {
                        nextEl: ".featured-projects-swiper .swiper-button-next",
                        prevEl: ".featured-projects-swiper .swiper-button-prev",
                    },
                    on: {},
                },
            );
        },
        initSliderStartupProducts() {
            const swiperStartupProducts = new Swiper(
                ".startup-products-swiper",
                {
                    slidesPerView: 3,
                    spaceBetween: 16,
                    loop: true,
                    freeMode: true,
                    speed: 3000,
                    autoplay: {
                        delay: 1500,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                        1200: {
                            slidesPerView: 8,
                        },
                        1600: {
                            slidesPerView: 10,
                            spaceBetween: 32,
                        },
                    },
                    on: {},
                },
            );
        },
        hoverOffices() {
            $(".section-global-company .country__item").hover(
                function () {
                    // over

                    const targetId = $(this).attr("target");
                    $(".section-global-company .locations").each(function (
                        index,
                        location,
                    ) {
                        if ($(location).attr("id") == targetId) {
                            $(location).addClass("show");
                        }
                    });
                },
                function () {
                    // out
                    $(".section-global-company .locations").removeClass("show");
                },
            );
        },
    };
    imJs.m();
})(jQuery, window);
