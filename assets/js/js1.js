

$(document).ready(function(){
    //jquery para el toggle sub menus
    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
 //funcion para bajar y subir el slide bar

    $('.menu-btn').click(function(){
        $('.side-bar').addClass('active');
    });

    $('.close-btn').click(function(){
        $('.side-bar').removeClass('active');
    });



});