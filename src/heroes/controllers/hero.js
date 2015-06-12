angular
    .module('avengersApp')
    .controller('HeroCtrl', function ($scope, $routeParams, $location) {
        $scope.params = $routeParams;
        $scope.back = function(){
            $location.path('/heroes');
        }
    });