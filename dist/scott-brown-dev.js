(function(){
    angular.module('scottbrown',['sb.navigation', 'sb.carousel', 'sb.summary', 'sb.skills', 'sb.experience', 'sb.footer']);
}());
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
(function(){
    'use strict';
    
    angular.module('sb.carousel',[]);
}());
(function(){
    'use strict';
    
    angular.module('sb.experience')
    .directive('sbExperience', sbExperience);
    
    /**
     * experience direction for scott-brown-dev
     */
    function sbExperience(){
        return {
            templateUrl: 'js/components/experience/experience.directive.html'
        }
    }
    
}());
(function(){
    'use strict';
    
    angular.module('sb.experience',[]);
}());
(function(){
    'use strict';
    
    angular.module('sb.footer')
    .directive('sbFooter', sbFooter);
    
    /**
     * skills direction for scott-brown-dev
     */
    function sbFooter(){
        return {
            templateUrl: 'js/components/footer/footer.directive.html'
        }
    }
    
}());
(function(){
    'use strict';
    
    angular.module('sb.footer',[]);
}());
(function(){
    'use strict';
    
    angular.module('sb.navigation')
    .directive('sbNavigation', sbNavigation);
    
    /**
     * navigation direction for scott-brown-dev
     */
    function sbNavigation(){
        return {
            templateUrl: 'js/components/navigation/navigation.directive.html',
            controller: SbNavigationController,
            controllerAs: 'vm'
        }
    }
    
    /**
     * controller for navigation directive
     * @constructor
     */
    function SbNavigationController() {
        var vm = this;
        vm.name = "Scott Brown",
        vm.title = "Developer"
        
        activate();
        
        
        function activate() {
            var topoffset = 50;
            
            
            
            // activate scroll spy
            $('body').scrollspy({
                target: 'header .navbar',
                offset: topoffset
            });
            
            // add inbody class when
            var hash = $(this).find('li.active a').attr('href');
            if(hash !== '#featured') {
                console.log(' adding inbody');
               $('header nav').addClass('inbody'); 
            } else {
               $('header nav').removeClass('inbody');
            }
            
            // Add an inbody class to nav 
            console.log('register scrollspy event');
            // TODO
            // REPLACE, NOT WORKING WITH ANGULAR SETUP
            $('.navbar-fixed-top').on('activate.bs.scrollspy', function(){
                console.log('activate.bs.scrollspy');
                var hash = $(this).find('li.active a').attr('href');
                if(hash !== '#featured') {
                    console.log('adding inbody');
                  $('header nav').addClass('inbody'); 
                } else {
                  $('header nav').removeClass('inbody');
                }
            });
            
            //Use smooth scrolling when clicking on navigation
            $('.navbar a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') === 
              this.pathname.replace(/^\//,'') && 
              location.hostname === this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top-topoffset+2
                }, 500);
                return false;
              } //target.length
            } //click function
            }); //smooth scrolling
            
         
          
            
        }
    }
    
}());
(function(){
    'use strict';
    
    angular.module('sb.navigation',[]);
}());
(function(){
    'use strict';
    
    angular.module('sb.summary')
    .directive('sbSummary', sbSummary);
    
    /**
     * summary direction for scott-brown-dev
     */
    function sbSummary(){
        return {
            templateUrl: 'js/components/summary/summary.directive.html'
        }
    }
    
}());
(function(){
    'use strict';
    
    angular.module('sb.summary',[]);
}());
(function(){
    'use strict';
    
    angular.module('sb.skills')
    .directive('sbSkills', sbSkills);
    
    /**
     * skills direction for scott-brown-dev
     */
    function sbSkills(){
        return {
            templateUrl: 'js/components/skills/skills.directive.html'
        }
    }
    
}());
(function(){
    'use strict';
    
    angular.module('sb.skills',[]);
}());