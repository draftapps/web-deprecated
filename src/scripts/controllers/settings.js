(function () {
  angular
      .module("app")
      .controller("SettingsCtrl", SettingsCtrl);

  function SettingsCtrl($scope, $stateParams, toastrConfig, toastr, projectService, settingsService) {

    angular.extend(toastrConfig, {
      target: '.canvas-screen-viewer'
    });

    var vm = this;

    $scope.tab = $stateParams.param;
    $scope.user = $scope.$parent.user;

    settingsService.getNotificationsSettings($scope.$parent.user.id)
    .then(function(settings) {
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
        $scope.settings = settings;
      }, function() {
        // console.log('Server did not send project data!');
      });
    }

    $scope.members = [
      {
        firstname: '',
        lastname: '',
        email: '',
        role: ''
      }
    ];

    $scope.addNewMember = function() {
      $scope.members.push(
        {
          firstname: '',
          lastname: '',
          email: '',
          role: ''
        }
      );
    };

    projectService.getProjects()
    .then(function(projects) {
      $scope.projects = projects;
    }, function() {
      // console.log('Server did not send project data!');
    });

    $scope.inviteMembers = function() {
      // TODO: Should find a cleaner way to do this
      var $project = $('#project')
      if($project.value === "") {
        toastr.error('Please select project');
        return;
      }
      start();
      var project = {
        "project" : {
          "slug": $project.val(),
          "users" : $scope.members
        }
      };
      projectService.addTeamMember($project.data('id'), project)
      .then(function(data) {
        end();
        $scope.members = [
          {
            firstname: '',
            lastname: '',
            email: '',
            role: ''
          }
        ];
        toastr.success('Members invited successfully');
      }, function() {
        // console.log('Server did not send project data!');
      });
    }

    function start() {
      vm.loading = true;
    }

    function end() {
      vm.loading = false;
    }
  }
})();
