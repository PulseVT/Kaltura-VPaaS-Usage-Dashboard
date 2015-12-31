(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.rest.partner', []);
  return module.service('partner', [
    'RestFactory', function(RestFactory) {
      _.extend(this, new RestFactory({
        params: {
          service: 'partner',
          action: 'getInfo'
        }
      }));
      this.extendFetch({
        s: (function(_this) {
          return function(response) {
            return _this.info = response;
          };
        })(this)
      });
      return this;
    }
  ]);
})();
