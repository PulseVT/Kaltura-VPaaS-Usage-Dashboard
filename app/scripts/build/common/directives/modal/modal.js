(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.directives.modal', ['classy']);
  return module.directive('modal', function() {
    return {
      replace: true,
      restrict: 'A',
      templateUrl: 'app/scripts/common/directives/modal/modal.html',
      transclude: true,
      scope: {
        title: '=',
        okText: '=',
        cancelText: '='
      }
    };
  });
})();
