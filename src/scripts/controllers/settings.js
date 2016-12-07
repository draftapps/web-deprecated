(function () {
  angular
      .module("app")
      .controller("SettingsCtrl", SettingsCtrl);

  function SettingsCtrl($scope, $stateParams, settingsService) {
    var vm = this;
    vm.roles = [{id: 1, name: "Admin"}, {id: 2, name: "Member"}];
    vm.role = {};

    vm.memberRole = "";
    vm.setSelectedRole = function (role) {
      vm.role = role;
    }
    $scope.tab = $stateParams.param;
    settingsService.getNotificationsSettings($scope.$parent.user.id)
      .then(function(settings) {
        console.log(settings);
      }, function() {
        // console.log('Server did not send project data!');
      });

  }
})();
