(function () {
  angular
    .module("app")
    .controller("LoginCtrl", LoginCtrl);

  function LoginCtrl($auth, $state) {
    const vm = this;

    vm.form = {};
    vm.submit = submit;
    vm.github = github;

    function auth(method, ...params) {
      start();

      $auth[method](...params)
        .then(success)
        .catch(fail)
        .finally(end);
    }

    function submit() {
      auth("submitLogin", vm.form);
    }

    function github() {
      auth("authenticate", "github");
    }

    function start() {
      vm.loading = true;
    }

    function end() {
      vm.loading = false;
    }

    function success() {
      $state.go("dashboard");
    }

    function fail(err) {
      const errors = err.errors || err.data.errors;
      vm.errors = errors;
    }
  }
})();
