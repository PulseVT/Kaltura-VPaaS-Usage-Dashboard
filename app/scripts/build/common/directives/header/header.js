(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.directives.header', ['classy']);
  module.directive('header', function() {
    return {
      replace: true,
      restrict: 'A',
      templateUrl: 'app/scripts/common/directives/header/header.html',
      controller: 'HeaderCtrl'
    };
  });
  return module.classy.controller({
    name: 'HeaderCtrl',
    inject: ['kmc'],
    injectToScope: ['go'],
    init: function() {
      this.$.items = this.go.state().substates;
      return this.$.helpHref = this.kmc.vars.service_url + "/content/docs/NetHelp/default.htm#!Documents/contentreports.htm";
    }
  });
})();
