(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.directives.csv', ['classy']);
  module.directive('csv', function() {
    return {
      replace: true,
      restrict: 'A',
      templateUrl: 'app/scripts/common/directives/csv/csv.html',
      controller: 'CsvCtrl',
      scope: {
        filename: '@',
        name: '@csv',
        dates: '='
      }
    };
  });
  return module.classy.controller({
    name: 'CsvCtrl',
    inject: ['vpaasUsageReport', 'constants', '$filter', 'modals', 'constants'],
    injectToScope: ['utils'],
    init: function() {
      this.output = this.$filter('output');
      return this.date = this.$filter('date');
    },
    filename_: function() {
      return "kaltura-" + (this.$.filename || this.$.name) + "-report.csv";
    },
    _modal: function() {
      var from, to;
      from = this.$.dates.from;
      to = this.$.dates.to;
      return this.modals.confirm.open({
        message: "<div>You are going to download <b>full usage report</b> in .csv format for <b>" + (this.date(from)) + (from.toYMD() !== to.toYMD() ? ' - ' + this.date(to) : '') + "</b>.</div>\n<div>Proceed?</div>",
        title: 'Export CSV'
      });
    },
    "export": function() {
      return this._modal().result.then((function(_this) {
        return function() {
          return _this.vpaasUsageReport.fetch(_this.utils.csv.extractPayload(_this.$.dates, _this.$.name)).then(function(response) {
            var a;
            a = document.createElement('a');
            a.download = _this.$.filename_();
            a.href = response;
            return a.click();
          });
        };
      })(this));
    }
  });
})();
