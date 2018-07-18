//SCROLLING EFFECT
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('navBar').addClass('scroller');
    }
    else {
        $('navBar').removeClass('scroller');
    }
});

// CLICK MENU
$(document).ready(function(){
    $('.menu').click(function(){
        $('.nav-content').toggleClass('active');
    })
})