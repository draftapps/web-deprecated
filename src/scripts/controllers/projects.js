(function () {
  angular
    .module("app")
    .controller("ProjectsCtrl", ProjectsCtrl);

  function ProjectsCtrl($scope, projects, $http, $modal) {

    $scope.openModal = openModal;
    $scope.projectData = {};
    $scope.createProject = function() {
      var project = {
        "project" : $scope.projectData
      }
      $http.post('http://api.draftapp.io/projects', project)
        .success(function(data) {
          $scope.projectData = {}; // clear the form so our user is ready to enter another
          $scope.project = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

    function openModal(template) {
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
            $modalInstance.dismiss('cancel');
          };
        },
        scope: $scope
      };
      var modalInstance = $modal.open(params);
      modalInstance.result.then(function(selectedItem) {
      }, function() {
        // Callback when the modal is closed.
      });
    };
  }
})();
