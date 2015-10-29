(function() {
  var module;
  module = angular.module('KalturaUsageDashboard.services.modals', ['classy', 'KalturaUsageDashboard.services.modals.info']);
  module.service('modals', [
    'InfoModal', 'ConfirmModal', 'ErrorModal', 'WarningModal', 'SuccessModal', function(InfoModal, ConfirmModal, ErrorModal, WarningModal, SuccessModal) {
      return {
        info: new InfoModal,
        confirm: new ConfirmModal,
        error: new ErrorModal,
        warning: new WarningModal,
        success: new SuccessModal
      };
    }
  ]);
  return module.classy.controller({
    name: 'ModalCtrl',
    injectToScope: ['data']
  });
})();
