(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.config', []);
  return module.config([
    '$urlRouterProvider', '$locationProvider', '$httpProvider', 'RestangularProvider', 'kmcProvider', function($urlRouterProvider, $locationProvider, $httpProvider, RestangularProvider, kmcProvider) {
      var kmc;
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
      });
      $locationProvider.hashPrefix('!');
      kmc = kmcProvider.$get();
      RestangularProvider.setBaseUrl(kmc.vars.service_url + "/api_v3/index.php");
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
