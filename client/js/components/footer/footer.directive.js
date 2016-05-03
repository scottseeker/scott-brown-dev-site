(function(){
    'use strict';
    
    angular.module('sb.footer')
    .directive('sbFooter', sbFooter);
    
    /**
     * footer directive for scott-brown-dev
     */
    function sbFooter(){
        return {
            templateUrl: 'js/components/footer/footer.directive.html'
        }
    }
    
}());