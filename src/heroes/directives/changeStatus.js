(function() {
    'use strict';

    var app = angular.module('Avengulars');

    app.directive('changeStatus', function($timeout) {

        function link(scope, element, attrs) {

            /**
             * Change hero status
             * @param {int} i ID of status
             */
            scope.updateStatus = function(i) {
                if(angular.element(element.children()[i]).hasClass('disabled')) {
                    return;
                }
                scope.hero.status = parseInt(i);
                scope.alert = 'success';

                $timeout(function () {
                    scope.alert = '';
                }, 1500);
            };

        }

        return {
            link: link
        };

    });

}());
