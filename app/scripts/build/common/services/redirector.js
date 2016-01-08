(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.services.redirector', []);
  return module.service('redirector', [
    '$location', 'go', function($location, go) {
      return function(name) {
        var k, params, url, v;
        url = go.stateHref(name);
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
