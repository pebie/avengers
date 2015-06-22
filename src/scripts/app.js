'use strict';

var app = angular
    .module("avengersApp", ['ngRoute', 'ui.bootstrap'])
    .config(function ($routeProvider){
        $routeProvider
            .when('/list', {
                templateUrl: 'views/list.html',
                controller: 'HeroList'
            })
            .when('/hero/:id',{
                templateUrl: 'views/hero.html',
                controller:'HeroCtrl'

            })
            .otherwise('/list');
    });
//app.config()
//app.controller()
//app.filter() etc...


