// CLICK MENU TO SLIDE
$(document).ready(function(){
    $('.toggle').click(function(){
        $('nav').toggleClass('active');
    })
});

// SCROLLING PAGE
$(document).ready(function(){ 
    $('nav ul li a').click(function() { 
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
    && location.hostname == this.hostname) { 
    var $target = $(this.hash); 
    $target = $target.length && $target 
    || $('[name=' + this.hash.slice(1) +']'); 
    if ($target.length) { 
    var targetOffset = $target.offset().top; 
    $('html,body') .animate({scrollTop: targetOffset}, 1000); 
    return false; 
            } 
        } 
    }); 
});