(function(){
	'use strict';
	angular
		.module('stsApp')
		.directive('timebar', timebarDirective);

		timebarDirective.$inject = ['guideService'];
		function timebarDirective(guideService){
			return{
				templateUrl: 'sts-app/components/timebar/timebar.directive.html',
                scope: {
                  guideData: '=data'
                },
				controller: TimebarController,
				controllerAs: 'timebarVm',
                bindToController: true
			};

            TimebarController.$inject = ['$scope'];
			function TimebarController($scope){
                var vm = this;
                vm.timebarItems = [];
				vm.earliestTime = 0;

				//TODO: better way to generate time blocks
				$scope.$watch(function(){return vm.guideData}, function(){
					if(vm.guideData && vm.guideData[0]){
						vm.earliestTime = vm.guideData[0].guide.events[0].start_time;
						//using t is temporary until we get time data into the JSON sample
						for(var t = 0; t< guideService.timeBlockCount; t++){
							var timebarItem = {text:t};
							vm.timebarItems.push(timebarItem);
						};
					}
				});
			}
		}

})();