(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $stateParams, $timeout, $state, Auth) {
    var vm = this;
    //vm.activeUser = $stateParams.activeUser;

  }
})();
