(function () {
  angular
    .module("app")
    .controller("InviteMembersCtrl", InviteMembersCtrl);

  function InviteMembersCtrl($auth, $state, $scope, projectService) {
    const vm = this;

    vm.form = {};

    function start() {
      vm.loading = true;
    }

    function end() {
      vm.loading = false;
    }

    function fail(err) {
      const errors = err.errors || err.data.errors;
      vm.errors = errors;
    }

    $scope.members = [{email: '', role: 0},{email: '', role: 0},{email: '', role: 0},{email: '', role: 0}];

    $scope.project = projectService.getProjectInfo();
    if($scope.project.id === undefined) {
      $state.go("projects");
    }

    $scope.addNewMember = function() {
      var newItemNo = $scope.members.length+1;
      $scope.members.push(
        {
          firstname: '',
          lastname: '',
          email: '',
          role: '0'
        }
      );
    };

    $scope.inviteMembers = function() {
      start();
      var project = {
        "project" : {
          "slug": $scope.project.slug,
          "users" : $scope.members
        }
      };
      projectService.addTeamMember($scope.project.id, project)
      .then(function(data) {
        end();
        $state.go("projects");
      }, function() {
        // console.log('Server did not send project data!');
      });
    }

  }
})();
