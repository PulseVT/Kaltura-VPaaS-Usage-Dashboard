var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.services.modals.info', ['KalturaUsageDashboard.services.modals.confirm', 'KalturaUsageDashboard.services.modals.error', 'KalturaUsageDashboard.services.modals.warning', 'KalturaUsageDashboard.services.modals.success']);
  return module.factory('InfoModal', [
    'Modal', function(Modal) {
      var InfoModal;
      return InfoModal = (function(superClass) {
        extend(InfoModal, superClass);

        function InfoModal() {
          this.open = bind(this.open, this);
          return InfoModal.__super__.constructor.apply(this, arguments);
        }

        InfoModal.prototype.params = {
          templateUrl: 'app/scripts/common/modals/info-modal.html',
          controller: 'ModalCtrl'
        };

        InfoModal.prototype.open = function(data) {
          return this["super"]().open(_.defaults(data, {
            okText: 'OK',
            cancelText: 'Cancel',
            type: 'info'
          }), this.params);
        };

        return InfoModal;

      })(Modal);
    }
  ]);
})();
