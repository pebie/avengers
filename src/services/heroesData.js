(function () {
    'use strict';

    var serviceId = 'heroesData';
    angular.module('avosgers').factory(serviceId, heroesData);

    /*
    Heroes Data Service
     */
    function heroesData($http, $q) {

        //returns full heroes list
        function getData() {
            var defer = $q.defer();
            $http.get('mocks/heroes.json')
                .success(function (data) {
                    //gets local storage status values
                    for (var i in data) {
                        if (localStorage.getItem(data[i].id)) {
                            data[i].status = localStorage.getItem(data[i].id);
                        }
                    }
                    defer.resolve(data);
                })
                .error(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        }

        //returns specific hero data using id
        function getHero(id) {
            var defer = $q.defer();
            $http.get('mocks/heroes.json')
                .success(function (data) {
                    //gets local storage status value
                    if (localStorage.getItem(data[id - 1].id)) {
                        data[id - 1].status = localStorage.getItem(data[id - 1].id);
                    }
                    //le json est ordoné par id, data[id - 1] return le bon hero
                    //[/!\ A OPTIMISER SELON API /!\]
                    defer.resolve(data[id - 1]);
                })
                .error(function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        }

        return {
            getData: getData,
            getHero: getHero
        }

    }
})();