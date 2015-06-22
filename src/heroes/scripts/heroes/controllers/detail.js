angular
    .module('avengersApp')
    .controller('DetailCtrl', function ($scope, $routeParams, $location, Heroes) {

        $scope.heroes = Heroes.data;
            console.log(Heroes);
            
        $scope.back = function(){
            $location.path('/list');
        }
    });