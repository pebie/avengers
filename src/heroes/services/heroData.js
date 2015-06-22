(function() {
    'use strict';

    angular
      .module('myAvengers')
      .factory('HeroData', function(urlConfig, $http, $q) {

        return {
            getHeroes: _getHeroes,
            getHero: _getHero
        };

        function _getHeroes() {
            var defer = $q.defer();
            $http.get(urlConfig.HEROES)
                .then(function(heroes) {
                    defer.resolve(heroes.data);
                });
            return defer.promise;
        }

        function _getHero(id) {
            var defer = $q.defer();
            $http.get(urlConfig.HEROES)
                .then(function(heroes) {
                    var hero = _parseHeroes(heroes.data, id);
                    if(hero !== undefined) {
                        defer.resolve(hero);
                    } else {
                        defer.reject('This hero is not listed');
                    }
                });
            return defer.promise;
        }

        function _parseHeroes(heroes, id) {
            var result;
            heroes.forEach(function(hero) {
                if(hero.id === parseInt(id)) {
                    result = hero;
                }
            });

            return result;
        }

      });

}());
