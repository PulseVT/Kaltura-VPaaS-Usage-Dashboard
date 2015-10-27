do ->

	module = angular.module 'KalturaUsageDashboard.usage-dashboard.transcoding-consumption-report', ['classy']

	module.config [
		'$stateProvider'
		($stateProvider) ->
			$stateProvider.state 'usage-dashboard.transcoding-consumption',
				url: '/transcoding-consumption'
				views:
					main:
						controller: 'TranscodingConsumptionReportCtrl'
						templateUrl: 'app/scripts/pages/usage-dashboard/transcoding-consumption-report/transcoding-consumption-report.html'
				data:
					pageTitle: 'Transcoding Consumption Report'
	]

	module.classy.controller
		name: 'TranscodingConsumptionReportCtrl'
		inject: ['transcodingConsumptionReport', 'utils', '$filter']

		fetch: ->
			@_extractPayload()
			@_fetchData()

		_extractPayload: ->
			@payload = @utils.reports.extractPayload @$.dates

		_fetchData: ->
			@$.months = null
			@transcodingConsumptionReport.fetch(@payload).then (response) =>
				@$.months = _.extend response, dates: @$.dates