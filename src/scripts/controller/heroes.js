angular.module("avengersApp").controller("HeroesCtrl", function ($scope, $filter) {

    $scope.heroes = [
        {
            "id":1,
            "name": "Captain America",
            "description": "Sénile et grabataire",
            "status": "0",
            "image": "captain-america.png",
            "age": 90
        },
        {
            "id":2,
            "name": "Iron Man",
            "description": "Riche et célèbre",
            "status": "1",
            "image": "iron-man.png",
            "age": 35
        },
        {
            "id":3,
            "name": "Hawkeye",
            "description": "Rêve secrétement de Widow",
            "status": "2",
            "image": "hawkeye.png",
            "age": 40
        },
        {
            "id":4,
            "name": "Hulk",
            "description": "Géant vert, vendeur de maïs",
            "status": "0",
            "image": "hulk.png",
            "age": 39
        },
        {
            "id":5,
            "name": "La veuve noire",
            "description": "Gorgeous",
            "status": "1",
            "image": "widow.png",
            "age": 24
        },
        {
            "id":6,
            "name": "Thor",
            "description": "Viking body buildé",
            "status": "2",
            "image": "thor.png",
            "age": 46
        }
    ];
    $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };
});
var mymodal = angular.module('mymodal', []);
mymodal.controller('ModalCtrl', function ($scope) {
    $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };
});

mymodal.directive('modal', function () {
    return {
        template: '<div class="modal fade">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
        '<h4 class="modal-title">{{ title }}</h4>' +
        '</div>' +
        '<div class="modal-body" ng-transclude></div>' +
        '</div>' +
        '</div>' +
        '</div>',
        restrict: 'E',
        transclude: true,
        replace:true,
        scope:true,
        link: function postLink(scope, element, attrs) {
            scope.title = attrs.title;

            scope.$watch(attrs.visible, function(value){
                if(value == true)
                    $(element).modal('show');
                else
                    $(element).modal('hide');
            });

            $(element).on('shown.bs.modal', function(){
                scope.$apply(function(){
                    scope.$parent[attrs.visible] = true;
                });
            });

            $(element).on('hidden.bs.modal', function(){
                scope.$apply(function(){
                    scope.$parent[attrs.visible] = false;
                });
            });
        }
    };
});