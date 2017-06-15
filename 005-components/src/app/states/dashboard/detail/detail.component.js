(function () {
    'use strict';

    angular
        .module('angularApp')
        .component('detailComponent', {
        bindings: {

        },
        templateUrl: 'app/states/dashboard/detail/detail.html',
        controller: 'DashboardDetailController',
        controllerAs: 'detailCtrl'
    });

})();
