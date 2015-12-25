(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.filters', []);
  module.filter('output', [
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
            return input || 0;
        }
      };
    }
  ]);
  return module.filter('arr_reverse', [
    function() {
      return function(input) {
        var i, index, ref, results;
        if (_.isArray(input)) {
          results = [];
          for (index = i = ref = input.length - 1; ref <= 0 ? i <= 0 : i >= 0; index = ref <= 0 ? ++i : --i) {
            results.push(input[index]);
          }
          return results;
        } else {
          return input;
        }
      };
    }
  ]);
})();
