$(document).ready(function() {
    $('.js--our-services').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

        }, {
            offset: '60px;'
        });

        $('.js--services').waypoint(function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
    
            }, {
                offset: '60px;'
            });
    

    /* For Animation onscroll

        $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
           window.location.hash = hash;
          });

    */

          /* mobile navi*/

          $('.js--nav-icon').click(function() {
            var nav = $('.js--main-nav');
            var icon = $('.js--nav-icon');
            
            nav.slideToggle(200);
             
            if(icon.attr('name') == 'menu-outline') {
                icon.attr('name', 'close-outline');
             } else {
                icon.attr('name', 'menu-outline');
               }
            
             
         });
    

});