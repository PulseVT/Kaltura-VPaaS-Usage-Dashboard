(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.config', []);
  return module.config([
    '$urlRouterProvider', '$locationProvider', '$httpProvider', 'RestangularProvider', 'kmcProvider', function($urlRouterProvider, $locationProvider, $httpProvider, RestangularProvider, kmcProvider) {
      var kmc;
      kmc = kmcProvider.$get();
      RestangularProvider.setBaseUrl(kmc.vars.service_url + "/api_v3/index.php");
      $urlRouterProvider.when('/usage-dashboard', '/usage-dashboard/overall-usage');
      return $urlRouterProvider.otherwise('/usage-dashboard');
    }
  ]);
})();
