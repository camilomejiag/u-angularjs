(function () {
    'use strict';

    angular
        .module('angularApp')
        .component('configComponent', {
        bindings: {

        },
        templateUrl: 'app/states/dashboard/config/config.html',
        controller: 'DashboardConfigController',
        controllerAs: 'configCtrl'
    });

})();
