(function () {
  angular
    .module("app")
    .controller("InviteMembersCtrl", InviteMembersCtrl);

  function InviteMembersCtrl($auth, $state, $scope) {
    const vm = this;

    vm.form = {};
    vm.submit = submit;

    function submit() {
      auth("submitRegistration", vm.form);
    }

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

    $scope.members = [{email: ''},{email: ''},{email: ''},{email: ''}];

    $scope.addNewMember = function() {
      var newItemNo = $scope.members.length+1;
      $scope.members.push(
        {
          email: '',
          role: ''
        }
      );
    };

  }
})();
