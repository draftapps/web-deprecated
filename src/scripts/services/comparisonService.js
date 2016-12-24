(function () {
  angular
    .module("app")
    .service("comparisonService", comparisonService);

  function comparisonService($q, $http, CacheFactory, ENV) {

    return {
      getScreens: function(id) {
        return $q(function(resolve, reject) {
          $http.get(ENV.api + "projects/" + id + "/implemented_screens")
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
