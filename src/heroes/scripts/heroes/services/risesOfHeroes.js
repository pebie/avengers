var app = angular.module("avengersApp");

app.factory('risesOfHeroesFactory', function($http, $q)
{
        return {
            getHeroes: _getHeroes
        };

    function _getHeroes() {

        var deferred = $q.defer();
        $http.get('./mocks/heroes.json').then(function (data)
        {
            deferred.resolve(data);
        }, function(error)
        {
            deferred.reject(error);
        });
        
        return deferred.promise
    }


    
});
