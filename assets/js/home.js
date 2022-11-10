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
                    },
                    on: {
                        slideChange: function () {
                            let progress = $(".swiper-progress-bar .progress");

                            if (
                                (this.progress == -0 ||
                                    (this.progress == 1 && this.params.loop)) &&
                                !progress.parent().is(".stopped")
                            ) {
                                progress.css("width", "0");
                                if (this.activeIndex == 0) {
                                    initProgressBar();
                                }
                            }
                            $(
                                ".swiper-progress-bar-container .progress-sections span",
                            )
                                .eq(this.activeIndex)
                                .addClass("active");

                            if (progress.parent().is(".stopped")) {
                                progress.animate(
                                    {
                                        width:
                                            Math.round(
                                                widthParts *
                                                    (this.activeIndex + 1),
                                            ) + "%",
                                    },
                                    this.params.speed,
                                    "linear",
                                );
                            }
                        },
                        touchMove: function () {
                            $(".swiper-progress-bar .progress")
                                .stop()
                                .parent()
                                .addClass("stopped");
                        },
                    },
                },
            );

            const slidersCount = swiperHeroBanner01.params.loop
                ? swiperHeroBanner01.slides.length - 2
                : swiperHeroBanner01.slides.length;

            const widthParts = 100 / slidersCount;

            for (let i = 0; i < slidersCount; i++) {
                if (i == 0) {
                    $(".swiper-progress-bar .progress-sections").append(
                        "<span class='active'></span>",
                    );
                } else {
                    $(".swiper-progress-bar .progress-sections").append(
                        "<span></span>",
                    );
                }
            }

            function initProgressBar() {
                let calcProgress =
                    (slidersCount - 1) *
                    (5000 + swiperHeroBanner01.params.speed);
                calcProgress += 5000;
                $(".swiper-progress-bar .progress").animate(
                    {
                        width: "100%",
                    },
                    calcProgress,
                    "linear",
                );
            }
            initProgressBar();
        },
    };
    imJs.m();
})(jQuery, window);
