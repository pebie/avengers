(function() {
    'use strict';

    var app = angular.module('Avengulars');

    app.directive('heroBlock', function() {

        return {
            templateUrl: 'src/heroes/directives/hero-block.html',
            restrict: 'EA',
            controller: heroBlockCtrl,
            scope: {
                hero: '='
            }

        };

        function link(scope, element, attrs) {

        }

        function heroBlockCtrl($scope, $location) {

            $scope.showHero = function(id) {
                $location.path('/hero/' + id);
            };

        }
  });

}());
