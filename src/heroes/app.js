'use strict';

var app = angular
    .module("avengersApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: '/src/heroes/scripts/heroes/views/list.html',
                controller: 'ListCtrl',
                resolve: {
                    Heroes: function(risesOfHeroesFactory) {
                        return risesOfHeroesFactory.getHeroes();
                    }
                }
            })
            .when('/heroes/:id',{
                templateUrl: '/src/heroes/scripts/heroes/views/detail.html',
                controller:'DetailCtrl',
                resolve: {
                    
                }
            })
            .otherwise({redirectTo: '/list'});
    });