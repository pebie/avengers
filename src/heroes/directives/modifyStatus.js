(function() {
    'use strict';

    var app = angular.module('myApp');

    app.directive('modifyStatus', function($timeout) {

        function link(scope, element, attrs) {

            /**
             * Pour modifier le status
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
