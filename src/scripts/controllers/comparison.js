(function () {
  angular
      .module("app")
      .controller("ComparisonCtrl", ComparisonCtrl);

  function ComparisonCtrl($scope, comparisonData) {
    var vm = this;
    $scope.page = "comparison";
    vm.comparisonData = {};
    vm.project = {};

    vm.comparisonData.pages = comparisonData.data;
    vm.comparisonData.selectPage = selectPage;
    vm.selectedPage = {
      obj: null,
      screenStyle: getBoardScreenStyle,
      screenParentStyle: getBoardParentScreenStyle,
      zoomIn: zoomIn,
      zoomOut: zoomOut,
      zoomSize: zoomSize
    };
    activate();

    function activate() {
      vm.selectedPage.obj = vm.comparisonData.pages[0];
      vm.project.configs = getConfigs(
          vm.project.scale, vm.project.unit, vm.project.colorFormat, vm.selectedPage.obj.height
      );
    }

    function getConfigs(scale, unit, colorFormat, height) {
      return {
        scale: scale,
        unit: unit,
        colorFormat: colorFormat,
        zoom: getZoomPercentage(height)
      };
    }

    function getZoomPercentage(height) {
      var proportion = $(document).height() / height;
      if (proportion >= .8) {
        return 1;
      } else if (proportion >= .7) {
        return 0.75;
      } else {
        return 0.5;
      }
    }

    function zoomSize(size) {
      return (size * vm.project.configs.zoom);
    }

    function getBoardScreenStyle() {
      if (!vm.selectedPage.obj) return;
      return {
        "width": zoomSize(vm.selectedPage.obj.width),
        "height": zoomSize(vm.selectedPage.obj.height),
        "background": "#FFF url(" +
        (vm.selectedPage.obj.originalImageBase64 || vm.selectedPage.obj.originalImagePath) +
        ") no-repeat",
        "backgroundSize": zoomSize(vm.selectedPage.obj.width) + "px " + zoomSize(vm.selectedPage.obj.height) + "px"
      };
    }

    function getBoardParentScreenStyle() {
      if (!vm.selectedPage.obj) return;
      return {
        "width": zoomSize(vm.selectedPage.obj.width),
        "height": zoomSize(vm.selectedPage.obj.height)
      };
    }

    function zoomIn() {
      vm.project.configs.zoom -= .25;
    }

    function zoomOut() {
      vm.project.configs.zoom += .25;
    }

    function selectPage(index) {
      vm.selectedPage.obj = this.pages[index];
    }
  }
})();
