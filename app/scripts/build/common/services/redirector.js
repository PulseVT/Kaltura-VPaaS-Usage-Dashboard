(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.services.redirector', []);
  return module.service('redirector', [
    '$location', '$state', function($location, $state) {
      return function(name) {
        var k, params, url, v;
        url = $state.href(name);
        params = $location.search();
        if (!_.isEmpty(params)) {
          url += '?';
          for (k in params) {
            v = params[k];
            url += k + "=" + v;
          }
        }
        return url;
      };
    }
  ]);
})();
