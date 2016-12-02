(function () {
  angular
    .module("app")
    .controller("UserInfoCtrl", UserInfoCtrl);

  function UserInfoCtrl($scope) {
    $scope.user = $scope.$parent.user;
  }
})();
