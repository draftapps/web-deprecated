(function () {
  angular
    .module("app")
    .controller("ActivityCtrl", ActivityCtrl);

  function ActivityCtrl($scope, activity) {

    var vm = this;
    vm.activity = activity.data;
    $scope.page = "activity";
  }
})();
