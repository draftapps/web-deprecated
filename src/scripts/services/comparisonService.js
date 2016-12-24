(function () {
  angular
    .module("app")
    .service("comparisonService", comparisonService);

  function comparisonService($q, $http, CacheFactory, ENV) {

    return {
      addScreen: function(id, params) {
        return $q(function(resolve, reject) {
          $http.post(ENV.api + "projects/" + id + "/implemented_screens", params)
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
