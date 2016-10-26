(function () {
  angular
      .module("app")
      .controller("SettingsCtrl", SettingsCtrl);

  function SettingsCtrl() {
    var vm = this;
    vm.activePageName = 'profile';
    vm.switchPage = function(pageName) {
      vm.activePageName = pageName;
    };

  }
})();
