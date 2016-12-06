(function () {
  angular
    .module("app")
    .controller("CanvasHeaderCtrl", CanvasHeaderCtrl);

  function CanvasHeaderCtrl($scope, $http, $stateParams, ENV, CacheFactory, projectService, tagsService, toastr, toastrConfig) {

    angular.extend(toastrConfig, {
      target: '.canvas-screen-viewer'
    });

    $scope.currentArtboard = {};

    var projectCache,
        projectCacheKey = ENV.api + 'projects/' + $stateParams.id + '?project[slug]=' + $stateParams.slug;

    if (!CacheFactory.get('projectCache')) {
      CacheFactory.createCache('projectCache', {
        deleteOnExpire: 'aggressive',
        recycleFreq: 60000
      });
    }

    projectCache = CacheFactory.get('projectCache');

    $scope.artboardStatusesClasses = ['danger', 'warning', 'success'];
    $scope.tagColor = "#4f8ff7";
    $scope.newTag = "";

    var info = {
      id: $stateParams.id,
      slug: $stateParams.slug
    }

    projectService.getProject(info.id, info.slug)
      .then(function(p) {
        $scope.currentArtboard = _.findWhere(p.artboards, {id: parseInt($stateParams.artboardId)});
        $scope.team = p.team.users;
      }, function() {
        // console.log("Server did not send project data!");
      });

    $scope.setArtBoardStatus = function(status, $event) {
      var toggler = $($event.currentTarget).closest('dropdown-toggle')
      toggler.addClass('disabled');
      this.$close();
      var artboard = {
        "artboard_id" : $stateParams.artboardId,
        "status": status
      };
      $http.post(ENV.api + "projects/" + $stateParams.id + "/artboards/" + $stateParams.artboardId + "/set_status", artboard)
        .success(function(data) {
          toastr.success('Well Done! Artboard status updated');
          toggler.removeClass('disabled');
          $scope.currentArtboard = data;
          projectCache.remove(projectCacheKey);
        })
        .error(function(data) {
          toggler.removeClass('disabled');
          // console.log("Error: " + data);
        });
    };

    $scope.setArtBoardDueDate = function(date) {
      var toggler = $('dropdown-toggle.calendar-menu')
      toggler.addClass('disabled');
      this.$close();
      var artboard = {
        "artboard_id" : $stateParams.artboardId,
        "due_date": date
      };
      $http.post(ENV.api + "projects/" + $stateParams.id + "/artboards/" + $stateParams.artboardId + "/set_due_date", artboard)
        .success(function(data) {
          toggler.removeClass('disabled');
          // TODO: Pickadate throw an error here because it cannot handle the data
          toastr.success('Well Done! Artboard due date updated');
          $scope.currentArtboard = data;
          projectCache.remove(projectCacheKey);
        })
        .error(function(data) {
          toggler.removeClass('disabled');
          // console.log("Error: " + data);
        });
    };

    $scope.addTag = function(tag, color) {
      var toggler = $('dropdown-toggle.tags-dropdown')
      toggler.addClass('disabled');
      //this.$close();
      var tagDetails = {
        "taggable_id" : parseInt($stateParams.artboardId),
        "taggable_type": "Artboard",
        "tag": {
          "name": tag,
          "color": color
        }
      };
      tagsService.createTag(tagDetails)
      .then(function(data) {
        toastr.success('Well Done! Artboard tags updated');
        projectCache.remove(projectCacheKey);
        tagsService.getTags($stateParams.artboardId, "Artboard")
        .then(function(data) {
          toggler.removeClass('disabled');
          $scope.currentArtboard.tags = data;
        }, function() {
          toggler.removeClass('disabled');
          // console.log('Server did not send project data!');
        });
      }, function() {
        toggler.removeClass('disabled');
        // console.log('Server did not send project data!');
      });
    }

    $scope.deleteTag = function(id, $event) {
      $($event.currentTarget).closest('a').css('opacity', 0.5);
      tagsService.deleteTag(id)
      .then(function(data) {
        toastr.success('Well Done! Tag removed');
        projectCache.remove(projectCacheKey);
        tagsService.getTags($stateParams.artboardId, "Artboard")
        .then(function(data) {
          $scope.currentArtboard.tags = data;
        }, function() {
          // console.log('Server did not send project data!');
        });
      }, function() {
        toggler.removeClass('disabled');
        // console.log('Server did not send project data!');
      });
    }

    $scope.assignArtboard = function(userId, $event) {
      var toggler = $($event.currentTarget).closest('dropdown-toggle')
      toggler.addClass('disabled');
      var dropdownMenu = this;
      var member = {
        "artboard_id" : $stateParams.artboardId,
        "user_id": userId
      };
      projectService.assignArtboard($stateParams.id, $stateParams.artboardId, member)
      .then(function(p) {
        dropdownMenu.$close();
        toastr.success('Well Done! Member was assignd to this artboard successfully');
        projectCache.remove(projectCacheKey);
      }, function() {
        // console.log("Server did not send project data!");
      });
    }

    // TODO: Change this to the real endpoint
    projectService.getProjectActivities($stateParams.id)
    .then(function(activities) {
      $scope.notifications = activities[0].activities;
    }, function() {
      // console.log('Server did not send project data!');
    });
  }
})();
