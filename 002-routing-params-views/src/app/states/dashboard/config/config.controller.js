(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('ConfigurationController', ConfigurationController);

  /** @ngInject */
  function ConfigurationController($log, $stateParams, $timeout, $state, Auth, promiseObj) {
    var vm = this;
    vm.promiseObj = promiseObj;
    vm.detail = $stateParams.number;
    vm.imprimir = vm.promiseObj.data[vm.detail];
    console.log(promiseObj);


    //vm.activeUser = $stateParams.activeUser;
  }
})();
