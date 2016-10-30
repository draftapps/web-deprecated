(function () {
  angular
    .module("app")
    .controller("ProjectCtrl", ProjectCtrl);

  function ProjectCtrl($scope, $http, $stateParams) {

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

  }
})();
