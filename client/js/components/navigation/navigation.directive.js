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
            controller: SubNavigationController,
            controllerAs: 'vm'
        }
    }
    
    /**
     * controller for navigation directive
     * @constructor
     */
    function SubNavigationController() {
        var vm = this;
        vm.name = "Scott Brown",
        vm.title = "Developer"
        
        activate();
        
        
        function activate() {
            
        }
    }
    
}());