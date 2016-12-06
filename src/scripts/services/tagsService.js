(function () {
  angular
    .module("app")
    .service("tagsService", tagsService);

  function tagsService($q, $http, ENV) {

    var currentArtboard,
        currentProjectId,
        currentSlug,
        projectCache;

    return {
      getTags: function(id, type) {
        var entity = {
          "taggable_id": id,
          "taggable_type": type
        }
        return $q(function(resolve, reject) {
          $http.get(ENV.api + "tags", entity)
          .success(function(data) {
            resolve(data);
          }).error(function(data) {
            reject("Server didn't send the correct data");
          });
        });
      },
      createTag: function(tagDetails) {
        return $q(function(resolve, reject) {
          $http.post(ENV.api + "tags", tagDetails)
          .success(function(data) {
            resolve(data);
          }).error(function(data) {
            reject("Server didn't send the correct data");
          });
        });
      },
      deleteTag: function(id) {
        return $q(function(resolve, reject) {
          $http({
            method: "DELETE",
            url: ENV.api + "tags/" + id,
            headers: {"Content-Type": "application/json;charset=utf-8"}
          })
          .success(function(data) {
            resolve(data);
          }).error(function(data) {
            reject("Server didn't send the correct data");
          });
        });
      }
    };
  }
})();
