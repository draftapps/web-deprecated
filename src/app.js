(function () {
  angular
    .module("app", [
      "ui.router", "mm.foundation", "ngFileUpload", "slickCarousel", "ng-token-auth"
    ])
    .config(authProviderConfig);

  function authProviderConfig($authProvider) {
    $authProvider.configure({
      apiUrl: "http://api.draftapp.io",
      authProviderPaths: {
        github: "/auth/github"
      }
    });
  }
})();
