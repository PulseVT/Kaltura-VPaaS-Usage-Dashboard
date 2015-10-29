var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.services.modals.confirm', []);
  return module.factory('ConfirmModal', [
    'InfoModal', function(InfoModal) {
      var ConfirmModal;
      return ConfirmModal = (function(superClass) {
        extend(ConfirmModal, superClass);

        function ConfirmModal() {
          this.open = bind(this.open, this);
          return ConfirmModal.__super__.constructor.apply(this, arguments);
        }

        ConfirmModal.prototype.open = function(data) {
          return this["super"]().open(_.defaults(data, {
            title: 'Confirmation',
            type: 'confirm'
          }));
        };

        return ConfirmModal;

      })(InfoModal);
    }
  ]);
})();
