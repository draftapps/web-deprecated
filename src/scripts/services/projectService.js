(function () {
  angular
    .module("app")
    .service("projectService", projectService);

  function projectService($q, $http, CacheFactory, ENV) {

    var currentArtboard,
        currentId,
        currentSlug,
        projectCache;

    if (!CacheFactory.get('projectCache')) {
      CacheFactory.createCache('projectCache', {
        deleteOnExpire: 'aggressive',
        recycleFreq: 60000
      });
    }

    projectCache = CacheFactory.get('projectCache');

    return {
      getProject: function(id, slug) {
        return $q(function(resolve, reject) {
          $http.get(ENV.api + "projects/" + id + "?project[slug]=" + slug, { cache: projectCache })
          .success(function(data) {
            resolve(data);
          }).error(function(data) {
            reject("Server didn't send the correct data");
          });
        });
      },
      setProjectInfo: function(info) {
        currentArtboard = info.artboard;
        currentId = info.id;
        currentSlug = info.slug;
      },
      getProjectInfo: function() {
        return {
          currentArtboard: currentArtboard,
          id: currentId,
          slug: currentSlug
        };
      }
    };
  }
})();
