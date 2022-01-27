
$(document).ready(function () {
    $(window).scroll(function () {
    if ($(document).scrollTop() > 0) {
        $("#menu").addClass("nav-top");
    } else {
        $("#menu").removeClass("nav-top");
    }
    });
    $('.carousel').carousel({
        interval: 3000
    }).cycle();
});