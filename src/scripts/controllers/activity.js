(function () {
  angular
    .module("app")
    .controller("ActivityCtrl", ActivityCtrl);

  function ActivityCtrl($scope, $stateParams, projectService) {

    var vm = this;
    $scope.menu = "projects-activities";
    $scope.page = "activity";

    projectService.getProjectActivities($stateParams.id)
      .then(function(activities) {
        console.log(activities);
        vm.activity = activities;
      }, function() {
        // console.log('Server did not send project data!');
      });

  }
})();
