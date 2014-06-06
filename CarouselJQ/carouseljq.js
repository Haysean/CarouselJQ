
 /******************************************************
 *                                                     *
 *        CarouselJq                                   *
 *                                                     *
 *        Released under the MIT license               *
 *        http://opensource.org/licenses/MIT           *      
 *                                                     *
 *        Copyright (c) Haysean Maharajah              *
 *                                                     *
 ******************************************************/


$(document).ready(function(){
     
     /*<---------------------------------OPTIONS---------------------------------------->*/
     // Pause time speed
     var pause = 7000;

     // Slider speed
     var speed = 350;

     // Easing (swing/linear)
     var easing = "swing";



     /*<---------------------------------CODE---------------------------------------->*/
     
     // Carousel initial settings
     $("#carousel").css({"overflow": "hidden"});

     // Records carousel height and width for later use
     var docWidth = $("#carousel").width();
     var docHeight = $("#carousel div").height();     

     // Initially hides all child divs of id carousel
     $("#carousel > div").hide();

     // Sets a min height for teh carousel to prevent it from changing during transitions
     $("#carousel").css({"min-height": docHeight});

     // Starst by fading in initial div
     $("#carousel > div:first-child").fadeIn();

     // setInterval function to keep looping carousel
     var interval = setInterval(function(){
          
          $("#carousel > div:first-child").show();

          $("#carousel > div:first-child").animate({left: docWidth * -1}, speed, easing, function(){

               $(this).hide();
               $("#carousel > div:last-child").after($(this));
               $("#carousel > div:first-child").css({left: docWidth});
               $("#carousel > div:first-child").show();
               $("#carousel > div:first-child").animate({left: 0}, speed, easing);               

          });

     }, pause);     

     
});
