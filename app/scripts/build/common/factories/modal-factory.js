var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.factories.modal', []);
  return module.factory('Modal', [
    '$uibModal', function($uibModal) {
      var Modal;
      return Modal = (function(superClass) {
        extend(Modal, superClass);

        function Modal() {
          this.open = bind(this.open, this);
          this._mark = bind(this._mark, this);
          return Modal.__super__.constructor.apply(this, arguments);
        }

        Modal.prototype.opened = {};

        Modal.prototype._mark = function(data, params) {
          return JSON.stringify({
            data: data,
            params: params
          });
        };

        Modal.prototype.open = function(data, params) {
          var instance, mark;
          _.extend(params || {}, {
            resolve: {
              data: function() {
                return data;
              }
            }
          });
          mark = this._mark(data, params);
          if (this.opened[mark]) {
            return;
          }
          instance = $uibModal.open(params);
          this.opened[mark] = true;
          instance.result["finally"]((function(_this) {
            return function() {
              return delete _this.opened[mark];
            };
          })(this));
          return instance;
        };

        return Modal;

      })(Class);
    }
  ]);
})();
