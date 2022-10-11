$(".slider").slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: false,
    autoplay: false,
});

$(".suppliers-slider").slick({
    slidesToShow: 6,
    slidesToScroll: 3,
    dots: false,
    autoplay: false,
});

// shrink logo on scroll
function resizeLogo() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 80) {
            $(".navbar").addClass("smaller");
        } else {
            if ($(".navbar").hasClass("smaller")) {
                $(".navbar").removeClass("smaller");
            }
        }
    });
}

$(document).ready(function() {
    resizeLogo();
});
