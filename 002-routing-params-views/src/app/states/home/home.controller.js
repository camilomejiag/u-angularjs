(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($log, SITE_NAME, $state, $stateParams, Auth) {
    var vm = this;
    vm.mainTitle = SITE_NAME;
    vm.signUpToday = signUpToday;
    vm.activeUser = $stateParams.activeUser;
    vm.isDisabled = true;
    vm.currentUser = Auth.currentUser();
    vm.simple;

    function signUpToday(){
      if (vm.currentUser === null) {
        $state.go('signin');
      }
    }



  }
})();
