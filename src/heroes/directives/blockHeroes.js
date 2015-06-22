(function() {
    'use strict';

    var app = angular.module('myApp');

    app.directive('blockHeroes', function() {

        return {
            templateUrl: 'src/heroes/directives/block-heroes.html',
            restrict: 'EA',
            controller: heroBlockCtrl,
            scope: {
                hero: '='
            }

        };

        function link(scope, element, attrs) {

        }

        function heroBlockCtrl($scope, $location) {

            /**
             * Chemin pour la page detail             */
            $scope.showHero = function(id) {
                $location.path('/detail/' + id);
            };

        }
  });

}());
