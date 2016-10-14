(function () {
  angular
    .module("app")
    .service("authService", authService);

  function authService($q, $auth, $state) {
    return {
      redirectAuthed,
      redirectNotAuthed
    };

    function redirectMethod(state) {
      if (state) $state.go(state);
    }

    function redirectAuth({authedState, notAuthedState}) {
      function success(res) {
        redirectMethod(authedState);
        return res;
      }

      function fail(err) {
        redirectMethod(notAuthedState);
        return err;
      }

      return $auth
        .validateUser()
          .then(success)
          .catch(fail);
    }

    function redirectAuthed(toState) {
      return redirectAuth({authedState: toState});
    }

    function redirectNotAuthed(toState) {
      return redirectAuth({notAuthedState: toState});
    }
  }
})();
