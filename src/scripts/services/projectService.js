(function () {
  angular
    .module("app")
    .service("projectService", projectService);

  function projectService($q, $http) {
    var currentArtboard;
    var currentId;
    var currentSlug;

    return {
      getProject: function(id, slug) {
        return $q(function(resolve, reject) {
          $http.get("http://api.draftapp.io/projects/" + id + "?project[slug]=" + slug)
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
