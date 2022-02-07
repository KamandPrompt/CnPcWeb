
$(document).ready(function () {
    if(window.location.pathname == '/' || window.location.pathname == '/contact' || window.location.pathname == '/achievement'){
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
            if ($(document).scrollTop() > 20) {
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
    $(".extrabtn").click(function (event) {
        invisibles = document.getElementsByClassName("extracont");
        for (var i = 0; i<invisibles.length; i++) {
            let S = event.target.id;
            let digi = S[S.length - 1];
            let ID = `li${digi}`;
            if (invisibles[i].id === ID) {
                console.log(invisibles[i].style.display);
                if (invisibles[i].style.display === "" || invisibles[i].style.display === "none") {
                    invisibles[i].style.display = "block";
                    let Id = `#pluss${i+1}`;
                    $(Id).removeClass("fa-plus");
                    $(Id).addClass("fa-minus");
                } else {
                    invisibles[i].style.display = "none";
                    let Id = `#pluss${i+1}`;
                    $(Id).removeClass("fa-minus");
                    $(Id).addClass("fa-plus");
                }
            }
        }
    });
    $(".yearBtn").click(function (event) {
        invisibles = document.getElementsByClassName("yearCont");
        for (var i = 0; i<invisibles.length; i++) {
            let S = event.target.id;
            let digi = S[S.length - 1];
            let ID = `yr${digi}`;
            if (invisibles[i].id === ID) {
                console.log(invisibles[i].style.display);
                if (invisibles[i].style.display === "" || invisibles[i].style.display === "none") {
                    invisibles[i].style.display = "block";
                    let Id = `#arrow${i+1}`;
                    $(Id).removeClass("fa-angle-right");
                    $(Id).addClass("fa-angle-down");
                } else {
                    invisibles[i].style.display = "none";
                    let Id = `#arrow${i+1}`;
                    $(Id).removeClass("fa-angle-down");
                    $(Id).addClass("fa-angle-right");
                }
            }
        }
    });
    $('.carousel').carousel({
        interval: 3000
    }).cycle();
});