(function () {
    'use strict';
    function heroesService($http, $q, urlConfig) {

        var service = {
            getHeroes: _getHeroes
        };

        return service;

        function _getHeroes() {
            var defer = $q.defer();
            $http.get(urlConfig.HEROES_LIST).then(function (obj) {
                defer.resolve(obj.data);
            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        }
    }

    angular.module('avengersApp')
        .factory('heroesService', heroesService);

})();