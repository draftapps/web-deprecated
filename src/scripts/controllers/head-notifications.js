(function () {
  angular
    .module("app")
    .controller("HeadNotificationCtrl", HeadNotificationCtrl);

  function HeadNotificationCtrl($scope, $cookies) {

    var cookie = $cookies.getObject("show_disclaimer");

    if (cookie === undefined) {
      $scope.showDisclaimer = true;
    } else {
      $scope.showDisclaimer = cookie;
    }

    $scope.close = function() {
      $cookies.putObject("show_disclaimer", false);
      $scope.showDisclaimer = false;
    }

  }
})();
