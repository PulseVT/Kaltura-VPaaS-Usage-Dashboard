(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.rest.bandwidth-report', []);
  return module.service('bandwidthReport', [
    'RestFactory', function(RestFactory) {
      var modifiers;
      _.extend(this, new RestFactory({
        params: {
          action: 'getGraphs',
          reportType: 201,
          'reportInputFilter:interval': 'days'
        }
      }));
      modifiers = this.modifiers('bandwidth_consumption');
      this.addFetchInterceptor(modifiers.extract.months);
      this.addFetchInterceptor(modifiers.convert.MBtoGB);
      return this;
    }
  ]);
})();
