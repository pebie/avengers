angular.module('avengersApp').directive('heroInfo', ['$interval', function() {
  return {
    templateUrl: '/src/heroes/directives/heroInfo.html',
    restrict: 'E',
    scope: {
      hero: '=info',
      format: '='
    },
  };


}])
