(function () {
    'use strict';
    var controllerId = 'ListCtrl';

    angular.module('avosgers').controller(controllerId, ListCtrl);

    function ListCtrl($scope, heroesList, $location) {

        /*
        heroesList = heroes data list
        Returned on route resolve
         */
        $scope.heroes = heroesList;

        /*
        listFilter = value for list orderBy: filter
        Default value for lisFilter
         */
        $scope.listFilter = "id";

    }
})();