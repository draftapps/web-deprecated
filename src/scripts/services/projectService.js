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
      getProjects: function() {
        return $q(function(resolve, reject) {
          $http.get(ENV.api + "projects")
          .success(function(data) {
            resolve(data);
          }).error(function(data) {
            reject("Server didn't send the correct data");
          });
        });
      },
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
      },
      getProjectActivities: function(id) {
        return $q(function(resolve, reject) {
          $http.get(ENV.api + "projects/" + id + "/activities")
          .success(function(data) {
            resolve(data);
          }).error(function(data) {
            reject("Server didn't send the correct data");
          });
        });
      },
      postProjectActivity: function(id, params) {
        return $q(function(resolve, reject) {
          $http.post(ENV.api + "projects/" + id + "/activities", params)
          .success(function(data) {
            resolve(data);
          }).error(function(data) {
            reject("Server didn't send the correct data");
          });
        });
      },
      addTeamMember: function(id, members) {
        return $q(function(resolve, reject) {
          $http.post(ENV.api + "projects/" + id + "/add_team_member", members)
          .success(function(data) {
            resolve(data);
          }).error(function(data) {
            reject("Server didn't send the correct data");
          });
        });
      },
      removeTeamMember: function(id, members) {
        return $q(function(resolve, reject) {
          $http.post(ENV.api + "projects/" + id + "/remove_team_member", members)
          .success(function(data) {
            resolve(data);
          }).error(function(data) {
            reject("Server didn't send the correct data");
          });
        });
      },
      assignArtboard: function(projectId, artboardId, member) {
        // POST /projects/:project_id/artboards/:id/add_assignees
        return $q(function(resolve, reject) {
          $http.post(ENV.api + "projects/" + projectId + "/artboards/" + artboardId + "/add_assignee", member)
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
