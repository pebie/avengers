(function() {
    'use strict';

    var app = angular.module('Avengulars');

    app.controller('HeroCtrl', function($scope, $location, Hero) {

        $scope.hero = Hero;
        $scope.alert = '';


        /**
         * Goes back to list view
         */
        $scope.back = function() {
            $location.path('/list');
        };

    });

}());
