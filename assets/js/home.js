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
            imJs.hoverOffices();
        },
        initSliderHeroBanner() {
            const swiperHeroBanner = new Swiper(".main-slider-swiper", {
                slidesPerView: 1,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                },
                effect: "cards",
                pagination: {
                    el: ".main-slider-swiper .swiper-pagination",
                    clickable: true,
                },
                on: {},
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
                    slidesPerView: 1,
                    simulateTouch: false,
                    autoplay: {
                        delay: 5000,
                    },
                    spaceBetween: 16,
                    navigation: {
                        nextEl: ".featured-projects-swiper .swiper-button-next",
                        prevEl: ".featured-projects-swiper .swiper-button-prev",
                    },
                    breakpoints: {
                        575: { slidesPerView: 2 },
                        1024: {
                            slidesPerView: 3,
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
        hoverOffices() {
            $(".section-global-company [target]").hover(
                function () {
                    // over
                    const _this = $(this);
                    $(".section-global-company .location__item").each(function (
                        index,
                        location,
                    ) {
                        if ($(location).attr("id") == _this.attr("target")) {
                            $(
                                ".section-global-company .location__item",
                            ).removeClass("show");

                            $(".section-global-company [target]").removeClass(
                                "active",
                            );

                            $(
                                `.section-global-company [target=${_this.attr(
                                    "target",
                                )}]`,
                            ).addClass("active");

                            $(location).addClass("show");
                        }
                    });
                },
                function () {
                    // out
                },
            );
            $(".section-global-company .location__item").hover(
                function () {
                    // over
                },
                function () {
                    // out
                    $(".section-global-company [target]").removeClass("active");
                    $(this).removeClass("show");
                },
            );
        },
    };
    imJs.m();
})(jQuery, window);
