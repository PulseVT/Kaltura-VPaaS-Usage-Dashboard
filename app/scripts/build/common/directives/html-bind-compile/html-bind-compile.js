(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.directives.html-bind-compile', []);
  return module.directive('htmlBindCompile', [
    '$compile', function($compile) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          return scope.$watch(attrs.htmlBindCompile, function(value, old) {
            element.html(value);
            return $compile(element.contents())(scope);
          });
        }
      };
    }
  ]);
})();
