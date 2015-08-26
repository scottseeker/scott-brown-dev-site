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