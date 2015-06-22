(function() {
    'use strict';

    angular
      .module('myAvengers')
      .controller('HeroController', function($scope, $location, Hero) {

          $scope.hero = Hero;
          $scope.alert = '';
          
          $scope.back = function() {
              $location.path('/list');
          };

      });

}());
