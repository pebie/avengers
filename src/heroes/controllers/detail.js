angular
.module('avengersApp')
.controller('DetailController', function ($scope, heroesService, $routeParams, $location) {
    
    $scope.params = $routeParams;

    heroesService.getHeroes().then(function (data) {
        $scope.hero = data[$routeParams.id-1];
    }, function (error) {
        $log.warn(error)
    });

    $scope.back = function(){
        $location.path('/list');
    }
});