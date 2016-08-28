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
    var windowSize = $(window).width();
    
    //lg
    if (windowSize >= 1280 ) {
        $(window).scroll(function () {
            var scroll = posActual(); /*posicion actual*/
            function sticky() {
                $("header").addClass('sticky');
                $(".logo img").attr("src", "img/icon-dd-white.png");
            }

            function selectRemove() {
                return $('.nav-op').removeClass('nav-sel');
            }
            if (scroll < tope) {
                //home
                $("header").removeClass('sticky');
                $(".logo img").attr("src", "img/icon-dd-full-white.png");
            }
            else if (scroll > tope && scroll < 1500) {
                //dominio
                if(scroll<600){
                    selectRemove();
                    $('li:first-child>.nav-op').addClass('nav-sel');
                }
                sticky();
                if(scroll>600){
                    selectRemove();
                    $('li:nth-child(2)>.nav-op').addClass('nav-sel');
                }
            }
            else if (scroll >= 1500 && scroll < 2550) {
                //normativa
                selectRemove();
                sticky();
                $('li:nth-child(3)>.nav-op').addClass('nav-sel');
            }
            else if (scroll >= 2500 && scroll < 3300) {
                //team
                selectRemove();
                sticky();
                $('li:nth-child(4)>.nav-op').addClass('nav-sel');
            }
            else {
                //blog
                selectRemove();
                sticky();
                $('li:nth-child(5)>.nav-op').addClass('nav-sel');
            }
        });
    }
    
    //md
    if(windowSize<1280 && windowSize >= 992){
        $(window).scroll(function () {
            var scroll = posActual(); /*posicion actual*/
            function sticky() {
                $("header").addClass('sticky');
                $(".logo img").attr("src", "img/icon-dd-white.png");
            }

            function selectRemove() {
                return $('.nav-op').removeClass('nav-sel');
            }
            if (scroll < tope) {
                //home
                $("header").removeClass('sticky');
                $(".logo img").attr("src", "img/icon-dd-full-white.png");
            }
            else if (scroll > tope && scroll < 1800) {
                //dominio
                if(scroll<600){
                    selectRemove();
                    $('li:first-child>.nav-op').addClass('nav-sel');
                }
                sticky();
                if(scroll>600){
                    selectRemove();
                    $('li:nth-child(2)>.nav-op').addClass('nav-sel');
                }
            }
            else if (scroll >= 1800 && scroll < 3000) {
                //normativa
                selectRemove();
                sticky();
                $('li:nth-child(3)>.nav-op').addClass('nav-sel');
            }
            else if (scroll >= 3000 && scroll < 4800) {
                //team
                selectRemove();
                sticky();
                $('li:nth-child(4)>.nav-op').addClass('nav-sel');
            }
            else {
                //blog
                selectRemove();
                sticky();
                $('li:nth-child(5)>.nav-op').addClass('nav-sel');
            }
        });
    }
    
    //sm
    if(windowSize<992 && windowSize >= 768){
        $(window).scroll(function () {
            var scroll = posActual(); /*posicion actual*/
            function sticky() {
                $("header").addClass('sticky');
            }

            function selectRemove() {
                return $('.nav-op').removeClass('nav-sel');
            }
            if (scroll < tope) {
                //home
                $("header").removeClass('sticky');
            }
            else if (scroll > tope && scroll < 1800) {
                //dominio
                if(scroll<600){
                    selectRemove();
                    $('li:first-child>.nav-op').addClass('nav-sel');
                }
                sticky();
                if(scroll>600){
                    selectRemove();
                    $('li:nth-child(2)>.nav-op').addClass('nav-sel');
                }
            }
            else if (scroll >= 1800 && scroll < 3000) {
                //normativa
                selectRemove();
                sticky();
                $('li:nth-child(3)>.nav-op').addClass('nav-sel');
            }
            else if (scroll >= 3000 && scroll < 4800) {
                //team
                selectRemove();
                sticky();
                $('li:nth-child(4)>.nav-op').addClass('nav-sel');
            }
            else {
                //blog
                selectRemove();
                sticky();
                $('li:nth-child(5)>.nav-op').addClass('nav-sel');
            }
        });
    }
    
    //xs
    if(windowSize<768){
        $(window).scroll(function () {
            var scroll = posActual(); /*posicion actual*/
            function sticky() {
                $("header").addClass('sticky');
            }

            function selectRemove() {
                return $('.nav-op').removeClass('nav-sel');
            }
            if (scroll < tope) {
                //home
                $("header").removeClass('sticky');
            }
            else if (scroll > tope && scroll < 1800) {
                //dominio
                if(scroll<600){
                    selectRemove();
                    $('li:first-child>.nav-op').addClass('nav-sel');
                }
                sticky();
                if(scroll>600){
                    selectRemove();
                    $('li:nth-child(2)>.nav-op').addClass('nav-sel');
                }
            }
            else if (scroll >= 1800 && scroll < 3000) {
                //normativa
                selectRemove();
                sticky();
                $('li:nth-child(3)>.nav-op').addClass('nav-sel');
            }
            else if (scroll >= 3000 && scroll < 4800) {
                //team
                selectRemove();
                sticky();
                $('li:nth-child(4)>.nav-op').addClass('nav-sel');
            }
            else {
                //blog
                selectRemove();
                sticky();
                $('li:nth-child(5)>.nav-op').addClass('nav-sel');
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