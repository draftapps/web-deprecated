(function () {
  angular
      .module("app")
      .controller("SettingsCtrl", SettingsCtrl);

  function SettingsCtrl($scope) {
    var vm = this;
    vm.activePageName = "profile";
    vm.roles = [{id: 1, name: "Admin"}, {id: 2, name: "Member"}];
    vm.role = {};

    vm.memberRole = "";
    vm.switchPage = function(pageName) {
      vm.activePageName = pageName;
    };
    vm.setSelectedRole = function (role) {
      vm.role = role;
    }
  }
})();
