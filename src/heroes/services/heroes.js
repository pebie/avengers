(function() {
    'use strict';

    var app = angular.module('myApp');

    app.factory('HeroFactory', function(urlConfig, $http, $q) {

        return {

            getHeroes: _getHeroes,
            getHero: _getHero

        };

        /**
         * Liste tiré du JSon
         */
        function _getHeroes() {

            var defer = $q.defer();
            $http.get(urlConfig.HEROES)
                .then(function(heroes) {
                    defer.resolve(heroes.data);
                }, function(err) {
                    defer.reject(err);
            });

            return defer.promise;

        }


        function _getHero(id) {
            var defer = $q.defer();
            $http.get(urlConfig.HEROES)
                .then(function(heroes) {
                    var hero = _loopHeroes(heroes.data, id);
                    if(hero !== undefined) {
                        defer.resolve(hero);
                    } else {
                        defer.reject('Expected Hero does not exists!');
                    }

                }, function(err) {
                    defer.reject(err);
                });

            return defer.promise;
        }

  
        function _loopHeroes(heroes, id) {
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
