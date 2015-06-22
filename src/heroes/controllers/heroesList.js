// Contrôleur de la liste des personnages

avengersAppControllers.controller('HeroesListCtrl', function($scope, heroesFactory, $log, $location){
    $scope.orderProp = "status";
    $scope.message = "Bienvenue sur la liste des personnages";

    heroesFactory.getHeroes().then(function (data) {
      $scope.heroes = data;
    }, function (error) {
      $log.warn(error)
    });

      $scope.click = function (hero) {
        $scope.selectedHero = hero;
      };

      $scope.see = function (heroId) {
        $location.path('/heroes/' + heroId);
      };
  });
