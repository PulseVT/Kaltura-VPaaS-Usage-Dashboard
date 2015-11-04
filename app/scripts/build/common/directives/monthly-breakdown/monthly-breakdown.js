(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.directives.monthly-breakdown', ['classy']);
  module.directive('monthlyBreakdown', function() {
    return {
      replace: true,
      restrict: 'A',
      templateUrl: 'app/scripts/common/directives/monthly-breakdown/monthly-breakdown.html',
      controller: 'MonthlyBreakdownCtrl',
      scope: {
        name: '@monthlyBreakdown',
        months: '=',
        cls: '@'
      }
    };
  });
  return module.classy.controller({
    name: 'MonthlyBreakdownCtrl',
    inject: ['constants'],
    init: function() {
      return this._determineColumns();
    },
    _determineColumns: function() {
      return this.$.columns = this.constants.columns["default"].concat(this.constants.columns.reports[this.$.name]);
    }
  });
})();
