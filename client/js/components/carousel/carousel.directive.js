(function(){
    'use strict';
    
    angular.module('sb.carousel')
    .directive('sbCarousel', sbCarousel);
    
    /**
     * carousel direction for scott-brown-dev
     */
    function sbCarousel(){
        return {
            templateUrl: 'js/components/carousel/carousel.directive.html',
            controller: SbCarouselController,
            controllerAs: 'vm'
        }
    }
    
    /**
     * controller for carousel directive
     * @constructor
     */
    function SbCarouselController() {
        var vm = this;
        
        
        activate();
        
        
        function activate() {
            var slideqty = $('#featured .item').length;
            var randSlide = Math.floor(Math.random()*slideqty);
            var wheight = $(window).height();// get the height of the window
            
            
           
            
           
            
            
            
            //adjust height of .fullheight elements
            $(window).resize(function(){
               wheight = $(window).height();// get the height of the window
               $('.fullheight').css('height', wheight); // set window to height
            });
            
             $('#featured .item').eq(randSlide).addClass('active');
             
             // replace IMG inside carousel with bckg image
            $('#featured .item img').each(function(){
                var imgSrc = $(this).attr('src');
                console.log(imgSrc);
                $(this).parent().css({'background-image': 'url(' + imgSrc +')'});
                $(this).remove();
            });
            
             $('.fullheight').css('height', wheight); // set window to height
            
            //Automatically generate carousel indicators
            for (var i = 0; i < slideqty; i++) {
                var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
                    if(i === randSlide) {
                        insertText += 'class="active"';
                    }
                insertText += '></li>';
                $('#featured ol').append(insertText);
            }
            $('.carousel').carousel({
                pause: false
            });
        }
    }
}());