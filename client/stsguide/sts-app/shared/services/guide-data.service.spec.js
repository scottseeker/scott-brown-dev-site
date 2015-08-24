(function(){
	'use strict';

	describe('guideDataService module guideDataService', function() {

		var guideDataService;
		var httpBackend;
		var promise;
		var DATA_URL;

		beforeEach(module('guideDataService'));

		beforeEach(inject(function (_guideDataService_, $httpBackend, $q, GUIDE_DATA_URL) {
		    guideDataService = _guideDataService_;
		    httpBackend = $httpBackend;
			promise = $q.defer();
			DATA_URL = GUIDE_DATA_URL;
		}));

		describe('getGuideData', function() {

			it('is a function', function() {
				expect(guideDataService.getGuideData).toBeDefined();
				expect(typeof guideDataService.getGuideData).toEqual('function');
			});

			it('returns a promise from guideData', function(){
				expect(guideDataService.getGuideData().then).toBeDefined();
			});

			it('retrieves JSON guide data for a successful request', function(done) {
				var response = { "guideData" : "data" };

				httpBackend.expect('GET', DATA_URL).respond(response);
				guideDataService.getGuideData().then(function(data) {
					expect(data.data).toEqual(response);
					done();
				});
				httpBackend.flush();
			});

			it('rejects the promise for an error response', function() {
				var successFn = jasmine.createSpy('successFn');
				var errorFn = jasmine.createSpy('errorFn');

				httpBackend.expect('GET', DATA_URL).respond(500, 'Internal Server Error');
				guideDataService.getGuideData().then(successFn, errorFn);
				httpBackend.flush();

				expect(successFn).not.toHaveBeenCalled();
				expect(errorFn).toHaveBeenCalled();
			});

		});

	});

}());