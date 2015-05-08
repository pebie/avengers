(function() {
    'use strict';

    var app = angular.module('Avengulars');

    app.factory('HeroFactory', function(urlConfig, $http, $q) {

        return {

            getHeroes: _getHeroes,
            getHero: _getHero

        };

        /**
         * Returns a list of all heroes
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

        /**
         * Returns one hero using ID
         * @param {int} id heroes id
         */
        function _getHero(id) {
            var defer = $q.defer();
            $http.get(urlConfig.HEROES)
                .then(function(heroes) {
                    var hero = _loopHeroes(heroes.data, id);
                    if(hero !== undefined) {
                        defer.resolve(hero);
                    } else {
                        defer.reject('Wanted Hero does not exists!');
                    }

                }, function(err) {
                    defer.reject(err);
                });

            return defer.promise;
        }

        /**
         * Check if Hero exists.
         * If it does, it returns Hero, if not, returns false.
         * @param {obj} heroes JSON containing all heroes
         * @param {int} id ID of wanted hero
         */
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
