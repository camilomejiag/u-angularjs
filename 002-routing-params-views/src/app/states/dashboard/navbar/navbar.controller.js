(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('NavbarController', NavbarController);
    

  /** @ngInject */
  function NavbarController($log, $stateParams, Auth, $state) {
    var vm = this;
    vm.activeUser = Auth.currentUser();
    vm.main = main;
    vm.home = home;
    vm.logout = logout;

    function main(){
      $state.go('main', {activeUser:vm.activeUser});
    }

    function home(){
      $state.go('home', {activeUser:vm.activeUser});
    }

    function logout(){
      Auth.logOut(vm.activeUser);
      $state.go('home');
    }

  }
})();
