(function () {
  angular
    .module("app", [
      "ui.router", "mm.foundation", "ngFileUpload", "slickCarousel", "ng-token-auth", "pickadate", "yaru22.angular-timeago", "hljs"
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
