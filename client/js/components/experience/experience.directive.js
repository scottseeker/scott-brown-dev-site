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