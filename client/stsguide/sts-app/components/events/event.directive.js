//channel event
(function(){
    'use strict';
    angular
        .module('stsApp')
        .directive('event', eventDirective);

        eventDirective.$inject = ['guideService'];

        function eventDirective(guideService){
            return{
                templateUrl: 'sts-app/components/events/event.directive.html',
                link: eventLink,
                controller: eventController,
                controllerAs: 'eventVm'
            };

            function eventLink(scope, elem, attrs){
                var element = elem[0].style;
                guideService.setTimeBasedDisplay(element, scope.event.start_time, scope.event.duration);
            }


            function eventController(guideService){
                var vm = this;
                vm.doSomething = function(arg){
                    console.log(arg+': was clicked.');
                };
            }

            //end eventDirective
        }

        

})();