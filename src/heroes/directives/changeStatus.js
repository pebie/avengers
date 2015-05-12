(function() {
    'use strict';

    angular
        .module('Avengulars')
        .directive('changeStatus', function($timeout) {

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
                    var local = JSON.parse(localStorage.getItem('heroes'));
                    local.forEach(function(el, i) {
                        if(el.id === scope.hero.id) {
                            el.status = scope.hero.status;
                        }
                    });
                    localStorage.setItem('heroes', JSON.stringify(local));
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
