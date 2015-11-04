var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.services.modals.success', []);
  return module.factory('SuccessModal', [
    'InfoModal', function(InfoModal) {
      var SuccessModal;
      return SuccessModal = (function(superClass) {
        extend(SuccessModal, superClass);

        function SuccessModal() {
          this.open = bind(this.open, this);
          return SuccessModal.__super__.constructor.apply(this, arguments);
        }

        SuccessModal.prototype.open = function(data) {
          return this["super"]().open(_.defaults(data, {
            title: 'Success',
            cancelText: null,
            type: 'success'
          }));
        };

        return SuccessModal;

      })(InfoModal);
    }
  ]);
})();
