(function () {
  angular
    .module("app")
    .controller("ProjectsCtrl", ProjectsCtrl);

  function ProjectsCtrl($scope, projects, $http, $modal, $location) {

    var vm = this;
    vm.projects = projects.data;
    $scope.projectData = {};
    $scope.filter = "all";
    /**
     * [$scope.setFilter - Filter the list of the projects]
     * @param  {string} filter [The string used for filtering]
     * When done, the dropdown is closed using this.$close();
     */
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
          $scope.modal.close();
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
     * - Get the index of the removed object from the data on the client by searching using
     *   its id. Can be done with Underscore findIndex()
     * - Remove the element using splice and close the window.
     */
    $scope.deleteProject = function(id, slug) {
      $http({
        method: "DELETE",
        url: "http://localhost:3000/projects/" + id + "?project[slug]=" + slug,
        headers: {"Content-Type": "application/json;charset=utf-8"}
      })
        .success(function(data) {
          $scope.projectData = {};
          var projects = $scope.projectsVm.projects;
          var index = _.findIndex(projects, function(project) { return project.id === id; });
          projects.splice(index, 1);
          $scope.modal.close();
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
    $scope.openModal = function(template, parameters) {
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
      $scope.modal = modalInstance;
      modalInstance.result.then(function() {
      }, function() {
        // Callback when the modal is dismissed.
        $scope.projectData = {};
      });
    };
  }
})();
