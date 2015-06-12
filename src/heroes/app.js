'use strict';

var app = angular
    .module("avengersApp", ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'src/heroes/list.html',
                controller: 'HeroesCtrl'
            })
            .when('/detail/:id',{
                controller:'HeroCtrl',
                templateUrl: 'src/avengers/hero.html'
            })
            .otherwise('/list');
    }]);