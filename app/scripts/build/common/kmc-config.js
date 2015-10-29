(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.kmc-config', []);
  return module.provider('kmc', function() {
    return {
      $get: function() {
        var i, ks, len, param, parts, ref, ref1, ref2;
        ks = 'Yzg5MDFjMmM1M2RlNGZhOWUwOTczNjg4OGFiMDAxY2EwNzFlYjk4OXw5MzkzNDE7OTM5MzQxOzE0NDYyMjc4MDU7MjsxNDQ2MTQxNDA1LjE5ODU7cmtzaGFyZWRib3hAZ21haWwuY29tO2Rpc2FibGVlbnRpdGxlbWVudDs7';
        ref2 = ((ref = location.search || location.hash) != null ? (ref1 = ref.split('?')[1]) != null ? ref1.split('&') : void 0 : void 0) || [];
        for (i = 0, len = ref2.length; i < len; i++) {
          param = ref2[i];
          parts = param.split('=');
          if (parts[0] === 'ks') {
            ks = parts[1];
            break;
          }
        }
        return window.kmc || {
          vars: {
            service_url: 'http://www.kaltura.com',
            ks: ks
          }
        };
      }
    };
  });
})();
