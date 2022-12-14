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
            imJs.tabServices();
            imJs.countNumberAchievements();
            imJs.initSliderClients();
            imJs.initSliderTestimonials();
            imJs.initSliderFeaturedProjects();
            imJs.initSliderStartupProducts();
        },
        initSliderHeroBanner() {
            const swiperHeroBanner = new Swiper(".main-slider-swiper", {
                slidesPerView: 1,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: ".main-slider-swiper .swiper-pagination",
                    clickable: true,
                },
                on: {},
                breakpoints: {
                    1024: { effect: "cards" },
                },
            });
        },
        counterNumberAnimation(qSelector, start = 0, end, duration = 1000) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min(
                    (timestamp - startTimestamp) / duration,
                    1,
                );
                qSelector.text(Math.floor(progress * (end - start) + start));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        },
        countNumberAchievements() {
            const _this = this;
            $(".section-achievements .achievement__item").each(function (
                index,
                achievement,
            ) {
                const item = $(achievement).find("h4");
                const value = item.attr("value");
                _this.counterNumberAnimation(item, 0, value, 1000);
            });
        },
        initSliderClients() {
            const swiperHeroBanner01 = new Swiper(".clients-swiper--01", {
                slidesPerView: 3.8,
                spaceBetween: 16,
                centeredSlides: true,
                loop: true,
                speed: 1500,
                autoplay: {
                    delay: 1500,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 4.5,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 6.5,
                        spaceBetween: 24,
                    },
                    1200: {
                        slidesPerView: 8.5,
                        spaceBetween: 24,
                    },
                    1600: {
                        slidesPerView: 10.5,
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
                    slidesPerView: 2.4,
                    simulateTouch: false,
                    autoplay: {
                        delay: 5000,
                    },
                    spaceBetween: 4,
                    navigation: {
                        nextEl: ".featured-projects-swiper .swiper-button-next",
                        prevEl: ".featured-projects-swiper .swiper-button-prev",
                    },
                    loop: true,
                    breakpoints: {
                        768: {
                            slidesPerView: 3.4,
                            spaceBetween: 8,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    },
                },
            );
        },
        initSliderStartupProducts() {
            const swiperStartupProducts = new Swiper(
                ".startup-products-swiper",
                {
                    slidesPerView: 3.8,
                    spaceBetween: 16,
                    centeredSlides: true,
                    loop: true,
                    speed: 1500,
                    autoplay: {
                        delay: 1500,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 4.5,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 6.5,
                            spaceBetween: 24,
                        },
                        1200: {
                            slidesPerView: 8.5,
                            spaceBetween: 24,
                        },
                        1600: {
                            slidesPerView: 10.6,
                            spaceBetween: 56,
                        },
                    },
                    on: {},
                },
            );
        },
        tabServices() {
            $(".our-services .nav-tabs .nav-link").on("click", function (e) {
                e.preventDefault();
                const _this = $(this);
                $(".our-services .tab-content .tab-pane").each(function (
                    index,
                    tanpane,
                ) {
                    if ($(tanpane).attr("id") == _this.attr("href")) {
                        $(tanpane).addClass("show");
                        _this.addClass("active");
                    } else {
                        $(tanpane).removeClass("show");
                        $(".our-services .nav-tabs .nav-link")
                            .not(_this)
                            .removeClass("active");
                    }
                });
            });
            $(
                ".our-services .nav-tabs .nav-item:first-of-type .nav-link",
            ).addClass("active");
            $(".our-services .tab-content .tab-pane:first-of-type").addClass(
                "show",
            );
        },
    };
    imJs.m();
})(jQuery, window);
