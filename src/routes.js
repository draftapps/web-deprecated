angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
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
      templateUrl: 'app/dashboard.html'
    });
}
