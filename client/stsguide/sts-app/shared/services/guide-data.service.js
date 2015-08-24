(function () {

    angular.module('guideDataService')
        .factory('guideDataService', guideDataService);

    guideDataService.$inject = ['$http', '$q', 'GUIDE_DATA_URL'];
    function guideDataService($http, $q, GUIDE_DATA_URL) {

        return {
            getGuideData: getGuideData
        };

        /**
         * Retrieves the guide data asynchronously and returns a promise that
         * will resolve to the data once it is retrieved.
         *
         * @returns {Function|promise} that will resolve to the guide data.
         */
        function getGuideData() {
            var guideDataDeferred = $q.defer();
            $http.get(GUIDE_DATA_URL).then(guideDataDeferred.resolve, guideDataDeferred.reject);
            return guideDataDeferred.promise;
        }
    }
})();