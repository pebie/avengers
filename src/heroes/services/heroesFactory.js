// Service de récupération des données des héros

(function () {
    'use strict';

    angular
      .module('avengersApp')
      .factory('heroesFactory', heroesFactory);

    function heroesFactory(urlConfig, $http, $log, $q) {

        var service = {
            getHeroes: _getHeroes
        };

        return service;

        function _getHeroes() {
            var defer = $q.defer();
            $http.get(urlConfig.HEROES_LIST).then(function (data, status, headers, config) {
                defer.resolve(data, status, headers, config);
            }, function (data, status) {
                $log.error('erreur', status);
                defer.reject(data);
            });
            return defer.promise;
        }
    }


})();
