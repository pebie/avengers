(function() {
    'use strict';

    angular
        .module('Avengulars')
        .controller('HeroCtrl', function($scope, $location, Hero) {

            $scope.hero = Hero;
            $scope.alert = '';


            /**
             * Goes back to list view
             */
            $scope.back = function() {
                $location.path('/list');
            };

        });

}());
