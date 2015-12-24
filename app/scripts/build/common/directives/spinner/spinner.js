(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.directives.spinner', ['classy']);
  module.directive('spinner', function() {
    return {
      replace: true,
      restrict: 'A',
      templateUrl: 'app/scripts/common/directives/spinner/spinner.html',
      controller: 'SpinnerCtrl',
      scope: true
    };
  });
  return module.classy.controller({
    name: 'SpinnerCtrl',
    injectToScope: ['go']
  });
})();
