(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.head', ['classy']);
  return module.classy.controller({
    name: 'HeadCtrl',
    injectToScope: ['go']
  });
})();
