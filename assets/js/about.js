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
            imJs.initSlideKeyMembers();
        },
        initSlideKeyMembers() {
            const swiperKeyMembers = new Swiper(".keymembers-swiper", {
                slidesPerView: 1,
                speed: 1500,
                autoplay: {
                    delay: 5000,
                },
            });
        },
    };
    imJs.m();
})(jQuery, window);
