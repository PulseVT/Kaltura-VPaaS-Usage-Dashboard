(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.directives.overlay', []);
  return module.directive('overlay', function() {
    return {
      replace: true,
      restrict: 'A',
      templateUrl: 'app/scripts/common/directives/overlay/overlay.html',
      scope: {
        show: '&overlay'
      },
      link: function(scope, element) {
        return element.parent().addClass('overlay-parent');
      }
    };
  });
})();
