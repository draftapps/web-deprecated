(function () {
  angular
    .module("app")
    .controller("StyleguideCtrl", StyleguideCtrl);

  function StyleguideCtrl($scope) {
    var vm = this;
    var info;

    $scope.page = "styleguide";
    hljs.initLineNumbersOnLoad();
  }
})();
