(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.rest.vpaas-usage-report', []);
  return module.service('vpaasUsageReport', [
    'RestFactory', function(RestFactory) {
      var modifiers;
      _.extend(this, new RestFactory({
        params: {
          action: 'getTable',
          reportType: 26,
          'pager:objectType': 'KalturaFilterPager',
          'pager:pageIndex': 1,
          'pager:pageSize': 1
        }
      }));
      modifiers = this.modifiers();
      this.addFetchInterceptor(function(response, payload) {
        if (_.isObject(response)) {
          return modifiers.extract.monthsComprehensive(response, payload);
        } else {
          return response;
        }
      });
      return _.extend(this, {
        plays: {
          number: (function(_this) {
            return function() {
              return _this.fetch.apply(_this, arguments).then(function(response) {
                return modifiers.convert.sum(response, 'total_plays');
              });
            };
          })(this),
          mediaEntriesNumber: (function(_this) {
            return function() {
              return _this.fetch.apply(_this, arguments).then(function(response) {
                return modifiers.convert.sum(response, 'total_media_entries');
              });
            };
          })(this),
          data: (function(_this) {
            return function() {
              return _this.fetch.apply(_this, arguments).then(function(response) {
                return modifiers.convert.pick(response, 'total_plays');
              });
            };
          })(this)
        },
        storage: (function(_this) {
          return function() {
            return _this.fetch.apply(_this, arguments).then(function(response) {
              return modifiers.convert.pick(response, 'avg_storage_gb');
            });
          };
        })(this),
        bandwidth: (function(_this) {
          return function() {
            return _this.fetch.apply(_this, arguments).then(function(response) {
              return modifiers.convert.pick(response, 'bandwidth_gb');
            });
          };
        })(this),
        transcoding: (function(_this) {
          return function() {
            return _this.fetch.apply(_this, arguments).then(function(response) {
              return modifiers.convert.pick(response, 'transcoding_gb');
            });
          };
        })(this),
        media: (function(_this) {
          return function() {
            return _this.fetch.apply(_this, arguments).then(function(response) {
              return modifiers.convert.pick(response, 'total_media_entries');
            });
          };
        })(this),
        users: (function(_this) {
          return function() {
            return _this.fetch.apply(_this, arguments).then(function(response) {
              return modifiers.convert.pick(response, 'total_end_users');
            });
          };
        })(this)
      });
    }
  ]);
})();
