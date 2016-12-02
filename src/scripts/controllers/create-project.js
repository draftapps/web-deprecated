(function () {
  angular
    .module("app")
    .controller("CreateProjectCtrl", CreateProjectCtrl);

  function CreateProjectCtrl($auth, $state, $scope, $http, projectService, ENV) {
    const vm = this;

    vm.form = {};
    $scope.projectData = {};

    $scope.projectData.platform = 'ios';

    $scope.createProject = function() {
      start();
      var project = {
        "project" : $scope.projectData
      };
      $http.post(ENV.api + "projects", project)
        .success(function(data) {
          success(data);
        })
        .error(function(data) {
          // console.log('Error: ' + data);
          end();
        });
    };

    function start() {
      vm.loading = true;
    }

    function end() {
      vm.loading = false;
    }

    function success(project) {
      console.log(project);
      projectService.setProjectInfo(project)
      $state.go("invite-members");
    }

    function fail(err) {
      const errors = err.errors || err.data.errors;
      vm.errors = errors;
    }
  }
})();
