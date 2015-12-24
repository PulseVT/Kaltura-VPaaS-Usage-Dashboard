(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.usage-dashboard.bandwidth-report', ['classy']);
  module.config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('usage-dashboard.bandwidth', {
        url: '/bandwidth',
        views: {
          main: {
            controller: 'BandwidthReportCtrl',
            templateUrl: 'app/scripts/pages/usage-dashboard/bandwidth-report/bandwidth-report.html'
          }
        },
        data: {
          pageTitle: 'Bandwidth Report'
        }
      });
    }
  ]);
  return module.classy.controller({
    name: 'BandwidthReportCtrl',
    inject: ['utils', 'vpaasUsageReport'],
    fetch: function() {
      this._extractPayload();
      return this._fetchData();
    },
    _extractPayload: function() {
      return this.payload = this.utils.reports.extractPayload(this.$.dates);
    },
    _fetchData: function() {
      this.$.months = null;
      return this.vpaasUsageReport.bandwidth(this.payload).then((function(_this) {
        return function(response) {
          return _this.$.months = _.extend(response, {
            dates: _this.$.dates
          });
        };
      })(this));
    }
  });
})();
