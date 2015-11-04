(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.rest.storage-report', []);
  return module.service('storageReport', [
    'RestFactory', function(RestFactory) {
      var modifiers;
      _.extend(this, new RestFactory({
        params: {
          action: 'getGraphs',
          reportType: 201,
          'reportInputFilter:interval': 'days'
        }
      }));
      modifiers = this.modifiers('average_storage');
      this.addFetchInterceptor(modifiers.extract.months);
      this.addFetchInterceptor(modifiers.convert.MBtoGB);
      return this;
    }
  ]);
})();
