(function () {
  angular
      .module("app")
      .controller("SettingsCtrl", SettingsCtrl);

  function SettingsCtrl() {
    var vm = this;
    vm.activePageName = "profile";
    vm.roles = [{id: 1, name: 'Admin'}, {id: 2, name: 'Admin'}];
    vm.memberRole = '';
    vm.switchPage = function(pageName) {
      vm.activePageName = pageName;
    };

  }
})();
