angular
  .module("app")
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix("!");
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("front", {
      url: "/",
      templateUrl: "app/index.html"
    })
    .state("not-authed", {
      abstract: true,
      template: "<ui-view/>",
      resolve: {
        auth: authService => authService.redirectAuthed("dashboard")
      }
    })
    .state("features", {
      url: "/features",
      templateUrl: "app/features.html",
      controller: "FeaturesCtrl",
      controllerAs: "FeaturesVM"
    })
    .state("contact", {
      url: "/contact",
      templateUrl: "app/contact.html",
      controller: "FeaturesCtrl",
      controllerAs: "FeaturesVM"
    })
    .state("login", {
      url: "/login",
      templateUrl: "app/login.html",
      controller: "LoginCtrl",
      controllerAs: "loginVM",
      parent: "not-authed"
    })
    .state("register", {
      url: "/register",
      templateUrl: "app/register.html",
      controller: "RegisterCtrl",
      controllerAs: "registerVM",
      parent: "not-authed"
    })
    .state("forgot-password", {
      url: "/forgot-password?reset_password_token",
      templateUrl: "app/forgot-password.html",
      controller: "ForgotPasswordCtrl",
      controllerAs: "forgotPasswordVM"
    })
    .state("terms", {
      url: "/terms",
      templateUrl: "app/terms.html"
    })
    .state("privacy", {
      url: "/privacy",
      templateUrl: "app/privacy.html"
    })
    .state("authed", {
      abstract: true,
      template: "<ui-view/>",
      resolve: {
        user: authService => authService.redirectNotAuthed("login")
      }
    })
    .state("projects", {
      url: "/projects",
      templateUrl: "app/projects.html",
      controller: "ProjectsCtrl",
      controllerAs: "projectsVm",
      resolve: {
        projects: $http => $http.get("http://api.draftapp.io/projects")
      },
      parent: "authed"
    })
    .state("dashboard", {
      url: "/dashboard",
      templateUrl: "app/dashboard.html",
      controller: "DasboardCtrl",
      controllerAs: "dashboardVm",
      resolve: {
        project: $http => $http.get("project.json")
      },
      parent: "authed"
    })
    .state("logout", {
      url: "/logout",
      resolve: {
        signout: ($auth, $state) => {
          $auth
            .signOut()
              .then($state.go.bind($state, "front"));
        }
      },
      parent: "authed"
    })
    .state("notes", {
      url: "/notes",
      templateUrl: "app/notes.html",
      controller: "NotesCtrl",
      controllerAs: "notesVm",
      resolve: {
        project: $http => {
          return $http.get("project.json");
        }
      }
    })
    .state("ui-components", {
      url: "/ui-components",
      templateUrl: "app/ui-components.html"
    });
}
