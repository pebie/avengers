(function() {
    'use strict';

    var app = angular.module('Avengulars');

    app.controller('ListCtrl', ListCtrl);

    function ListCtrl($scope, $location, Heroes) {

        $scope.heroes = Heroes;
        $scope.query = {};

        $scope.changeOrder = function(filter) {
            $scope.query.order = filter;
        };

   }

}());
