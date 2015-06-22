/**
 * Created by Pebie on 28/04/15.
 */
//start here
'use strict';

var app = angular
    .module("avengersApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: 'src/heroes/views/list.html',
                controller: 'ListController'
            })
            .when('/detail/:id',{
                controller:'DetailController',
                templateUrl: 'src/heroes/views/detail.html'
            })
            .otherwise('/list');
    });


