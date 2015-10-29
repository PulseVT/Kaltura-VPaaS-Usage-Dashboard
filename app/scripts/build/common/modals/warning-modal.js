var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.services.modals.warning', []);
  return module.factory('WarningModal', [
    'InfoModal', function(InfoModal) {
      var WarningModal;
      return WarningModal = (function(superClass) {
        extend(WarningModal, superClass);

        function WarningModal() {
          this.open = bind(this.open, this);
          return WarningModal.__super__.constructor.apply(this, arguments);
        }

        WarningModal.prototype.open = function(data) {
          return this["super"]().open(_.defaults(data, {
            title: 'Warning',
            cancelText: null,
            type: 'warning'
          }));
        };

        return WarningModal;

      })(InfoModal);
    }
  ]);
})();
