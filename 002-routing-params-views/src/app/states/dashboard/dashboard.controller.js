(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('DashboardController', DashboardController);
    

  /** @ngInject */
  function DashboardController($log, $stateParams, Auth, $state) {
    var vm = this;
    //vm.activeUser = $stateParams.activeUser;
    vm.activeUser = Auth.currentUser();
    vm.details = details;
    vm.config = config; 

    function details(numero){
      $state.go('detail');
    }

    function config(numero){
      $state.go('config');
    }

  }
})();
