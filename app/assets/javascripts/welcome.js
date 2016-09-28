 // Place all the behaviors and hooks related to the matching controller here.
 // All this logic will automatically be available in application.js.
 // You can use CoffeeScript in this file: http://coffeescript.org/

 $(document).ready(function() {

   // menu functionality
     $('.menu-toggle').click(function() {
         if ($('.hamburger').hasClass('arrow')) {
            //  $('.hamburger').removeClass('arrow');
            //  $('.atoms-menu-holder').addClass('hide');
             $('.main').removeClass('hide');
         } else {
             $('.menu').toggleClass('open');
             $('.hamburger').toggleClass('hamburger-open');
         }
     });

     $('.add-new').click(function(){
       $('.main-menu').toggle();
       $('.add-new-menu').fadeIn(500);
     });
 });
