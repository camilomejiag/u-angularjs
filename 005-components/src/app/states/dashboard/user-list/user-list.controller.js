(function () {
  'use strict';

  angular
    .module('angularApp')
    .controller('UserListController', UserListController);

  /** @ngInject */
  function UserListController ($timeout) {
    var vm = this;
    vm.selectedUser = selectedUser;
    vm.users = [
              {
                id: 1,
                firstName: 'Andres',
                lastName: 'Lopez',
                age: 22,
                phone: 321123456
              },
              {
                id: 2,
                firstName: 'Jhon',
                lastName: 'Doe',
                age: 33,
                phone: 425108324
              },
              {
                id: 3,
                firstName: 'Jane',
                lastName: 'Roe',
                age: 28,
                phone: 42515712
              }
            ];

    function selectedUser(user) {
      vm.user = user;
    };

    vm.blurUser = function (user) {
      $timeout(function () {
        if (vm.user === user) {
          delete vm.user;
        }
      }, 100);
    }

  }
})();
