(function () {
  angular
    .module("app")
    .controller("StyleguideCtrl", StyleguideCtrl);

  function StyleguideCtrl($scope, $stateParams, $timeout, projectService, CacheFactory, ENV) {

    var projectCache,
        projectCacheKey = ENV.api + 'projects/' + $stateParams.id + '?project[slug]=' + $stateParams.slug;

    if (!CacheFactory.get('projectCache')) {
      CacheFactory.createCache('projectCache', {
        deleteOnExpire: 'aggressive',
        recycleFreq: 60000
      });
    }
    projectCache = CacheFactory.get('projectCache');

    var vm = this;
    var info;

    $scope.page = "styleguide";

    $scope.project = {
      id: $stateParams.id,
      slug: $stateParams.slug,
      artboardId: $stateParams.artboardId
    }

    var info = {
      id: $stateParams.id,
      slug: $stateParams.slug
    }
    projectService.getProject(info.id, info.slug)
    .then(function(p) {
      vm.project = p;
      $scope.currentArtboard = _.findWhere(p.artboards, {id: parseInt($stateParams.artboardId)})
      $timeout(function(){
        $('.hljs-line-numbers').remove();
        hljs.initLineNumbersOnLoad();
        hljs.highlightBlock($('code.hljs.css')[0]);
      }, 50);
    }, function() {
      // console.log("Server did not send project data!");
    });

  }
})();
