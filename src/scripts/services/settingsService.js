(function () {
  angular
    .module("app")
    .service("settingsService", settingsService);

  function settingsService($q, $http, ENV) {

    return {
      getNotificationsSettings: function(userId) {
        return $q(function(resolve, reject) {
          $http.get(ENV.api + "users/" + userId + "/notification_settings/1")
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
