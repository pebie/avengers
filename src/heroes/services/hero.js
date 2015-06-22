(function() {
    'use strict';

    angular.module('avengersApp').factory('HeroFactory', HeroFactory);

    function HeroFactory(urlConfig, $http, $q) {
        return {
            getHeroes: _getHeroes,
            getHero: _getHero
        };

        function _getHeroes() {
            if(localStorage.getItem('heroes') !== null) {
                return JSON.parse(localStorage.getItem('heroes'));
            }

            var defer = $q.defer();
            $http.get(urlConfig.HEROES).then(function(heroes) {
                    localStorage.setItem('heroes', JSON.stringify(heroes.data));
                    defer.resolve(heroes.data);
            }, function(err) {
                defer.reject(err);
            });

            return defer.promise;
        }

        function _getHero(id) {
            if(localStorage.getItem('heroes') !== null) {
                var heroes = JSON.parse(localStorage.getItem('heroes'));
                return _loopHeroes(heroes, id);
            }

            var defer = $q.defer();
            $http.get(urlConfig.HEROES).then(function(heroes) {
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
