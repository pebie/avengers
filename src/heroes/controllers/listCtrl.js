(function() {
    'use strict';

    var app = angular.module('Avengulars');

    app.controller('ListCtrl', function($scope, $location, Heroes) {

        $scope.heroes = Heroes;

    });

}());
