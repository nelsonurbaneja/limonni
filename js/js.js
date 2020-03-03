
$(document).ready(function(){

    $('.menu-vertical li:has(ul)').click(function(e){
        e.preventDefault();
        if ($(this).hasClass('active-vertical')) {
            $(this).removeClass('active-vertical');
            $(this).children('ul').slideUp();
        } else {
            $('.menu-vertical li ul').slideUp();
            $('.menu-vertical li').removeClass('active-vertical');
            $(this).addClass('active-vertical');
            $(this).children('ul').slideDown();
        }
    });

    // Correccion de los enlaces

    $('.menu-vertical li ul li a').click(function(){
        window.location.href = $(this).attr("href");
    });

    // sacar el menu Vertical
    $('#toggleVertical').click(function(){
        $('.menu-vertical').slideToggle();
    })


    $(window).resize(function(){
        if ($(document).width() > 780) {
            $('.menuVertical .menu-vertical').css({'display' : 'block'}); 
        }
        if ($(document).width() < 780) {
            $('.menuVertical .menu-vertical').css({'display' : 'none'}); 
            $('.menu-vertical li ul').slideUp();
            $('.menu-vertical li').removeClass('active-vertical');
        }
    })
    
});







