angular
.module("avengersApp")
.controller("ListController", function ($scope, heroesService, $log, $location) {
	
    $scope.orderProp = "status";

    heroesService.getHeroes().then(function (data) {
        $scope.heroes = data;
    }, function (error) {
        $log.warn(error)
    });

    $scope.click = function (hero) {
        $location.path('/detail/' + hero.id);
    };

});