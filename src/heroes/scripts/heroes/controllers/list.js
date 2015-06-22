angular
    .module('avengersApp')
    .controller('ListCtrl', ListCtrl);

    function ListCtrl($location, $scope, Heroes) 
    {

            $scope.heroes = Heroes.data;
            console.log(Heroes);
           
            $scope.click = function(hero)
            {
                $scope.selectedHero = hero;
            };

            $scope.changeStatus = function (prop)  
            {
                $scope.orderProp = prop;
            };

            $scope.see = function (heroId, name) {
            $location.path('/heroes/' + heroId + name);
            };
    }