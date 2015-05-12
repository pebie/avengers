(function() {
    'use strict';

    angular
        .module('Avengulars')
        .directive('heroBlock', heroBlock);


    function heroBlock() {

       return {
           templateUrl: 'src/heroes/directives/hero-block.html',
           restrict: 'EA',
           controller: heroBlockCtrl,
           scope: {
               hero: '='
           }

       };

       function link(scope, element, attrs) {

       }

       function heroBlockCtrl($scope, $location) {

           /**
            * Go to hero detail page
            * @param {int} id Hero's unique id
            */
           $scope.showHero = function(id) {
               $location.path('/hero/' + id);
           };

       }
   }

}());
