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
            imJs.initSliderRelatedNews();
        },
        initSliderRelatedNews() {
            const swiperRelatedNews = new Swiper(
                ".related-news-swiper .swiper",
                {
                    slidesPerView: 1,
                    simulateTouch: false,
                    autoplay: {
                        delay: 5000,
                    },
                    spaceBetween: 16,
                    navigation: {
                        nextEl: ".related-news-swiper .swiper-button-next",
                        prevEl: ".related-news-swiper .swiper-button-prev",
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
    };
    imJs.m();
})(jQuery, window);
