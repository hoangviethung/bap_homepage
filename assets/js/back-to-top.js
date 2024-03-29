(function ($) {
    "use strict";
    $(document).ready(function () {
        "use strict";
        const progressPath = document.querySelector(
            ".roger-progress-parent path",
        );
        const pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition =
            "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
        const updateProgress = function () {
            const scroll = $(window).scrollTop();
            const height = $(document).height() - $(window).height();
            const progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
        };
        updateProgress();
        $(window).scroll(updateProgress);
        const offset = 50;
        const duration = 550;
        jQuery(window).on("scroll", function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(".roger-progress-parent").addClass(
                    "roger-backto-top-active",
                );
                jQuery(".button-play-video-fixed").addClass("active");
            } else {
                jQuery(".roger-progress-parent").removeClass(
                    "roger-backto-top-active",
                );
                jQuery(".button-play-video-fixed").removeClass("active");
            }
        });
        jQuery(".roger-progress-parent").on("click", function (event) {
            event.preventDefault();
            jQuery("html, body").animate({ scrollTop: 0 }, duration);
            return false;
        });
    });
})(jQuery);
