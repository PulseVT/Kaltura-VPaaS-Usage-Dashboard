var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.services.modals.error', []);
  return module.factory('ErrorModal', [
    'InfoModal', function(InfoModal) {
      var ErrorModal;
      return ErrorModal = (function(superClass) {
        extend(ErrorModal, superClass);

        function ErrorModal() {
          this.open = bind(this.open, this);
          return ErrorModal.__super__.constructor.apply(this, arguments);
        }

        ErrorModal.prototype.open = function(data) {
          return this["super"]().open(_.defaults(data, {
            title: 'Error',
            okText: null,
            cancelText: 'OK',
            type: 'error'
          }));
        };

        return ErrorModal;

      })(InfoModal);
    }
  ]);
})();
