(function () {
    'use strict';

    angular
        .module('angularApp')
        .component('dashboardComponent', {
        bindings: {

        },
        templateUrl: 'app/states/dashboard/main-dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboardCtrl'
    });

})();
