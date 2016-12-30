(function () {
  angular
      .module("app")
      .controller("ComparisonCtrl", ComparisonCtrl);

  function ComparisonCtrl($scope, $http, $stateParams, $window, Upload, projectService, comparisonService, toastr, toastrConfig, CacheFactory, ENV) {
    var vm = this;
    $scope.page = "comparison";

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

    $scope.loading = false;
    $scope.uploading = false;
    $scope.progressPercentage = 0;

    vm.comparisonData = {};
    vm.project = {};

    var info = {
      id: $stateParams.id,
      slug: $stateParams.slug
    }

    function initialize() {
      projectService.getProject(info.id, info.slug)
      .then(function(p) {
        info.currentArtboard = _.findWhere(p.artboards, {id: parseInt($stateParams.artboardId)})
        comparisonService.getScreens(info.id)
        .then(function(s) {
          vm.comparisonData.pages = p.artboards;
          vm.comparisonData.implementedPages = s;
          vm.comparisonData.setOriginalScreen = setOriginalScreen;
          vm.comparisonData.setImplementedScreen = setImplementedScreen;
          vm.comparisonData.deleteScreen = deleteScreen;
          vm.uploadScreen = uploadScreen;
        }, function() {
          // console.log("Server did not send project data!");
        })
      }, function() {
        // console.log("Server did not send project data!");
      });
    }

    function setOriginalScreen(index) {
      $scope.img1 = vm.comparisonData.pages[index].fullImage;
      vm.selectedPage = vm.comparisonData.pages[index].id;
      if($scope.img2 === undefined) {
        $scope.img2 = vm.comparisonData.pages[index].fullImage;
      }
      $(window).trigger("resize");
    }
    function setImplementedScreen(index) {
      $scope.img2 = vm.comparisonData.implementedPages[index].url;
      vm.selectedCompare = vm.comparisonData.implementedPages[index].id;
      if($scope.img1 === undefined) {
        $scope.img1 = vm.comparisonData.implementedPages[index].url;
      }
      $(window).trigger("resize");
    }
    function uploadScreen(file) {
      Upload.upload({
        method: 'POST',
        url: ENV.api + "projects/" + $stateParams.id + "/implemented_screens",
        data: { payload: file },
        fileName: 'UTF-8\'\'' + file.name,
        headers : {
          'Content-Type': file.type
        }
      }).then(function (resp) {
        initialize();
        $scope.uploading = false;
      }, function (resp) {
        $scope.uploading = false;
        // console.log("Something wrong happened");
      }, function (evt) {
        $scope.uploading = true;
        setTimeout(function() {
          $('.screens-list').closest('.scroller').scrollTop(99999).perfectScrollbar('update');
        }, 50);
        $scope.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
      });
    }

    function deleteScreen(id) {
      $http({
        method: "DELETE",
        url: ENV.api + "projects/" + $stateParams.id + "/implemented_screens/" + id,
        headers: {"Content-Type": "application/json;charset=utf-8"}
      })
      .success(function(data) {
        toastr.success("Screen removed successfully");
        var index = _.findIndex(vm.comparisonData.implementedPages, { id: id});
        vm.comparisonData.implementedPages.splice(index, 1);
      })
      .error(function(data) {
        // console.log("Error: " + data);
      });
    }

    initialize();
  }
})();
