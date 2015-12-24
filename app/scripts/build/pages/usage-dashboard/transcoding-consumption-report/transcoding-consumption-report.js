(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.usage-dashboard.transcoding-consumption-report', ['classy']);
  module.config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('usage-dashboard.transcoding-consumption', {
        url: '/transcoding-consumption',
        views: {
          main: {
            controller: 'TranscodingConsumptionReportCtrl',
            templateUrl: 'app/scripts/pages/usage-dashboard/transcoding-consumption-report/transcoding-consumption-report.html'
          }
        },
        data: {
          pageTitle: 'Transcoding Consumption Report'
        }
      });
    }
  ]);
  return module.classy.controller({
    name: 'TranscodingConsumptionReportCtrl',
    inject: ['vpaasUsageReport', 'utils'],
    fetch: function() {
      this._extractPayload();
      return this._fetchData();
    },
    _extractPayload: function() {
      return this.payload = this.utils.reports.extractPayload(this.$.dates);
    },
    _fetchData: function() {
      this.$.months = null;
      return this.vpaasUsageReport.transcoding(this.payload).then((function(_this) {
        return function(response) {
          return _this.$.months = _.extend(response, {
            dates: _this.$.dates
          });
        };
      })(this));
    }
  });
})();
