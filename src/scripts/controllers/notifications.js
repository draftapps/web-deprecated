(function () {
  angular
    .module("app")
    .controller("NotificationsCtrl", NotificationsCtrl);

  function NotificationsCtrl($scope, notifications) {

    var vm = this;
    vm.notifications = notifications.data.notifications;
  }
})();
