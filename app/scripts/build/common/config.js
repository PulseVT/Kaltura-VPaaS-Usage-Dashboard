(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.config', []);
  return module.config([
    '$urlRouterProvider', '$locationProvider', '$httpProvider', 'RestangularProvider', 'kmcProvider', function($urlRouterProvider, $locationProvider, $httpProvider, RestangularProvider, kmcProvider) {
      var kmc;
      kmc = kmcProvider.$get();
      RestangularProvider.setBaseUrl(kmc.vars.service_url + "/api_v3/index.php");
      RestangularProvider.setJsonp(true);
      RestangularProvider.setDefaultRequestParams('jsonp', {
        callback: 'JSON_CALLBACK',
        format: 9
      });
      $urlRouterProvider.when('/usage-dashboard', [
        'redirector', function(redirector) {
          return redirector('usage-dashboard.overall-usage');
        }
      ]);
      return $urlRouterProvider.otherwise(function($injector) {
        return $injector.get('redirector')('usage-dashboard');
      });
    }
  ]);
})();
