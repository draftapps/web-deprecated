angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('front', {
      url: '/',
      templateUrl: 'front/index.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/login.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'app/register.html'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard.html',
      controller: 'DasboardCtrl',
      controllerAs: 'dashboardVm'
    })
    .state('ui-components', {
      url: '/ui-components',
      templateUrl: 'app/ui-components.html'
    });
}
