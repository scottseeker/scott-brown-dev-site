(function(){
	'use strict';

	//sts guide general service (click handlers, display etc.)
	angular.module('guideService').factory('guideService', GuideService);

	GuideService.$inject = ['guideDataService'];
	function GuideService(guideDataService){

		this.timeSpanHours = 24;
		this.timeBlockMinutes = 30;
		this.pixelsPerHour = 154;
		this.pixelsPerMinute = this.pixelsPerHour/60;
		this.timeBlockHours = this.timeBlockMinutes/60;
		this.timeBlockWidth = this.timeBlockHours*this.pixelsPerHour;
		this.timeBlockCount = this.timeSpanHours/this.timeBlockHours;

		return {
			timeSpanHours: this.timeSpanHours,
			timeBlockMinutes: this.timeBlockMinutes,
			pixelsPerHour: this.pixelsPerHour,
			pixelsPerMinute : this.pixelsPerMinute ,
			timeBlockHours: this.timeBlockHours,
			timeBlockWidth: this.timeBlockWidth,
			timeBlockCount: this.timeBlockCount,
			getChannelDetails: getChannelDetails,
			setTimeBasedDisplay: setTimeBasedDisplay
		};

		//get channel details
		function getChannelDetails(index){
			alert(index);
		}

		//set channel program position
		function setTimeBasedDisplay(element, startTime, duration){
			element.left =  startTime*this.pixelsPerMinute+'px';
			element.width = duration*this.pixelsPerMinute+'px';
		}

		/*
		TODO: some of these functions may be moved to a service 
		called 'guide-display', for all display and positioning features
		*/
	}
})();