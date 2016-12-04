(function () {
  angular
    .module("app")
    .service("notesService", notesService);

  function notesService($q, $http, CacheFactory, ENV) {

    var notesCache;

    if (!CacheFactory.get('notesCache')) {
      CacheFactory.createCache('notesCache', {
        deleteOnExpire: 'aggressive',
        recycleFreq: 60000
      });
    }

    notesCache = CacheFactory.get('notesCache');

    return {
      getNotes: function(id, artboard_id) {
        return $q(function(resolve, reject) {
          $http.get(ENV.api + "projects/" + id + "/artboards/" + artboard_id + "/notes", { cache: notesCache })
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
