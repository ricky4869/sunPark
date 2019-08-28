$(document).ready(function(){

        $(window).scroll(function() {
          $(".flyin-bottom").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 800) {
              $(this).addClass("flyIn");
            }
          });
        });

        $(window).scroll(function() {
          $(".flyin-left").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 800) {
              $(this).addClass("fly-left");
            }
          });
        });


        $(window).scroll(function() {
          $(".flyin-right").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 800) {
              $(this).addClass("fly-right");
            }
          });
        });

        $(window).scroll(function() {
          $(".hotel-section").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop ) {
              $(".navbar").addClass("fixed");
            }
            else{
              $(".navbar").removeClass("fixed");
            }
          });
        });

        $(".navbar-button").click(function(){
          $(".navbar-list").slideToggle();
        });


        
        $(".goTop a,.navbar-list a,.this-list").on('click', function(event) {

           // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 900, function(){

              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
              });
            } // End if
          });
        })