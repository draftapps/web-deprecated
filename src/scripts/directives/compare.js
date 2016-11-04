(function () {
  angular
    .module("app")
    .directive("compare", function() {
      return {
        cache: false,
        restrict: "A",
        replace: true,
        scope: {
          img1: "=",
          img2: "="
        },
        template: "<div class='compare-container'>" +
                  "<img ng-src='{{img1.img1}}'>" +
                  "<img ng-src='{{img2.img2}}'>" +
                  "</div>",
        link: compare
      }
  });

  function compare(scope, element, attrs) {
    var setElementLoadEvent = function() {
      element.on("load", function() {
        element.twentytwenty();
      });
    };
    $(window).load(function() {
      $(element).twentytwenty();
      setElementLoadEvent();
    });
  }
})();
