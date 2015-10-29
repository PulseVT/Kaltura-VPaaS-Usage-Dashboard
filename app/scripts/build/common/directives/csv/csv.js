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
        months: '='
      }
    };
  });
  return module.classy.controller({
    name: 'CsvCtrl',
    inject: ['constants', '$filter', 'modals', 'constants'],
    init: function() {
      this.output = this.$filter('output');
      return this.date = this.$filter('date');
    },
    getCsvArray: function() {
      var from, to;
      from = this.$.months[0].dates[0];
      to = this.$.months[this.$.months.length - 1].dates[this.$.months[this.$.months.length - 1].dates.length - 1];
      return this.modals.confirm.open({
        message: "<div>You are going to download <b>" + this.constants.reports[this.$.name].name + "</b> in .csv format.</div>\n<div>Period: <b>" + (this.date(from)) + (from.toYMD() !== to.toYMD() ? ' - ' + this.date(to) : '') + "</b></div>\n<div>Proceed?</div>",
        title: 'Export CSV'
      }).result.then((function(_this) {
        return function() {
          var column, columns, month;
          columns = _this.constants.columns.reports[_this.$.name];
          return [
            ['Month', 'Year'].concat((function() {
              var i, len, results;
              results = [];
              for (i = 0, len = columns.length; i < len; i++) {
                column = columns[i];
                results.push(column.title);
              }
              return results;
            })())
          ].concat((function() {
            var i, len, ref, results;
            ref = this.$.months;
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              month = ref[i];
              results.push([this.date(month.dates[0], 'MMMM'), this.date(month.dates[0], 'yyyy')].concat((function() {
                var j, len1, results1;
                results1 = [];
                for (j = 0, len1 = columns.length; j < len1; j++) {
                  column = columns[j];
                  results1.push(this.output(month[column.field]));
                }
                return results1;
              }).call(this)));
            }
            return results;
          }).call(_this));
        };
      })(this));
    }
  });
})();
