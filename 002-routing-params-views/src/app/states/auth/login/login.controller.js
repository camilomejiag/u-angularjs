(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('AuthLoginController', AuthLoginController);

  /** @ngInject */
  function AuthLoginController($log, $stateParams, Auth, $state) {
    var vm = this;
    vm.error = false;
    vm.currentUser = $stateParams.currentUser;
    console.log(vm.currentUser);

    vm.logIn = logIn;

   	function logIn(){
   		if(Auth.logIn(vm.currentUser)){
   			$state.go('main', {activeUser:vm.currentUser});
   		}else{
   			vm.error = true;
   		}
   	}

  }
})();
