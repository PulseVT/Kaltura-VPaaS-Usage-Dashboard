(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.usage-dashboard.overall-usage-report', ['classy']);
  module.config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('usage-dashboard.overall-usage', {
        url: '/overall-usage',
        views: {
          main: {
            controller: 'OverallUsageReportCtrl',
            templateUrl: 'app/scripts/pages/usage-dashboard/overall-usage-report/overall-usage-report.html'
          }
        },
        data: {
          pageTitle: 'Overall Usage Report'
        }
      });
    }
  ]);
  return module.classy.controller({
    name: 'OverallUsageReportCtrl',
    inject: ['vpaasUsageReport', 'utils', '$q'],
    injectToScope: ['go'],
    init: function() {
      this.$.currentMonthDates = {
        from: (new Date).toMonthStart(),
        to: new Date
      };
      this.$.lastThreeMonthsDates = {
        from: (new Date).subMonth(2).toMonthStart(),
        to: new Date
      };
      this._fetchCurrentMonth();
      return this._fetchLastThreeMonths();
    },
    _fetchCurrentMonth: function() {
      return this.__fetch(this.$.currentMonthDates).then((function(_this) {
        return function(result) {
          return _this.$.currentMonth = result[0];
        };
      })(this));
    },
    _fetchLastThreeMonths: function() {
      return this.__fetch(this.$.lastThreeMonthsDates).then((function(_this) {
        return function(result) {
          return _this.$.lastThreeMonths = result;
        };
      })(this));
    },
    __fetch: function(params) {
      var payload;
      payload = this.utils.reports.extractPayload(params);
      return this.vpaasUsageReport.fetch(payload);
    }
  });
})();
