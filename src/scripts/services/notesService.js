(function () {
  angular
    .module("app")
    .service("notesService", notesService);

  function notesService($q, $http, ENV) {

    return {
      getNotes: function(id, artboard_id) {
        return $q(function(resolve, reject) {
          $http.get(ENV.api + "projects/" + id + "/artboards/" + artboard_id + "/notes")
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
