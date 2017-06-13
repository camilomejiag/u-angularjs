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
        controllerAs: 'homeCtrl'
      })
      .state('card', {
        templateUrl: 'app/components/card/card.html',
        parent: 'home'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
