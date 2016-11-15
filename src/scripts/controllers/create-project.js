(function () {
  angular
    .module("app")
    .controller("CreateProjectCtrl", CreateProjectCtrl);

  function CreateProjectCtrl($auth, $state, $scope, $http, ENV) {
    const vm = this;

    vm.form = {};

    $scope.createProject = function() {
      start();
      var project = {
        "project" : $scope.projectData
      };
      $http.post(ENV.api + "projects", project)
        .success(function(data) {
          success();
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

    function success() {
      $state.go("invite-members");
    }

    function fail(err) {
      const errors = err.errors || err.data.errors;
      vm.errors = errors;
    }
  }
})();
