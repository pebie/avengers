var avosgers = angular.module('avosgers');

//J'ai pas trop compris quand tu demandes de
// dynamiser le statut avec une directive.
// Du coup j'en ait fait une pour la redirection des buttons.

/*
Redirection Directive
ng-link="{{path}}"
"list", "home", "back" => /list
 */
avosgers.directive('ngLink', function($location) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      element.bind('click', go);

      var par = attrs.ngLink;

      //set path to /list or /venger/id
      if (par === "list" || par === "home" || par === "back") {
        var path = "/list";
      } else if (parseInt(par)){
        var path = "/venger/" + par;
      }

      function go() {

        scope.$apply(function() {
            $location.path(path);
        });
      }
    }
  }
});