(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.rest.plays-report', []);
  module.service('playsReport', [
    'playsReport.playsNumber', 'playsReport.mediaEntriesNumber', 'playsReport.graphData', function(playsNumber, mediaEntriesNumber, graphData) {
      return {
        playsNumber: playsNumber,
        mediaEntriesNumber: mediaEntriesNumber,
        graphData: graphData
      };
    }
  ]);
  module.service('playsReport.playsNumber', [
    'RestFactory', function(RestFactory) {
      _.extend(this, new RestFactory({
        params: {
          action: 'getTotal',
          reportType: 1
        }
      }));
      this.addFetchInterceptor((function(_this) {
        return function(response) {
          return parseInt(_this.modifiers().extract.dict(response).count_plays || 0);
        };
      })(this));
      return this;
    }
  ]);
  module.service('playsReport.mediaEntriesNumber', [
    'RestFactory', function(RestFactory) {
      _.extend(this, new RestFactory({
        params: {
          action: 'getTable',
          reportType: 1,
          'pager:objectType': 'KalturaFilterPager',
          'pager:pageIndex': 1,
          'pager:pageSize': 1
        }
      }));
      this.addFetchInterceptor((function(_this) {
        return function(response) {
          return parseInt(response.totalCount || 0);
        };
      })(this));
      return this;
    }
  ]);
  return module.service('playsReport.graphData', [
    'RestFactory', function(RestFactory) {
      _.extend(this, new RestFactory({
        params: {
          action: 'getGraphs',
          reportType: 1,
          'reportInputFilter:interval': 'days'
        }
      }));
      this.addFetchInterceptor(this.modifiers('count_plays').extract.months);
      return this;
    }
  ]);
})();
