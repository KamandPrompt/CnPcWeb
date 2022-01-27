
$(document).ready(function () {
    $(window).scroll(function () {
    if ($(document).scrollTop() > 0) {
        $("#menu").addClass("nav-top");
    } else {
        $("#menu").removeClass("nav-top");
    }
    });
    $(".extraBtn").on("click", function (event) {
        invisibles = document.getElementsByClassName("extraCont");
        for (var i = 0; i<invisibles.length; i++) {
            let S = event.target.id;
            let digi = S[S.length - 1];
            let ID = `msg${digi}`;
            if (invisibles[i].id === ID) {
                console.log(invisibles[i].style.display);
                if (invisibles[i].style.display === "" || invisibles[i].style.display === "none") {
                    invisibles[i].style.display = "block";
                } else {
                    invisibles[i].style.display = "none";
                }
            }
        }
    });
    $('.carousel').carousel({
        interval: 3000
    }).cycle();
});