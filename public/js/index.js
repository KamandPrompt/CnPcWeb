
$(document).ready(function () {
    if(window.location.pathname == '/'){
        $(window).scroll(function () {
            if ($(document).scrollTop() > 0) {
                $("#menu").addClass("nav-top");
                $("#menu").addClass("navbar-fixed-top");
            } else {
                $("#menu").removeClass("nav-top");
                $("#menu").addClass("navbar-fixed-top");
            }
        });
    }
    else{
        $("#menu").removeClass("navbar-fixed-top");
        $(window).scroll(function () {
            if ($(document).scrollTop() > 40) {
                $("#menu").addClass("navbar-fixed-top");
                $("#menu").addClass("nav-top");
            } else {
                $("#menu").removeClass("nav-top");
                $("#menu").removeClass("navbar-fixed-top");
            }
        });
    }
    $(".extraBtn").click(function (event) {
        invisibles = document.getElementsByClassName("extraCont");
        for (var i = 0; i<invisibles.length; i++) {
            let S = event.target.id;
            let digi = S[S.length - 1];
            let ID = `msg${digi}`;
            if (invisibles[i].id === ID) {
                console.log(invisibles[i].style.display);
                if (invisibles[i].style.display === "" || invisibles[i].style.display === "none") {
                    invisibles[i].style.display = "block";
                    let Id = `#plus${i+1}`;
                    $(Id).removeClass("fa-plus");
                    $(Id).addClass("fa-minus");
                } else {
                    invisibles[i].style.display = "none";
                    let Id = `#plus${i+1}`;
                    $(Id).removeClass("fa-minus");
                    $(Id).addClass("fa-plus");
                }
            }
        }
    });
    $('.carousel').carousel({
        interval: 3000
    }).cycle();
});