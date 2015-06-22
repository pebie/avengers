/**
 * Created by Pebie on 28/04/15.
 */
 var myApp = angular.module('myApp', ['ngRoute','myAppControllers']);

 myApp.config(['$routeProvider',
    function($routeProvider) {

        // Système de routage
        $routeProvider
        .when('/list', {
            templateUrl: 'src/heroes/templates/list.html',
            controller: 'listCtrl',
            resolve: {
                Heroes: function(HeroFactory) {

                    return HeroFactory.getHeroes();

                }
            }
        })
        .when('/detail/:id', {
            templateUrl: 'src/heroes/templates/detail.html',
            controller: 'detailCtrl',
            resolve: {
                  Hero: function($route, HeroFactory) {
                      return HeroFactory.getHero($route.current.params.id);
                  }
              }
        })
        .otherwise({
            redirectTo: '/list'
        });
    }
]);


var myAppControllers = angular.module('myAppControllers', []);
