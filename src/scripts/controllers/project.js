(function () {
  angular
    .module("app")
    .controller("ProjectCtrl", ProjectCtrl);

  function ProjectCtrl($scope, $http, $stateParams, $modal) {

    $scope.page = "project";
    $scope.project = {};
    $scope.status = ["New", "In Progress", "Approved"];

    $scope.getProject = function(id, slug) {
      $http.get("http://api.draftapp.io/projects/" + id + "?project[slug]=" + slug)
        .success(function(data) {
          $scope.project = data;
        })
        .error(function(data) {
          // console.log('Error: ' + data);
        });
    };
    $scope.getProject($stateParams.id, $stateParams.slug);

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
          $scope.modal.close();
          $scope.getProject(data.id, data.slug);
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
