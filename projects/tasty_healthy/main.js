
$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('back');
    }
    else{
        $('nav').removeClass('back');
    }
});


$(document).ready(function(){ 
    $('nav ul li a').click(function() { 
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
    && location.hostname == this.hostname) { 
    var $target = $(this.hash); 
    $target = $target.length && $target 
    || $('[name=' + this.hash.slice(1) +']'); 
    if ($target.length) { 
    var targetOffset = $target.offset().top; 
    $('html,body') .animate({scrollTop: targetOffset}, 2000); 
    return false; 
            } 
        } 
    }); 
});

