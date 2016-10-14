(function () {
  angular
    .module("app")
    .controller("ForgotPasswordCtrl", ForgotPasswordCtrl);

  function ForgotPasswordCtrl($auth, $stateParams) {
    const vm = this;
    const isReset = $stateParams.reset_password_token;

    vm.form = {};
    vm.submit = submit;
    vm.isReset = Boolean(isReset);

    function auth(method, ...params) {
      start();

      $auth[method](...params)
        .then(success)
        .catch(fail)
        .finally(end);
    }

    function submit() {
      const methodName = isReset ? "updatePassword" : "requestPasswordReset";
      auth(methodName, vm.form);
    }

    function start() {
      vm.loading = true;
    }

    function end() {
      vm.loading = false;
    }

    function success({data: res}) {
      vm.info = res.message;
    }

    function fail(err) {
      const errors = err && (err.errors || err.data.errors);
      vm.errors = errors;
    }
  }
})();
