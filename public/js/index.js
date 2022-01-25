
$(document).ready(function () {
    $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $("#menu").addClass("navbar-fixed-top");
    } else {
        $("#menu").removeClass("navbar-fixed-top");
    }
    });
});