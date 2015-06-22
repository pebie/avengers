angular.module("avengersApp").controller("HeroesCtrl", function($scope, heroesFactory){
  $scope.orderProp = "status";
  $scope.heroes = heroesFactory.getHeroes().then(function(data){
    $scope.heroes = data.data;
  })

});
