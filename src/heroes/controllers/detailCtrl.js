(function() {
    'use strict';

    var app = angular.module('myApp');

    app.controller('detailCtrl', function($scope, $location, Hero) {

        $scope.hero = Hero;
        $scope.alert = '';


        /** retour a la list         */
        $scope.back = function() {
            $location.path('/list');
        };

    });

}());
