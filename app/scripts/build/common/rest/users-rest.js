(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.rest.users', []);
  module.service('users', [
    'users.total', function(total) {
      return {
        total: total
      };
    }
  ]);
  return module.service('users.total', [
    'RestFactory', function(RestFactory) {
      _.extend(this, new RestFactory({
        params: {
          service: 'user',
          action: 'list',
          'pager:pageIndex': 1,
          'pager:pageSize': 1
        }
      }));
      this.addFetchInterceptor((function(_this) {
        return function(response) {
          return parseInt(response.totalCount);
        };
      })(this));
      return this;
    }
  ]);
})();
