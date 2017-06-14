(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(routerDashboard);

  /** @ngInject */
  function routerDashboard($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        abstract: true,
        url: '/dashboard',
        params: {
          activeUser: {}
        },
        views: {
          "navbar@": {
            templateUrl: 'app/states/dashboard/navbar/navbar.html',
            controller: 'NavbarController',
            controllerAs: 'navbarCtrl'
          },
          "general@": {
            templateUrl: 'app/states/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboardCtrl'
          }
        }
    })
      .state('config', {
        url: '/config',
        parent: 'dashboard',
        views: {
          "main": {
            templateUrl: 'app/states/dashboard/config/config.html',
            controller: 'ConfigurationController',
            controllerAs: 'configCtrl'
          }
        },
        resolve:{
          promiseObj:  function($http){
              return $http({method: 'GET', url: 'app/states/dashboard/config/config.json'});
          }
        }
      })
      .state('detail', {
        url: '/detail',
        parent: 'dashboard',
        views: {
          "main": {
            templateUrl: 'app/states/dashboard/detail/detail.html',
            controller: 'DetailController',
            controllerAs: 'detailCtrl'
          }
        }
      })
      .state('main', {
        parent: 'dashboard',
        url: '/main',
        views: {
          "main": {
            templateUrl: 'app/states/dashboard/main/main.html',
            controller: 'MainController',
            controllerAs: 'mainCtrl'
          }
        }
      });

  }

})();
