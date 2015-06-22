(function() {
    'use strict';
    angular.module('avengersApp').controller('HeroCtrl', function($scope, $location, Hero) {
        $scope.hero = Hero;
        $scope.alert = '';
        $scope.back = function() {
            $location.path('/heroes');
        };
    });
}());
