(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.usage-dashboard.media-entries-report', ['classy']);
  module.config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('usage-dashboard.media-entries', {
        url: '/media-entries',
        views: {
          main: {
            controller: 'MediaEntriesReportCtrl',
            templateUrl: 'app/scripts/pages/usage-dashboard/media-entries-report/media-entries-report.html'
          }
        },
        data: {
          pageTitle: 'Media Entries Report'
        }
      });
    }
  ]);
  return module.classy.controller({
    name: 'MediaEntriesReportCtrl',
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
      return this.vpaasUsageReport.media(this.payload).then((function(_this) {
        return function(response) {
          return _this.$.months = _.extend(response, {
            dates: _this.$.dates
          });
        };
      })(this));
    }
  });
})();
