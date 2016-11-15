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
    scope.$parent.$parent.loading = true;
    $(element).find('img').on('load', function() {
      element.twentytwenty();
      scope.$apply(function(){
        scope.$parent.$parent.loading = false;
      });
    });
  }
})();
