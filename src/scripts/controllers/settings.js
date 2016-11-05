(function () {
  angular
      .module("app")
      .controller("SettingsCtrl", SettingsCtrl);

  function SettingsCtrl($scope, $stateParams) {
    var vm = this;
    vm.roles = [{id: 1, name: "Admin"}, {id: 2, name: "Member"}];
    vm.role = {};

    vm.memberRole = "";
    vm.setSelectedRole = function (role) {
      vm.role = role;
    }
    $scope.tab = $stateParams.param;
  }
})();
