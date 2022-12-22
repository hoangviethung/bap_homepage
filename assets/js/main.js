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
            imJs.stickyHeader();
            imJs.hoverOffices();
            if ($(window).width() > 1200) {
                imJs.hoverHeaderMenuItem();
            }
            if ($(window).width() < 1200) {
                imJs.toggleMenuMobile();
                imJs.initNavigationMobile();
            }
        },
        hoverHeaderMenuItem: function (e) {
            let previous_menu_item_hovered;
            $(".header-nav__items .nav__item").hover(
                function () {
                    // over
                    $(this)
                        .find(".nav-sub-items-wrapper")
                        .addClass("menu-item-hovered");
                    if (previous_menu_item_hovered) {
                        if (
                            previous_menu_item_hovered[0].offsetLeft !=
                            $(this)[0].offsetLeft
                        ) {
                            previous_menu_item_hovered
                                .find(".nav-sub-items-wrapper")
                                .removeClass("menu-item-hovered");
                        }
                    }
                },
                function () {
                    previous_menu_item_hovered = $(this);
                },
            );
            $(".header-bar").hover(
                function () {
                    // over
                },
                function () {
                    // out
                    $(".nav-sub-items-wrapper").removeClass(
                        "menu-item-hovered",
                    );
                },
            );
        },
        stickyHeader: function (e) {
            // Hide Header on on scroll down
            let didScroll;
            let lastScrollTop = 0;
            const delta = 5;
            const navbarHeight = $(".header-default").outerHeight();

            $(window).scroll(function (event) {
                didScroll = true;
                if ($(this).scrollTop() > navbarHeight) {
                    $(".header-default").addClass("sticky");
                } else {
                    $(".header-default").removeClass("sticky");
                }
            });

            setInterval(function () {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 250);

            function hasScrolled() {
                const st = $(window).scrollTop();

                // Make sure they scroll more than delta
                if (Math.abs(lastScrollTop - st) <= delta) return;

                // If they scrolled down and are past the navbar, add class .nav-up.
                // This is necessary so you never see what is "behind" the navbar.
                if (st > lastScrollTop && st > navbarHeight) {
                    // Scroll Down
                    $(".header-default")
                        .removeClass("header-down")
                        .addClass("header-up");
                } else {
                    // Scroll Up
                    if (st + $(window).height() < $(document).height()) {
                        $(".header-default")
                            .removeClass("header-up")
                            .addClass("header-down");
                    }
                }
                lastScrollTop = st;
            }
        },
        initNavigationMobile() {
            $(".nav-sub-items-wrapper")
                .parent(".nav__item")
                .addClass("has-sub-nav-mobile");
            $(".has-sub-nav-mobile").on("click", function () {
                $(".has-sub-nav-mobile")
                    .not(this)
                    .find(".nav-sub-items-wrapper")
                    .slideUp();
                $(this).find(".nav-sub-items-wrapper").slideToggle();
            });
        },
        toggleMenuMobile() {
            $(".header-default .headertoggle-full-navigation").on(
                "click",
                function (e) {
                    $(this).toggleClass("active");
                    $(".header-default .header-function").toggleClass("show");
                    $("body").toggleClass("no-scroll");
                },
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
        backToTopInit: function () {
            // declare variable
            const scrollTop = $(".backto-top");
            $(window).scroll(function () {
                // declare variable
                const topPos = $(this).scrollTop();
                // if user scrolls down - show scroll to top button
                if (topPos > 100) {
                    $(scrollTop).css("opacity", "1");
                } else {
                    $(scrollTop).css("opacity", "0");
                }
            });

            //Click event to scroll to top
            $(scrollTop).on("click", function () {
                $("html, body").animate(
                    {
                        scrollTop: 0,
                        easingType: "linear",
                    },
                    500,
                );
                return false;
            });
        },
    };
    imJs.m();
})(jQuery, window);
