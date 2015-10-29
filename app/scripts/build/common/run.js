(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.run', []);
  module.run([
    'ArrayPrototype', 'StringPrototype', 'NumberPrototype', 'NumberExtension', 'DatePrototype', 'DateExtension', function(ArrayPrototype, StringPrototype, NumberPrototype, NumberExtension, DatePrototype, DateExtension) {
      _.extend(Array.prototype, ArrayPrototype);
      _.extend(String.prototype, StringPrototype);
      _.extend(Number.prototype, NumberPrototype);
      _.extend(Number, NumberExtension);
      _.extend(Date.prototype, DatePrototype);
      return _.extend(Date, DateExtension);
    }
  ]);
  return module.run([
    '$window', 'utils', function($window, utils) {
      $window.isMobileOrTablet = utils.navigator.isMobileOrTablet();
      return $window.isMobile = utils.navigator.isMobile();
    }
  ]);
})();
