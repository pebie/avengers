(function() {
    'use strict';

    angular
        .module('myAvengers')
        .directive('heroBlock', function() {

            return {
                templateUrl: 'src/heroes/views/heroBlock.html',
                restrict: 'E',
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
