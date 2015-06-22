(function() {
    'use strict';

    angular
        .module('myAvengers', ['ngRoute'])
        .config(function ($routeProvider) {

        $routeProvider
            .when('/list', {
                templateUrl: 'src/heroes/views/heroesList.html',
                controller: 'HeroesListController',
                resolve: {
                    Heroes: function(HeroData) {
                        return HeroData.getHeroes();
                    }
                }
            })
            .when('/hero/:id', {
                templateUrl: 'src/heroes/views/hero.html',
                controller: 'HeroController',
                resolve: {
                    Hero: function($route, HeroData) {
                        return HeroData.getHero($route.current.params.id);
                    }
                }
            })
            .otherwise('/list');

    });

}());
