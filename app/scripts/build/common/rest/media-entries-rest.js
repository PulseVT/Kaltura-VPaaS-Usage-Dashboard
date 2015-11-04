(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.rest.media-entries-report', []);
  return module.service('mediaEntriesReport', [
    'RestFactory', function(RestFactory) {
      _.extend(this, new RestFactory({
        params: {
          action: 'getGraphs',
          reportType: 5,
          'reportInputFilter:interval': 'days'
        }
      }));
      this.addFetchInterceptor(this.modifiers(['count_total', 'count_video', 'count_audio', 'count_image']).extract.months);
      return this;
    }
  ]);
})();
