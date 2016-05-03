(function(){
    'use strict';
    
    angular.module('sb.navigation')
    .directive('sbNavigation', sbNavigation);
    
    /**
     * navigation directive for scott-brown-dev
     */
    function sbNavigation(){
        return {
            templateUrl: 'js/components/navigation/navigation.directive.html',
            controller: SbNavigationController,
            controllerAs: 'nav'
        }
    }
    
    /**
     * controller for navigation directive
     * @constructor
     */
    function SbNavigationController() {
        var vm = this;
        vm.name = "Scott Brown";
        vm.title = "Developer";
        
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
            // TO DO
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
            
         
          
            console.log('end navigation directive: vm');
            console.log(vm);
        }
    }
    
}());