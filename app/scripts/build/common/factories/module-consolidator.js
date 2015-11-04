(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.factories.module-consolidator', []);
  return module.factory('ModuleConsolidator', function() {
    return function(module, trim, serviceName) {
      var data, f, i, injector, len, name, ref;
      if (trim == null) {
        trim = '';
      }
      if (serviceName == null) {
        serviceName = _.last(module.name.split('.'));
      }
      data = {};
      injector = angular.injector([
        'ng', 'KalturaUsageDashboard', [
          '$provide', function($provide) {
            $provide.value('$rootElement', angular.element(window.document));
            return void 0;
          }
        ]
      ]);
      ref = module._invokeQueue;
      for (i = 0, len = ref.length; i < len; i++) {
        f = ref[i];
        name = f[2][0];
        if (name !== serviceName) {
          data[name.replace(trim, '')] = injector.get(name);
        }
      }
      return data;
    };
  });
})();
