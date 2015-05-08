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
            
            /**
             * Go to hero detail page
             * @param {int} id Hero's unique id
             */
            $scope.showHero = function(id) {
                $location.path('/hero/' + id);
            };

        }
  });

}());
