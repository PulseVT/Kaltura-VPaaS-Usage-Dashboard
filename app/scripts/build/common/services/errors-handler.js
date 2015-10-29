(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.services.errors-handler', []);
  return module.service('errorsHandler', [
    'modals', function(modals) {
      return function(error) {
        var message;
        message = (function() {
          var ref;
          if ((error != null ? (ref = error.error) != null ? ref.code : void 0 : void 0) != null) {
            switch (error.error.code) {
              case 'INVALID_KS':
                return "Your session has expired. Please refresh the page to continue.";
              default:
                return error.error.message;
            }
          } else {
            return "Unable to load the requested information";
          }
        })();
        return modals.error.open({
          message: message
        });
      };
    }
  ]);
})();
