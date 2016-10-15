(function () {
  angular
    .module("app")
    .directive("scroller", () => ({
      restrict: "C",
      link: scroller
    }));

  function scroller(scope, $element) {
    $element.perfectScrollbar();
  }

  $(document).on("click", ".sidebar__menu a", function() {
    $(".scroller").perfectScrollbar("update");
  });
})();
