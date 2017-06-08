(function() {
  'use strict';

  angular
    .module('angularEx1')
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
      .state ('login', {
        url: '/login',
        templateUrl: 'app/states/login/login.html',
        controller: 'LoginController',
        controllerAs: 'loginCtrl'
      })
      .state ('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/states/dashboard/dashboard.html'
      });
    $urlRouterProvider.otherwise('/');
  }

})();