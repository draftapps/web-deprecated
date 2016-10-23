(function () {
  angular
    .module("app")
    .controller("ProjectsCtrl", ProjectsCtrl);

  function ProjectsCtrl($scope, projects, $http, $modal) {

    var vm = this;
    vm.projects = projects.data;

    $scope.openModal = openModal;
    $scope.projectData = {};
    $scope.createProject = function() {
      var project = {
        "project" : $scope.projectData
      };
      $http.post("http://api.draftapp.io/projects", project)
        .success(function(data) {
          // Reset the object
          $scope.projectData = {};
          $scope.project = data;
          // console.log(data);
        })
        .error(function(data) {
          // console.log('Error: ' + data);
        });
    };
    $scope.deleteProject = function(id) {

      $http({
        method: "DELETE",
        url: "http://api.draftapp.io/projects/" + id,
        data: {"project": id},
        headers: {"Content-Type": "application/json;charset=utf-8"}
      })
        .success(function(data) {
          $scope.projectData = {};
          // console.log(data);
        })
        .error(function(data) {
          // console.log('Error: ' + data);
        });
    };

    function openModal(template, parameters) {
      if(parameters !== undefined) {
        $scope.projectData = parameters
      }
      var params = {
        templateUrl: template,
        controller: function($scope, $modalInstance) {
          $scope.reposition = function() {
            $modalInstance.reposition();
          };
          $scope.ok = function() {
            $modalInstance.close();
          };
          $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
          };
        },
        scope: $scope
      };
      var modalInstance = $modal.open(params);
      modalInstance.result.then(function(selectedItem) {
      }, function() {
        // Callback when the modal is closed.
        // Reset the object
        $scope.projectData = {}
      });
    }
  }
})();
