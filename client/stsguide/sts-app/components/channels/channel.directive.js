//sts channel nav
(function(){
	'use strict';

	angular
		.module('stsApp')
		.directive('channel', channelDirective);

	function channelDirective(){
		return{
			templateUrl: 'sts-app/components/channels/channel.directive.html',
			controller: ChannelController,
			controllerAs: 'channelVm',
			bindToController: true
		};
		
		ChannelController.$inject = ['guideService'];

		function ChannelController(guideService){
			var vm = this;
			vm.getChannelDetails = guideService.getChannelDetails;
		}
	};
	
})();