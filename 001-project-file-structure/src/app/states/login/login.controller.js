(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($log, $location) {
    var vm = this;
    vm.title = "Login";
    vm.login = login;
    vm.name = "";
    vm.password = "";

    function login(){
      $location.path('dashboard');
    }
  }
})();
