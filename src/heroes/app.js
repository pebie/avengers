/**
 * Created by Pebie on 28/04/15.
 */
//start here

// Déclaration du module ngRoute pour l'application

'use strict';

var app = angular
    .module('avengersApp', [

    // Dépendances du "module"

    'avengersAppControllers',
    'ngRoute'
]);

// Configuration du routeur

    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
// Système de routage

          .when('/heroes', {
            templateUrl: '/src/heroes/views/heroesList.html',
            controller: 'HeroesListCtrl'
          })
          .when('/detail/:id', {
            templateUrl: '/src/heroes/views/heroeDetail.html',
            controller: 'HeroeDetailCtrl',
            resolve: {

              heroDetail: function(heroesFactory, $route) {
                var heroId = $route.current.params.id;
                return heroesFactory.getHeroes(heroId);
              }

            }
          })
          .otherwise('/heroes');

    }

  ]);

  var avengersAppControllers = angular
      .module("avengersAppControllers", []);
