do ->

	module = angular.module 'KalturaUsageDashboard.services.modals.error', []

	module.factory 'ErrorModal', [		
		'InfoModal'
		(InfoModal) ->
			class ErrorModal extends InfoModal

				open: (data) =>
					@super().open _.defaults data,
						title: 'Error'
						okText: null
						cancelText: 'OK'
						type: 'error'
	]