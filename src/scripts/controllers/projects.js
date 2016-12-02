(function () {
  angular
    .module("app")
    .controller("ProjectsCtrl", ProjectsCtrl);

  function ProjectsCtrl($scope, projects, $http, $modal, $location, ENV) {

    $scope.userInfo = $scope.$parent.user;

    var vm = this;
    vm.projects = projects.data;
    $scope.menu = "projects-activities";
    $scope.page = "projects";
    $scope.projectData = {};
    // Setting iOS as the default platform to display its resolution
    $scope.projectData.platform = "ios"

    $scope.statuses = ["New", "In Progress", "Approved"];
    /**
     * [$scope.setFilter - Filter the list of the projects]
     * @param  {string} filter [The string used for filtering]
     * When done, the dropdown is closed using this.$close();
     */
    $scope.setFilter = function(filter, filterCategory){
      switch(filterCategory) {
        case "status":
          $scope.statusFilter = filter;
          $scope.statusFilterText = $scope.statuses[filter];
          break;
        case "platform":
          $scope.platformFilter = filter;
          switch(filter) {
            case "ios":
              $scope.platformFilterText = "iOS";
              break;
            case "android":
              $scope.platformFilterText = "Android";
              break;
            case "web":
              $scope.platformFilterText = "Web";
              break;
          }
          break;
      }
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
      $http.post(ENV.api + "projects", project)
        .success(function(data) {
          data.created_at = new Date();
          $scope.projectData = {};
          $scope.projectData.platform = "ios"
          $scope.projectsVm.projects.push(data);
          $scope.modal.close();
        })
        .error(function(data) {
          // console.log("Error: " + data);
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
        url: ENV.api + "projects/" + id + "?project[slug]=" + slug,
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
          // console.log("Error: " + data);
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
        controller: ["$scope", "$modalInstance", function($scope, $modalInstance) {
          $scope.reposition = function() {
            $modalInstance.reposition();
          };
          $scope.ok = function() {
            $modalInstance.close();
          };
          $scope.cancel = function() {
            $modalInstance.dismiss("cancel");
          };
        }],
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
