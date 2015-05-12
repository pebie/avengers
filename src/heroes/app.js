/**
 * Created by SharpMax on 09/05/15.
 */

'use strict';

var avosgers = angular.module('avosgers', ['ngRoute']);

//ROUTING
avosgers.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      //LIST
      when('/list', {
        templateUrl: 'src/templates/list.html',
        controller: 'ListCtrl',
        resolve: {
            /*
            On route resolve returns data list of heroes to controller
            Using heroesData service
             */
            heroesList: function(heroesData) {
                return heroesData.getData();
            }
        }
      }).
      //VENGER/ID
      when('/venger/:vengerId', {
        templateUrl: 'src/templates/venger.html',
        controller: 'VengerCtrl',
        resolve: {
             /*
            On route resolve return data of a hero to controller
            Using heroesData service
             */
            heroInfo: function(heroesData, $route) {
                var heroId = $route.current.params.vengerId;
                return heroesData.getHero(heroId);
            }
        }
      }).
      //AUTO REDIRECT -> /LIST
      otherwise({
        redirectTo: '/list'
      });
  }]);