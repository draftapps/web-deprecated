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
        auth: authService => authService.redirectAuthed("projects")
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
    .state("terms", {
      url: "/terms",
      templateUrl: "app/terms.html"
    })
    .state("privacy", {
      url: "/privacy",
      templateUrl: "app/privacy.html"
    })
    .state("login", {
      url: "/login",
      templateUrl: "app/login.html",
      controller: "LoginCtrl",
      controllerAs: "loginVM",
      parent: "not-authed"
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
      controllerAs: "forgotPasswordVM",
      parent: "not-authed"
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
    .state("project", {
      url: "/projects/:id/:slug",
      templateUrl: "app/project.html",
      controller: "ProjectCtrl",
      parent: "authed"
    })
    .state("activity", {
      url: "/activity",
      templateUrl: "app/activity.html",
      controller: "ActivityCtrl",
      controllerAs: "activityVm",
      resolve: {
        activity: $http => $http.get("activity.json")
      },
      parent: "authed"
    })
    .state("notifications", {
      url: "/notifications",
      templateUrl: "app/notifications.html",
      controller: "NotificationsCtrl",
      controllerAs: "notificationsVm",
      resolve: {
        notifications: $http => $http.get("notifications.json")
      },
      parent: "authed"
    })
    .state("dashboard", {
      url: "/dashboard",
      templateUrl: "app/dashboard.html",
      controller: "DasboardCtrl",
      controllerAs: "dashboardVm",
      parent: "authed"
    })
    .state("styleguide", {
      url: "/styleguide",
      templateUrl: "app/styleguide.html",
      controller: "StyleguideCtrl",
      controllerAs: "styleguideVm",
      parent: "authed"
    })
    .state("versions", {
      url: "/versions",
      templateUrl: "app/versions.html",
      controller: "VersionsCtrl",
      controllerAs: "versionsVm",
      resolve: {
        project: $http => {
          return $http.get("versions.json");
        }
      }
    })
    .state("comparison", {
      url: "/comparison",
      templateUrl: "app/comparison.html",
      controller: "ComparisonCtrl",
      controllerAs: "comparisonVm",
      resolve: {
        comparisonData: $http => {
          return $http.get("comparison.json");
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
      },
      parent: "authed"
    })
    .state("ui-components", {
      url: "/ui-components",
      templateUrl: "app/ui-components.html"
    })
    .state("settings", {
      url: "/settings/:param",
      templateUrl: "app/settings.html",
      controller: "SettingsCtrl",
      controllerAs: "settingsVM",
      parent: "authed"
    });
}
