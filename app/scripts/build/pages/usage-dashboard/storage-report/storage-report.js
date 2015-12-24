(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.usage-dashboard.storage-report', ['classy']);
  module.config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('usage-dashboard.storage', {
        url: '/storage',
        views: {
          main: {
            controller: 'StorageReportCtrl',
            templateUrl: 'app/scripts/pages/usage-dashboard/storage-report/storage-report.html'
          }
        },
        data: {
          pageTitle: 'Storage Report'
        }
      });
    }
  ]);
  return module.classy.controller({
    name: 'StorageReportCtrl',
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
      return this.vpaasUsageReport.storage(this.payload).then((function(_this) {
        return function(response) {
          return _this.$.months = _.extend(response, {
            dates: _this.$.dates
          });
        };
      })(this));
    }
  });
})();
