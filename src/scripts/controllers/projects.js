(function () {
  angular
    .module("app")
    .controller("ProjectsCtrl", ProjectsCtrl);

  function ProjectsCtrl($scope, projects, $http, $modal, $location) {

    var vm = this;
    vm.projects = projects.data;
    $scope.openModal = openModal;
    $scope.projectData = {};
    $scope.filter = "all";
    $scope.setFilter = function(filter){
      $scope.filter = filter;
      this.$close();
    };
    /**
     * [$scope.createProject - Create new project]
     * Upon callback, the following operations take place with the following reasons
     * - data.created_at = new Date();
     *    [The returned data object lack the created_at attribute and it is required to update the UI]
     * - $scope.projectData = {};
     *    [Reset the values for the temporary object we use to clear the forms ... etc]
     * - $scope.projectsVm.projects.push(data);
     *    [Update the scope with the new project to trigger the UI refresh]
     */
    $scope.createProject = function() {
      var project = {
        "project" : $scope.projectData
      };
      $http.post("http://api.draftapp.io/projects", project)
        .success(function(data) {
          data.created_at = new Date();
          $scope.projectData = {};
          $scope.projectsVm.projects.push(data);
          // TODO Dismiss the modal
        })
        .error(function(data) {
          // console.log('Error: ' + data);
        });
    };

    /**
     * [$scope.deleteProject - Delete project]
     * @param  {integer} id [ID of the project that will be deleted]
     * Upon callback, the following operations take place with the following reasons
     * - $scope.projectData = {};
     *    [Reset the values for the temporary object we use to clear the forms ... etc]
     */
    $scope.deleteProject = function(id) {
      $http({
        method: "DELETE",
        url: "http://api.draftapp.io/projects/" + id,
        data: {"project": id},
        headers: {"Content-Type": "application/json;charset=utf-8"}
      })
        .success(function(data) {
          $scope.projectData = {};
          // TODO: update UI, Dismiss the modal
        })
        .error(function(data) {
          // console.log('Error: ' + data);
        });
    };

    /**
     * [openModal - Open modal window]
     * @param  {string} template [URL of the template partial that will be rendered]
     * @param  {object} parameters [Additional parameters required for the modal ]
     * The additional parameters are passed to the $scope using the temp object projectData
     * Upon dissmissing the modal a call back is fired to reset the value of the temp object
     */
    function openModal(template, parameters) {
      if(parameters !== undefined) {
        $scope.projectData = parameters;
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
      modalInstance.result.then(function() {
      }, function() {
        // Callback when the modal is dismissed.
        $scope.projectData = {};
      });
    }
  }
})();
