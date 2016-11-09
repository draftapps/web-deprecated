(function () {
  angular
    .module("app", [
      "app.config", "ui.router", "mm.foundation", "ngFileUpload", "slickCarousel", "ng-token-auth", "pickadate", "yaru22.angular-timeago", "hljs", "angular-cache", "ehFilters"
    ])
    .run(scrollTop)
    .config(authProviderConfig)
    .config(cashFactorySettings);

  function scrollTop($rootScope, $anchorScroll){
    $rootScope.$on("$locationChangeSuccess", function(){
      $anchorScroll();
    });
  }

  function authProviderConfig($authProvider) {
    $authProvider.configure({
      apiUrl: "http://api2.draftapp.io",
      authProviderPaths: {
        github: "/auth/github",
        dropbox: "/auth/dropbox"
      }
    });
  }

  function cashFactorySettings(CacheFactoryProvider) {
    angular.extend(CacheFactoryProvider.defaults, {
      maxAge: 15 * 60 * 1000, // One hour
      deleteOnExpire: 'aggressive',
      storageMode: 'localStorage'
    });
  }
})();
