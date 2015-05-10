(function() {
    'use strict';

    angular
        .module('Avengulars')
        .factory('HeroFactory', HeroFactory);

        function HeroFactory(urlConfig, $http, $q) {

            return {

                getHeroes: _getHeroes,
                getHero: _getHero

            };

            /**
             * Returns a list of all heroes
             */
            function _getHeroes() {

                if(localStorage.getItem('heroes') !== null) {

                    return JSON.parse(localStorage.getItem('heroes'));

                }

                var defer = $q.defer();
                $http.get(urlConfig.HEROES)
                    .then(function(heroes) {
                        localStorage.setItem('heroes', JSON.stringify(heroes.data));
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

                if(localStorage.getItem('heroes') !== null) {

                    var heroes = JSON.parse(localStorage.getItem('heroes'));
                    return _loopHeroes(heroes, id);
                }

                var defer = $q.defer();
                $http.get(urlConfig.HEROES)
                    .then(function(heroes) {
                        localStorage.setItem('heroes', JSON.stringify(heroes.data));
                        var hero = _loopHeroes(heroes.data, id);
                        if(hero !== false) {
                            defer.resolve(hero);
                        } else {
                            defer.reject('Expected Hero does not exists!');
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
                var result = false;

                heroes.forEach(function(hero) {
                    if(hero.id === parseInt(id)) {
                        result = hero;
                    }
                });

                return result;
            }

        }

}());
