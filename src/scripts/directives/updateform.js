(function () {
  angular
    .module("app")
    .directive("formOnChange", function($parse){
      return {
        require: "form",
        link: function(scope, element, attrs){
           var cb = $parse(attrs.formOnChange);
           element.on("change", function(){
              cb(scope);
           });
        }
      }
    });
})();
