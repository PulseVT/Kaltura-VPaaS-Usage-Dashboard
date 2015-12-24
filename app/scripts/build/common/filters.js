(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.filters', []);
  return module.filter('output', [
    '$filter', function($filter) {
      var nFilter;
      nFilter = $filter('number');
      return function(input, fraction) {
        if (fraction == null) {
          fraction = 2;
        }
        switch (true) {
          case _.isNumber(input):
            if (input.isFloat()) {
              return nFilter(input, fraction);
            } else {
              return nFilter(input, 0);
            }
            break;
          default:
            return input;
        }
      };
    }
  ]);
})();
