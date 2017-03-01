// Main.js

var $navModal = $('.navModal');
var $hamburger = $('.hamburger');
var $logo = $('.navbar-logo');
var $body = $('body');

function showOrHideModal() {
    if ($navModal.hasClass('show')) {
        $body.removeClass('modal-open');
        $navModal.removeClass('fade-in'); 
        setTimeout(function(){ 
            $navModal.removeClass('show').addClass('hide');
        }, 300);
    }
    else {
        $body.addClass('modal-open');
        $navModal.removeClass('hide').addClass('show');
        setTimeout(function(){ 
            $navModal.addClass('fade-in'); 
        }, 0);
    }
}

function hideModal() {
    if ($navModal.hasClass('show')) {
        $body.removeClass('modal-open');
        $navModal.removeClass('fade-in'); 
        setTimeout(function(){ 
            $navModal.removeClass('show').addClass('hide');
        }, 300);
    }
}

function inactiveHamburger() {
    if ($hamburger.hasClass('is-active')) {
        $hamburger.removeClass('is-active');
    }
}

$('.navModal li a').on('click', function(e) {
    e.preventDefault();
    showOrHideModal();
    $hamburger.toggleClass('is-active');
    
});

$hamburger.on('click', function(e) {
    e.preventDefault();
    $hamburger.toggleClass('is-active');
    showOrHideModal();
});

$logo.on('click', function(e) {
    e.preventDefault();
    inactiveHamburger();
    hideModal();
});





// Smooth Scroll Function
$("#nav a[href^='#']").on('click', function(e) {
    navHeight = 50;

   // prevent default anchor click behavior
   e.preventDefault();
   // store hash
   var hash = this.hash;
   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top - navHeight
       }, 500, function(){
       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
    });
});

// Fade-in h2
$(function() {
    $(window).scroll( function(){
    
        $('.fade-in').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window + 1000;  
          
            if( bottom_of_window > bottom_of_object ){  
                $(this).animate({'opacity':'1'},1500);     
            }
        }); 
    });
});


