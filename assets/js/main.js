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
            imJs.toggleMenuMobile();
            imJs.hoverHeaderMenuItem();
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
        toggleMenuMobile() {
            $(".header-default .hamburger-icon").on("click", function (e) {
                $(".header-default .main-menu").toggleClass("show");
                $("body").toggleClass("no-scroll");
            });
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
