(function() {
    'use strict';

    var app = angular.module('Avengulars');

    app.controller('HeroCtrl', function($scope, $location, Hero) {

        $scope.hero = Hero;

        $scope.back = function() {
            $location.path('/list');
        };

    });

}());
