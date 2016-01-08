(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.services.go', []);
  return module.service('go', [
    '$state', '$location', function($state, $location) {
      return _.extend(this, {
        current: function() {
          return _.extend({}, $state.current, $state.current);
        },
        go: function(name) {
          return $state.transitionTo(name, {}, {
            inherit: true
          });
        },
        stateHref: function(name) {
          var href, regex;
          href = $state.href(name);
          regex = new RegExp("^" + (angular.element('base').attr('href')));
          return href.replace(regex, '');
        },
        path: (function(_this) {
          return function() {
            var item, target;
            switch (arguments.length) {
              case 0:
                return _this.$location.path;
              case 1:
                item = arguments[0];
                target = _this.stateHref(item.name);
                return $location.path(target);
            }
          };
        })(this),
        $state: $state,
        state: (function(_this) {
          return function(name) {
            var state;
            return _.extend($state.get(name) || {}, {
              substates: ((function() {
                var i, len, ref, results;
                ref = $state.get();
                results = [];
                for (i = 0, len = ref.length; i < len; i++) {
                  state = ref[i];
                  if (state.name.contains(name || '') && state.name.length && state.name.nPoints() === (name != null ? name.nPoints() + 1 : 0)) {
                    results.push(this.state(state.name));
                  }
                }
                return results;
              }).call(_this)) || []
            });
          };
        })(this),
        flags: {
          loading: 0
        },
        inc: (function(_this) {
          return function(n) {
            if (n == null) {
              n = 1;
            }
            return _this.flags.loading += n;
          };
        })(this),
        dec: (function(_this) {
          return function(n) {
            if (n == null) {
              n = 1;
            }
            return _this.flags.loading -= n;
          };
        })(this),
        isLoading: (function(_this) {
          return function() {
            var key, ref, value;
            ref = _this.flags;
            for (key in ref) {
              value = ref[key];
              if (value > 0) {
                return true;
              }
            }
            return false;
          };
        })(this)
      });
    }
  ]);
})();
