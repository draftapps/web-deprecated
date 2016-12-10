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
    $scope.user = $scope.$parent.user;
    settingsService.getNotificationsSettings($scope.$parent.user.id)
    .then(function(settings) {
      console.log(settings);
      $scope.settings = settings;
    }, function() {
      // console.log('Server did not send project data!');
    });

    vm.updateNotificationsSettings = function() {
      var params = {
        "user_id": $scope.$parent.user.id,
        "notification_setting": {
          "summary": $scope.settings.summary,
          "mention_me": $scope.settings.mention_me,
          "create_project": $scope.settings.create_project,
          "weekly_summary": $scope.settings.weekly_summary,
          "project_comment": $scope.settings.project_comment,
          "new_features": $scope.settings.new_features
        }
      }
      settingsService.updateNotificationsSettings($scope.$parent.user.id, params)
      .then(function(settings) {
        console.log(settings);
        $scope.settings = settings;
      }, function() {
        // console.log('Server did not send project data!');
      });
    }

  }
})();
