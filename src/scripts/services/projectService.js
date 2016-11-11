(function () {
  angular
    .module("app")
    .service("projectService", projectService);

    var currentArtboard;
    var currentId;
    var currentSlug;
  function projectService($q, $http, ENV) {

    return {
      getProject: function(id, slug) {
        return $q(function(resolve, reject) {
          $http.get(ENV.api + "projects/" + id + "?project[slug]=" + slug)
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
