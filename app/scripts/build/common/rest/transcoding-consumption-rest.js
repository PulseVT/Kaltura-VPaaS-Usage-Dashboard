(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.rest.transcoding-consumption-report', []);
  return module.service('transcodingConsumptionReport', [
    'RestFactory', function(RestFactory) {
      var modifiers;
      _.extend(this, new RestFactory({
        params: {
          action: 'getGraphs',
          reportType: 201,
          'reportInputFilter:interval': 'days'
        }
      }));
      modifiers = this.modifiers('transcoding_consumption');
      this.addFetchInterceptor(modifiers.extract.months);
      this.addFetchInterceptor(modifiers.convert.MBtoGB);
      return this;
    }
  ]);
})();
