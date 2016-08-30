$(document).ready(function () {
    "use strict";
    myScroller();
    smoothy();
});
//funciones
//select nav
function myScroller() {
    "use strict";
    var tope = 10; /*from top*/
    function posActual() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
    
    function stickyDesk() {
        $("header").addClass('sticky');
        $(".logo img").attr("src", "img/icon-dd-white.png");
    }
    
    function selectRemove() {
        $('.nav-op').removeClass('nav-sel');
        $(".content-img").removeClass("animate-icon");
    }
    
    var windowSize = $(window).width();
    
    
    //LG
    if (windowSize >= 1280) {
        $(window).scroll(function () {
            var scroll = posActual(); /*posicion actual*/

            if (scroll < tope) {
                //home
                $("header").removeClass('sticky');
                $(".logo img").attr("src", "img/icon-dd-full-white.png");
                $(".content-img").removeClass("animate-icon");
            }
            else if (scroll > tope && scroll < 1500) {
                //dominio
                if (scroll < 600) {
                    selectRemove();
                    $('li:first-child>.nav-op').addClass('nav-sel');
                }
                stickyDesk();
                if (scroll > 600) {
                    selectRemove();
                    $('li:nth-child(2)>.nav-op').addClass('nav-sel');
                    $("#dominio .content-img").addClass("animate-icon");
                }
            }
            else if (scroll >= 1500 && scroll < 2550) {
                //normativa
                selectRemove();
                stickyDesk();
                $('li:nth-child(3)>.nav-op').addClass('nav-sel');
                $("#normativa .content-img").addClass("animate-icon");
            }
            else if (scroll >= 2500 && scroll < 3300) {
                //NIC
                selectRemove();
                stickyDsk();
                $('li:nth-child(4)>.nav-op').addClass('nav-sel');
                $("#nic .content-img").addClass("animate-icon");
            }
            else {
                //hosting
                selectRemove();
                stickyDesk();
                $('li:nth-child(5)>.nav-op').addClass('nav-sel');
                $("#hosting .content-img").addClass("animate-icon");
            }
        });
    }
    
    //MD
    if (windowSize < 1280 && windowSize >= 992) {
        $(window).scroll(function () {
            var scroll = posActual(); /*posicion actual*/
            
            if (scroll < tope) {
                //home
                $("header").removeClass('sticky');
                $(".logo img").attr("src", "img/icon-dd-full-white.png");
                $(".content-img").removeClass("animate-icon");
            }
            else if (scroll > tope && scroll < 1800) {
                //dominio
                if (scroll < 600) {
                    selectRemove();
                    $('li:first-child>.nav-op').addClass('nav-sel');
                }
                stickyDesk();
                if (scroll > 600) {
                    selectRemove();
                    $('li:nth-child(2)>.nav-op').addClass('nav-sel');
                    $("#dominio .content-img").addClass("animate-icon");
                }
            }
            else if (scroll >= 1800 && scroll < 3000) {
                //normativa
                selectRemove();
                stickyDesk();
                $('li:nth-child(3)>.nav-op').addClass('nav-sel');
                $("#normativa .content-img").addClass("animate-icon");
            }
            else if (scroll >= 3000 && scroll < 4800) {
                //nic
                selectRemove();
                stickyDesk();
                $('li:nth-child(4)>.nav-op').addClass('nav-sel');
                $("#nic .content-img").addClass("animate-icon");
            }
            else {
                //hosting
                selectRemove();
                stickyDesk();
                $('li:nth-child(5)>.nav-op').addClass('nav-sel');
                $("#hosting .content-img").addClass("animate-icon");
            }
        });
    }
    
    function stickyMob() {
        $("header").addClass('sticky');
    }
    //sm
    if (windowSize < 992 && windowSize >= 768) {
        $(window).scroll(function () {
            var scroll = posActual(); /*posicion actual*/
            
            if (scroll < tope) {
                //home
                $("header").removeClass('sticky');
                $(".content-img").removeClass("animate-icon");
            }
            else if (scroll > tope && scroll < 1800) {
                //dominio
                if (scroll < 600) {
                    selectRemove();
                    $('li:first-child>.nav-op').addClass('nav-sel');
                }
                stickyMob();
                if (scroll > 600) {
                    selectRemove();
                    $('li:nth-child(2)>.nav-op').addClass('nav-sel');
                    $("#dominio .content-img").addClass("animate-icon");
                }
            }
            else if (scroll >= 1800 && scroll < 3000) {
                //normativa
                selectRemove();
                stickyMob();
                $('li:nth-child(3)>.nav-op').addClass('nav-sel');
                $("#normativa .content-img").addClass("animate-icon");
            }
            else if (scroll >= 3000 && scroll < 4800) {
                //nic
                selectRemove();
                stickyMob();
                $('li:nth-child(4)>.nav-op').addClass('nav-sel');
                $("#nic .content-img").addClass("animate-icon");
            }
            else {
                //hosting
                selectRemove();
                stickyMob();
                $('li:nth-child(5)>.nav-op').addClass('nav-sel');
                $("#hosting .content-img").addClass("animate-icon");
            }
        });
    }
    //xs
    if (windowSize < 768) {
        $(window).scroll(function () {
            var scroll = posActual(); /*posicion actual*/
            
            if (scroll < tope) {
                //home
                $("header").removeClass('sticky');
                $(".content-img").removeClass("animate-icon");
            }
            else if (scroll > tope && scroll < 1800) {
                //dominio
                if (scroll < 600) {
                    selectRemove();
                    $('li:first-child>.nav-op').addClass('nav-sel');
                }
                stickyMob();
                if (scroll > 600) {
                    selectRemove();
                    $('li:nth-child(2)>.nav-op').addClass('nav-sel');
                    $("#dominio .content-img").addClass("animate-icon");
                }
            }
            else if (scroll >= 1800 && scroll < 3000) {
                //normativa
                selectRemove();
                stickyMob();
                $('li:nth-child(3)>.nav-op').addClass('nav-sel');
                $("#normativa .content-img").addClass("animate-icon");
            }
            else if (scroll >= 3000 && scroll < 4800) {
                //nic
                selectRemove();
                stickymob();
                $('li:nth-child(4)>.nav-op').addClass('nav-sel');
                $("#nic .content-img").addClass("animate-icon");
            }
            else {
                //hosting
                selectRemove();
                stickyMob();
                $('li:nth-child(5)>.nav-op').addClass('nav-sel');
                $("#hosting .content-img").addClass("animate-icon");
            }
        });
    }
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