(function () {
    'use strict';
    var controllerId = 'VengerCtrl';

    angular.module('avosgers').controller(controllerId, VengerCtrl);

    function VengerCtrl($scope, heroInfo, $location, $routeParams, $timeout) {

        /*
        heroInfo = hero data
        Returned on route resolve
         */
        $scope.hero = heroInfo;


        /*
        Changes status of hero
        Stores value in local dtorage for data persistence
        statusChange({{value}})
         */
        $scope.statusChange = function(status) {
            var id = $routeParams.vengerId;
            localStorage.setItem(id, status);
            $scope.hero.status = parseInt(status);

            /*
            J'ai pas voulu rajouter ng-Animate,
            du coup j'affiche les alertes avec un ng-show.
             */
            if (status === 0) {
                $scope.success = true;
                $scope.failure = false;
                $timeout(function(){
                    $scope.success = false;
                }, 1000);

            } else {
                $scope.failure = true
                $scope.success = false;
                $timeout(function(){
                    $scope.failure = false;
                }, 1000);
            }
        };

    }
})();