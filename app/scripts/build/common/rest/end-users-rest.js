(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.rest.end-users-report', []);
  return module.service('endUsersReport', [
    'RestFactory', function(RestFactory) {
      _.extend(this, new RestFactory({
        params: {
          action: 'getGraphs',
          reportType: 5,
          'reportInputFilter:interval': 'days'
        }
      }));
      return this;
    }
  ]);
})();
