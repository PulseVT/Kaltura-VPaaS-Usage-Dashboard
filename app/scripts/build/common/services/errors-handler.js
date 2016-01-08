(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.services.errors-handler', []);
  return module.service('errorsHandler', [
    'modals', function(modals) {
      return function(error) {
        var message;
        error = (error != null ? error.error : void 0) || error;
        message = (function() {
          if ((error != null ? error.code : void 0) != null) {
            switch (error.code) {
              case 'INVALID_KS':
                return "Your session has expired. Please refresh the page to continue.";
              default:
                return error.message;
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
