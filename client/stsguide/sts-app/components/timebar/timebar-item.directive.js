(function(){
	'use strict';
	angular
		.module('stsApp')
		.directive('timebarItem', timebarItemDirective);

		function timebarItemDirective(guideService){
			return{
				link: timebarItemLink,
				controller: timebarItemController,
				controllerAs: 'vm'
			};

			function timebarItemLink(scope, elem, attrs){
                var element = elem[0].style;
               		guideService.setTimeBasedDisplay(element,scope.time.text*guideService.timeBlockMinutes, guideService.timeBlockMinutes);
            }

			function timebarItemController($scope){
				var vm = this;
			}

		}

		timebarItemDirective.$inject = ['guideService'];

})();