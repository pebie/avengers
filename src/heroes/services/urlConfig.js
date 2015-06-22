(function() {
    'use strict';

    angular
      .module('myAvengers')
      .constant('urlConfig', {
        'HEROES': './mocks/heroes.json'
      });

}());
