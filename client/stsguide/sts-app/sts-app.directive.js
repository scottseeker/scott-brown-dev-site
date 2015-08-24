(function(){
	'use strict';

	angular.module('stsApp')
	.directive('stsGuide', stsGuideDirective);

	function stsGuideDirective(){
		return{
			restrict: 'E',
			templateUrl: 'sts-app/sts-guide.html',
			link: stsGuideLink,
			controller: stsGuideController,
			controllerAs: 'guideVm'
		};

		function stsGuideLink(scope, elem, attrs){

		};

		stsGuideController.$inject['$rootScope', '$document', '$interval', 'guideDataService', 'guideService', 'GUIDE_REFRESH_INTERVAL'];

		function stsGuideController($rootScope, $document, $interval, guideDataService, guideService, GUIDE_REFRESH_INTERVAL){
			var vm = this;

			vm.guideData = [];
			vm.activate = activate;
			vm.refreshGuideData = refreshGuideData;
			var topOffset = 0;
			// initialize
			activate();

			// init function
			function activate() {
				$rootScope.$on('guide:refresh', refreshGuideData);

			    //get main guide data
				refreshGuideData();

				$interval(refreshGuideData, GUIDE_REFRESH_INTERVAL);
                
                handleScrolling();

			}
            
            function handleScrolling() {
                // change channel view position to fixed, and it's overflow to hidden
//                <div id="channels-view">
//                    <ul channels id="channels">
//                        <li channel class="channel" ng-repeat="channel in guideVm.guideData"></li>
//                    </ul>
//                </div>
				$('#channels-view').css('position', 'fixed');
				$('#channels-view').css('overflow', 'hidden');
                
                // change timebar-view to fixed, overflow hidden
//                <div timebar data="guideVm.guideData" id="timebar-view">
//                <ul id="timebar-list">
//                    <li timebar-item class="timebar-item" ng-repeat="time in timebarVm.timebarItems"><button><span class="time-text">{{time.text}}</span></button></li>
//                </ul>
//                </div>
				$('#timebar-view').css('position', 'fixed');
				$('#timebar-view').css('overflow', 'hidden');
                
                // set channel view height to the container that wraps our sts-guide
				$('#channels-view').css('height', $('#outer-container').height());
                // set the inner channels ul to absolute position
				$('#channels').css('position', 'absolute');
                // set the timebar id !!! NONE SET !!!, no id=#timebar
				$('#timebar').css('position', 'absolute');
                
                // use the offset of the container that wraps our sts-guide to adjust our fixed positioned items (outer container for channel's view and timebar)
				$('#channels-view').offset().left=$('#outer-container').offset().left;
				$('#timebar-view').offset().top=$('#outer-container').offset().top+40;
                
                //listen for our scroll event
				$('#sts-guide').on('scroll',function(){
					//var channelsView = document.getElementById('channels-view');
					var channelsView = $('#channels-view');
					//var timebar = document.getElementById('timebar-view');
					var timebar = $('#timebar-list');
					var scrollLeft = $('#sts-guide').scrollLeft();
			    	var scrollTop = $('#sts-guide').scrollTop();
                    console.log("offset sts-guide top");
			    	console.log($('#sts-guide').offset().top);
			    	//timebar.style.top = scrollTop + topOffset +  'px';
			    	//channelsView.style.left = scrollLeft + 'px';
					timebar.css({left: -scrollLeft + 'px'});
					
					$('#channels').css({top: -(scrollTop + topOffset) + 'px'});
                    console.log("outer-container offset left && channelwView.parent().offset().top");
					console.log($('#outer-container').offset().left+ ' '+channelsView.parent().offset().top);
				});

            }
            

			function refreshGuideData() {
				var guideDataPromise = guideDataService.getGuideData();
				guideDataPromise.then(function(promise){
					vm.guideData =  promise.data;
				});
			}
		}
		
	} // end stsGuide Directive

	

})();