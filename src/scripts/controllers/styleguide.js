(function () {
  angular
    .module("app")
    .controller("StyleguideCtrl", StyleguideCtrl);

  function StyleguideCtrl($scope, $stateParams) {
    var vm = this;
    var info;

    $scope.page = "styleguide";

    $scope.project = {
      id: $stateParams.id,
      slug: $stateParams.slug,
      artboardId: $stateParams.artboardId
    };

    hljs.initLineNumbersOnLoad();
  }
})();
