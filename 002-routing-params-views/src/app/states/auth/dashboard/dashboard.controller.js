(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($log, $stateParams, Auth, $state) {
    var vm = this;
    vm.activeUser = $stateParams.activeUser;
    console.log(vm.activeUser);

  }
})();
