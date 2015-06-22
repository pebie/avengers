(function() {
    'use strict';
    
    angular
      .module('myAvengers')
      .controller('HeroesListController', function($scope, $location, Heroes) {

        $scope.heroes = Heroes;
        $scope.query = {};

        $scope.changeOrder = function(filter) {
            $scope.query.order = filter;
        };

      });

}());
