angular.module('avengersApp').controller("HeaderCtrl", function ($scope, $filter, $routeParams){

  $scope.model = {
    title: "vengers"
  };

  $scope.getTitle = function() {
    return ("huge application");

  }

});
