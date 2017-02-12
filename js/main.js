// Collapses mobile dropdown after clicking nav item
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});


// Smooth Scroll Function
$("#nav a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();
   // store hash
   var hash = this.hash;
   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
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


