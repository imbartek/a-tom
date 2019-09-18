$(document).ready(function (){
    $(".main__page--btn").click(function (){
        $('html, body').animate({
            scrollTop: $("#offert").offset().top
        }, 2000);
    });
});