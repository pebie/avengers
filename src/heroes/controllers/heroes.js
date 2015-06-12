angular.module("avengersApp").controller("HeroesCtrl", function ($scope, heroesFactory, $log, $location) {
    $scope.orderProp = "status";

    $scope.heroes = 0;
    console.log($scope.heroes);

    heroesFactory.getHeroes().then(function (data) {
        $scope.heroes = data;
    }, function (error) {
        $log.warn(error)
    });

    console.log($scope.heroes);

    $scope.click = function (hero) {
        $scope.selectedHero = hero;
    };

    $scope.see = function (heroId) {
        $location.path('/heroes/' + heroId);
    };

});