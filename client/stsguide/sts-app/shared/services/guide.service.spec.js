(function(){
	'use strict';

	describe('guideService module guideService', function() {
		var guideService;

		// mock controller (so we don't have to mock all the services it uses)
      	beforeEach(module('guideService', function($provide, $controllerProvider) {
              // provide mock services and controllers         
              $provide.value('guideDataSerice', function(){
              });
      	}));
		beforeEach(inject(function (_guideService_) {
		    guideService = _guideService_;		    
		}));

		it('guideService methods are created', function(){
			expect(guideService.getChannelDetails).toBeDefined();
			expect(guideService.setTimeBasedDisplay).toBeDefined();
		});

	});

}());