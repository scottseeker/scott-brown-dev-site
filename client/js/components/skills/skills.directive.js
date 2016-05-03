(function(){
    'use strict';
    
    angular.module('sb.skills')
    .directive('sbSkills', sbSkills);
    
    /**
     * skills directive for scott-brown-dev
     */
    function sbSkills(){
        return {
            templateUrl: 'js/components/skills/skills.directive.html'
        }
    }
    
}());