(function () {
  angular
    .module("app")
    .controller("VersionsCtrl", VersionsCtrl);

  function VersionsCtrl($scope, $stateParams, projectService, CacheFactory, ENV) {
    var vm = this;

    $scope.page = "versions";
    $scope.drawnNumbers = false;

    var projectCache,
        projectCacheKey = ENV.api + 'projects/' + $stateParams.id + '?project[slug]=' + $stateParams.slug;

    if (!CacheFactory.get('projectCache')) {
      CacheFactory.createCache('projectCache', {
        deleteOnExpire: 'aggressive',
        recycleFreq: 60000
      });
    }
    projectCache = CacheFactory.get('projectCache');

    $scope.project = {
      id: $stateParams.id,
      slug: $stateParams.slug,
      artboardId: $stateParams.artboardId
    };

    $scope.drawLineNumbers = function() {
      if (!$scope.drawnNumbers) {
        hljs.initLineNumbersOnLoad();
        hljs.highlightBlock($('.code-block .hljs + .hljs')[0]);
        $scope.drawnNumbers = true;
      }
    }

    projectService.getProject($stateParams.id, $stateParams.slug)
    .then(function(project) {
      vm.project = project;
      vm.project.selectVersion = selectVersion;
      vm.selectedVersion = {
        obj: null,
        screenStyle: getBoardScreenStyle,
        screenParentStyle: getBoardParentScreenStyle,
        zoomIn: zoomIn,
        zoomOut: zoomOut,
        zoomSize: zoomSize
      };
      activate();
    }, function() {
      // console.log("Server did not send project data!");
    });

    function activate() {
      vm.selectedVersion.obj = vm.project.artboards[0];
      vm.project.configs = getConfigs(
        vm.project.scale, vm.project.unit, vm.project.colorFormat, vm.selectedVersion.obj.height
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
      if (!vm.selectedVersion.obj) return;
      return {
        "width": zoomSize(vm.selectedVersion.obj.width),
        "height": zoomSize(vm.selectedVersion.obj.height),
        "background": "#FFF url(" +
        (vm.selectedVersion.obj.imageBase64 || vm.selectedVersion.obj.fullImage) +
        ") no-repeat",
        "backgroundSize": zoomSize(vm.selectedVersion.obj.width) + "px " + zoomSize(vm.selectedVersion.obj.height) + "px"
      };
    }

    function getBoardParentScreenStyle() {
      if (!vm.selectedVersion.obj) return;
      return {
        "width": zoomSize(vm.selectedVersion.obj.width),
        "height": zoomSize(vm.selectedVersion.obj.height)
      };
    }

    function zoomIn() {
      vm.project.configs.zoom -= .25;
    }

    function zoomOut() {
      vm.project.configs.zoom += .25;
    }

    function selectVersion(version) {
      vm.selectedVersion.obj = version;
    }
  }
})();
