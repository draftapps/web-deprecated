(function () {
  angular
    .module("app", [
      "app.config", "ui.router", "ui.gravatar", "mm.foundation", "ngFileUpload", "ngCookies", "ngAnimate", "slickCarousel", "ng-token-auth", "pickadate", "yaru22.angular-timeago", "hljs", "angular-cache", "ehFilters", "toastr"
    ])
    .run(scrollTop)
    .config(authProviderConfig)
    .config(cashFactorySettings)
    .config(toastrConfig);

  function scrollTop($rootScope, $anchorScroll){
    $rootScope.$on("$locationChangeSuccess", function(){
      $anchorScroll();
    });
  }

  function authProviderConfig($authProvider, ENV) {
    $authProvider.configure({
      apiUrl: ENV.api,
      authProviderPaths: {
        github: "/auth/github",
        dropbox: "/auth/dropbox"
      }
    });
  }

  function toastrConfig(toastrConfig) {
    angular.extend(toastrConfig, {
      containerId: 'toast-container',
      newestOnTop: true,
      positionClass: 'toast-top-center',
      preventDuplicates: false,
      preventOpenDuplicates: false,
      closeButton: true,
      closeHtml: '<button>&times;</button>'
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
