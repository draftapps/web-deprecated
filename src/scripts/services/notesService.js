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
      },
      createNote: function(projectId, artboardId, userId, rect, note) {
        var note = {
          "note": {
            "artboard_id" : parseInt(artboardId),
            "user_id": parseInt(userId),
            "note": note,
            "rect": rect
          }
        };
        return $q(function(resolve, reject) {
          $http.post(ENV.api + "projects/" + projectId + "/artboards/" + artboardId + "/notes", note)
          .success(function(data) {
            resolve(data);
          }).error(function(data) {
            reject("Server didn't send the correct data");
          });
        });
      },
      createReply: function(projectId, artboardId, noteId, note, userId) {
        var reply = {
          "artboard_id" : parseInt(artboardId),
          "note_id": parseInt(artboardId),
          "user_id": parseInt(userId),
          "text": note
        };
        return $q(function(resolve, reject) {
          $http.post(ENV.api + "projects/" + projectId + "/artboards/" + artboardId + "/notes/" + noteId + "/note_replies" , reply)
          .success(function(data) {
            resolve(data);
          }).error(function(data) {
            reject("Server didn't send the correct data");
          });
        });
      },
      resolveNote: function(id, projectId, artboardId) {
        return $q(function(resolve, reject) {
          $http({
            method: "DELETE",
            url: ENV.api + "projects/" + projectId + "/artboards/" + artboardId + "/notes/" + id,
            headers: {"Content-Type": "application/json;charset=utf-8"}
          })
          .success(function(data) {
            resolve(data);
          }).error(function(data) {
            reject("Server didn't send the correct data");
          });
        });
      },
      deleteNote: function(id, projectId, artboardId) {
        return $q(function(resolve, reject) {
          $http({
            method: "DELETE",
            url: ENV.api + "projects/" + projectId + "/artboards/" + artboardId + "/notes/" + id,
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
