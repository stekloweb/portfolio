/* Main.js */

var $body = $('body');
var $logo = $('.navbar-logo');
var $hamburger = $('.hamburger');
var $navModal = $('.navModal');
var $webWorkItem = $('.web-work-item');
var $webWorkModal = $('.web-work-modal');
var $webWorkClose = $('.web-work-modal-close');


/*
------------------------------------------------------------------------------------
Show or Hide Navigation Modal (Mobile Only)
------------------------------------------------------------------------------------
 */
function showOrHideNavModal() {
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


/*
------------------------------------------------------------------------------------
Hide Navigation Modal (Mobile Only)
------------------------------------------------------------------------------------
 */
function hideNavModal() {
    if ($navModal.hasClass('show')) {
        $body.removeClass('modal-open');
        $navModal.removeClass('fade-in'); 
        setTimeout(function(){ 
            $navModal.removeClass('show').addClass('hide');
        }, 300);
    }
}


/*
------------------------------------------------------------------------------------
Open or close mobile nav and toggle "is-active" class on hamburger menu 
when menu item is clicked
------------------------------------------------------------------------------------
 */
$('.navModal li a').on('click', function(e) {
    e.preventDefault();
    showOrHideNavModal();
    $hamburger.toggleClass('is-active');
    
});


/*
------------------------------------------------------------------------------------
Toggle "is-active" class on hamburger menu
------------------------------------------------------------------------------------
 */
$hamburger.on('click', function(e) {
    e.preventDefault();
    $hamburger.toggleClass('is-active');
    showOrHideNavModal();
});


/*
------------------------------------------------------------------------------------
Hide mobile nav and deactivate hamburger menu when home button is clicked
------------------------------------------------------------------------------------
 */
$logo.on('click', function(e) {
    var $this = $(this);
    e.preventDefault();

    if ($hamburger.hasClass('is-active')) {
        $hamburger.removeClass('is-active');
    }

    hideNavModal();
});


/*
------------------------------------------------------------------------------------
Show or Hide Web Work Modal
------------------------------------------------------------------------------------
 */
$webWorkItem.on('click', function(e) {
    var $this = $(this);
    var $next = $this.next();

    e.preventDefault();

    if ($next.hasClass('show')) {
        $body.removeClass('modal-open');
        $next.removeClass('fade-in'); 
        setTimeout(function(){ 
            $next.removeClass('show').addClass('hide');
        }, 300);
    }
    else {
        $body.addClass('modal-open');
        $next.removeClass('hide').addClass('show');
        setTimeout(function(){ 
            $next.addClass('fade-in'); 
        }, 100);
    }
});

/*
------------------------------------------------------------------------------------
Close Web Work Modal
------------------------------------------------------------------------------------
 */
$webWorkClose.on('click', function(e) {
    var $this = $(this);
    var $parentModal = $this.closest('.web-work-modal');

    e.preventDefault();
    
    if ($parentModal.hasClass('show')) {
        $body.removeClass('modal-open');
        $parentModal.removeClass('fade-in'); 
        setTimeout(function(){ 
            $parentModal.removeClass('show').addClass('hide');
        }, 300);
    }
});


/*
------------------------------------------------------------------------------------
Smooth Scroll Effect
------------------------------------------------------------------------------------
 */
$("#nav a[href^='#']").on('click', function(e) {
    var navHeight = 50;
    var hash = this.hash;
    e.preventDefault();
   
    $('html, body').animate({
        scrollTop: $(hash).offset().top - navHeight}, 500, function(){
    });
});


/*
------------------------------------------------------------------------------------
Fade in h2 in "About" section
------------------------------------------------------------------------------------
 */
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


