(function () {
  angular
    .module("app")
    .controller("ProjectsCtrl", ProjectsCtrl);

  function ProjectsCtrl($scope, projects, $http) {

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
  }
})();
