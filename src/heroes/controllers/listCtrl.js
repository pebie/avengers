(function() {
    'use strict';

    var app = angular.module('myApp');

    app.controller('listCtrl', function($scope, $location, Heroes) {

        $scope.heroes = Heroes;
        $scope.query = {};
        
        /* Filtre pour l'ordre*/
        $scope.changeOrder = function(filter) {
            $scope.query.order = filter;
        };

    });

}());
