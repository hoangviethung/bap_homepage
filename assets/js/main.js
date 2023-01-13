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
            imJs.toggleMenuMobile();
            imJs.initNavigationMobile();
            imJs.hoverOffices();
            imJs.hoverHeaderMenuItem();
            $(window).resize(function () {
                imJs.initNavigationMobile();
            });
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
            if ($(window).width() < 1200) {
                $(".nav-sub-items-wrapper")
                    .parent(".nav__item")
                    .addClass("has-sub-nav-mobile");
            } else {
                $(".header-nav__items .nav__item").removeClass(
                    "has-sub-nav-mobile",
                );
            }
            $(".nav__item.has-sub-nav-mobile")
                .unbind("click")
                .click(function () {
                    $(this).find(".nav-sub-items-wrapper").slideToggle();
                    $(".has-sub-nav-mobile")
                        .not(this)
                        .find(".nav-sub-items-wrapper")
                        .slideUp();
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
            const first_office = $(".countries .country__item").eq(0);
            const target_id_first_office = first_office.attr("target");
            first_office.addClass("active");
            $(
                `.section-global-company .image-map .marker[target=${target_id_first_office}]`,
            ).addClass("active");
            $(
                `.section-global-company .location__item[id=${target_id_first_office}]`,
            ).addClass("show");
            //Hover
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

            $(".section-global-company .navigation-mobile .next").on(
                "click",
                function () {
                    const max_office = $(
                        ".section-global-company .location__item",
                    ).length;
                    const current_office = $(
                        ".section-global-company .location__item.show",
                    );
                    let target_id_current_office = Number(
                        current_office.attr("id"),
                    );
                    if (target_id_current_office == max_office) {
                        target_id_current_office = 1;
                    }
                    $(
                        `.section-global-company .location__item[id="${(target_id_current_office += 1)}"]`,
                    ).addClass("show");
                    current_office.removeClass("show");
                },
            );

            $(".section-global-company .navigation-mobile .prev").on(
                "click",
                function () {
                    const max_office = $(
                        ".section-global-company .location__item",
                    ).length;
                    const current_office = $(
                        ".section-global-company .location__item.show",
                    );
                    let target_id_current_office = Number(
                        current_office.attr("id"),
                    );
                    if (target_id_current_office == 1) {
                        target_id_current_office = max_office;
                    }
                    console.log(target_id_current_office);
                    $(
                        `.section-global-company .location__item[id="${(target_id_current_office -= 1)}"]`,
                    ).addClass("show");
                    current_office.removeClass("show");
                },
            );
        },
    };
    imJs.m();
})(jQuery, window);
