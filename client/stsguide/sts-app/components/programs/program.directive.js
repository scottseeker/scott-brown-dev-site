//sts programs
(function(){
	'use strict';
	angular
		.module('stsApp')
		.directive('program', programDirective);

	function programDirective(){
		return{
			templateUrl: 'sts-app/components/programs/program.directive.html',
		};
	}
	
})();