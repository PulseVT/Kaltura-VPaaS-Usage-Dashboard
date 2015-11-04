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
    inject: ['playsReport', 'storageReport', 'bandwidthReport', 'transcodingConsumptionReport', 'mediaEntriesReport', 'users', 'utils', '$q'],
    injectToScope: ['go'],
    init: function() {
      this._fetchCurrentMonth();
      this._fetchLastThreeMonths();
      return this._fetchUsersTotal();
    },
    _fetchCurrentMonth: function() {
      return this.__fetch({
        from: (new Date).toMonthStart(),
        to: new Date
      }).then((function(_this) {
        return function(result) {
          return _this.$.currentMonth = result[0];
        };
      })(this));
    },
    _fetchLastThreeMonths: function() {
      return this.__fetch({
        from: (new Date).subMonth(2).toMonthStart(),
        to: new Date
      }).then((function(_this) {
        return function(result) {
          return _this.$.lastThreeMonths = result;
        };
      })(this));
    },
    __fetch: function(params) {
      var payload;
      payload = this.utils.reports.extractPayload(params);
      return this.$q.all([this.playsReport.graphData.fetch(payload), this.storageReport.fetch(payload), this.bandwidthReport.fetch(payload), this.transcodingConsumptionReport.fetch(payload), this.mediaEntriesReport.fetch(payload)]).then((function(_this) {
        return function(responses) {
          var i, j, k, len, ref, response, result, results;
          results = [];
          for (i = j = 0, ref = Date.nMonths(params.from, params.to); 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
            result = {};
            for (k = 0, len = responses.length; k < len; k++) {
              response = responses[k];
              _.extend(result, response[i]);
            }
            results.push(result);
          }
          return results;
        };
      })(this));
    },
    _fetchUsersTotal: function() {
      return this.users.total.fetch().then((function(_this) {
        return function(response) {
          return _this.$.endUsers = response;
        };
      })(this));
    }
  });
})();
