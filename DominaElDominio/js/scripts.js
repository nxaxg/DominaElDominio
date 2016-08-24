$(document).ready(function () {
    "use strict";
    myScroller();
    smoothy();
});

//funciones

//select nav
function myScroller() {
    "use strict";
    var tope = 600; /*from top*/
    function posActual() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    $(window).scroll(function () {
        var scroll = posActual(); /*posicion actual*/
        function sticky() {
            $("header").addClass('sticky');
            $(".logo img").attr("src","../img/icon-dd-white.png");
        }

        function selectRemove() {
            return $('.nav-op').removeClass('nav-sel');
        }
        
        if (scroll < tope) {
            //home
            $("header").removeClass('sticky');
            selectRemove();
            $('li:first-child>.nav-op').addClass('nav-sel');
            $(".logo img").attr("src","../img/icon-dd-full-white.png");
        } else if (scroll > tope && scroll < 1500) {
            //dominio
            selectRemove();
            sticky();
            $('li:nth-child(2)>.nav-op').addClass('nav-sel');
        } else if (scroll >= 1500 && scroll < 2550) {
            //normativa
            selectRemove();
            sticky();
            $('li:nth-child(3)>.nav-op').addClass('nav-sel');
        } else if (scroll >= 2500 && scroll < 3300) {
            //team
            selectRemove();
            sticky();
            $('li:nth-child(4)>.nav-op').addClass('nav-sel');
        } else {
            //blog
            selectRemove();
            sticky();
            $('li:nth-child(5)>.nav-op').addClass('nav-sel');
        }
    });
}

//smoothy scrolling
function smoothy() {
    "use strict";
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}