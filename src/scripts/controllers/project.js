(function () {
  angular
    .module("app")
    .controller("ProjectCtrl", ProjectCtrl);

  function ProjectCtrl($scope, $http, $stateParams, $modal, projectService, CacheFactory, toastr, toastrConfig, ENV) {

    angular.extend(toastrConfig, {
      target: '#toastr-wrapper'
    });

    var projectCache,
        projectCacheKey = ENV.api + 'projects/' + $stateParams.id + '?project[slug]=' + $stateParams.slug;

    if (!CacheFactory.get('projectCache')) {
      CacheFactory.createCache('projectCache', {
        deleteOnExpire: 'aggressive',
        recycleFreq: 60000
      });
    }

    projectCache = CacheFactory.get('projectCache');

    $scope.menu = "projects-activities";
    $scope.status = ["New", "In Progress", "Approved"];

    $scope.project = {
      id: $stateParams.id,
      slug: $stateParams.slug
    };

    function init() {
      projectService.getProject($stateParams.id, $stateParams.slug)
        .then(function(project) {
          $scope.project = project;
        }, function() {
          // console.log('Server did not send project data!');
        });
      $scope.members = [
        {
          firstname: '',
          lastname: '',
          email: '',
          role: '0'
        }
      ];
    }

    init();

    $scope.addNewMember = function() {
      var newItemNo = $scope.members.length+1;
      $scope.members.push(
        {
          firstname: '',
          lastname: '',
          email: '',
          role: '0'
        }
      );
    };

    $scope.inviteMembers = function() {
      var project = {
        "project" : {
          "slug": $stateParams.slug,
          "users" : $scope.members
        }
      };
      projectService.addTeamMember($stateParams.id, project)
      .then(function(data) {
        toastr.success('Invitations sent to your members successfully');
        $scope.modal.close();
        projectCache.remove(projectCacheKey);
        init();
      }, function() {
        // console.log('Server did not send project data!');
      });
    }

    $scope.selectArtBoard = function(artboard) {
      // FIXME: this state won't be persisted if page is refreshed!
      projectService.setProjectInfo(
        {
          artboard: artboard,
          id: $stateParams.id,
          slug: $stateParams.slug
        }
      );
    };

    $scope.updateStatus = function(statusId) {
      this.$close();
      $scope.statusUpdating = true;
      var project = {
        "project" : {
          "slug": $stateParams.slug,
          "status": statusId
        }
      };
      $http.post(ENV.api + "projects/" + $stateParams.id + "/set_status", project)
        .success(function(data) {
          toastr.success('Well done! Status updated successfully');
          $scope.statusUpdating = false;
          $scope.project = data;
          projectCache.remove(projectCacheKey);
          projectCache.put(projectCacheKey, data)
        })
        .error(function(data) {
          $scope.statusUpdating = false;
          // console.log('Error: ' + data);
        });
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
          $scope.modal.close();
          projectService.getProject(data.id, data.slug);
        })
        .error(function(data) {
          // console.log('Error: ' + data);
        });
    };

    $scope.deleteArtboard = function(artboardId) {
      $http({
        method: "DELETE",
        url: ENV.api + "projects/" + $stateParams.id + "/artboards/" + artboardId,
        headers: {"Content-Type": "application/json;charset=utf-8"}
      })
        .success(function(data) {
          projectCache.remove(projectCacheKey);
          init();
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
      if(template === "app/partials/invite-member.html") {
        params.size = "large";
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
