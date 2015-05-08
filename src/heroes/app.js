/**
 * Created by Pebie on 28/04/15.
 */
//start here
(function() {
    'use strict';

    var app = angular.module('Avengulars', ['ngRoute']);

    // Route definition and configuration
    app.config(function ($routeProvider) {

        $routeProvider
            .when('/list', {
                templateUrl: 'src/heroes/views/list.html',
                controller: 'ListCtrl',
                resolve: {
                    Heroes: function(HeroFactory) {

                        return HeroFactory.getHeroes();

                    }
                }
            })
            .when('/hero/:id', {
                templateUrl: 'src/heroes/views/hero.html',
                controller: 'HeroCtrl',
                resolve: {
                    Hero: function($route, HeroFactory) {
                        return HeroFactory.getHero($route.current.params.id);
                    }
                }
            })
            .otherwise('/list');

    });

}());
