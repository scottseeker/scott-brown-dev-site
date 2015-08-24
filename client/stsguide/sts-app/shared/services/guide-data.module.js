(function(){
    //sts guide data service (AJAX calls etc.)
    angular.module('guideDataService', [])
        .constant('GUIDE_DATA_URL', '/data/channels-data.json');
})();