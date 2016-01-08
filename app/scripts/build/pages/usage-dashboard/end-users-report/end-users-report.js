(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.usage-dashboard.end-users-report', ['classy']);
  module.config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('usage-dashboard.end-users', {
        url: '/end-users',
        views: {
          main: {
            controller: 'EndUsersReportCtrl',
            templateUrl: 'app/scripts/pages/usage-dashboard/end-users-report/end-users-report.html'
          }
        },
        data: {
          pageTitle: 'End Users Report'
        }
      });
    }
  ]);
  return module.classy.controller({
    name: 'EndUsersReportCtrl',
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
      return this.vpaasUsageReport.users(this.payload).then((function(_this) {
        return function(response) {
          return _this.$.months = _.extend(response, {
            dates: _this.$.dates
          });
        };
      })(this));
    }
  });
})();
