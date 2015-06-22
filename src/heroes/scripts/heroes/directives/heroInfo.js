angular
    .module('avengersApp')
    .directive('heroInfo', function() {
  return {
    templateUrl: 'src/heroes/scripts/heroes/directives/heroInfo.html',
    restrict: 'E'
  };
});