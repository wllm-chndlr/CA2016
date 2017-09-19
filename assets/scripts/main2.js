$(document).ready(function(){
    $('p').mouseenter(function(){
        $('p').fadeTo('fast', 1.00);
    });
    $('p').mouseleave(function(){
        $('p').fadeTo('fast', 0.5);
    });
});