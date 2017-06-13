(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/states/home/home.html',
        controller: 'HomeController',
        params: {
          activeUser: {}
        },
        controllerAs: 'homeCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

