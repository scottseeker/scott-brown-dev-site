(function(){
	'use strict';

	angular.module('stsApp',[
		'guideDataService',
		'guideService',
		'duScroll'
	]).constant('GUIDE_REFRESH_INTERVAL', 600000);

})();