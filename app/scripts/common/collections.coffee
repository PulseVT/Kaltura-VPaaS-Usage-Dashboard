do ->

	module = angular.module 'KalturaUsageDashboard.collections', []

	module.service 'reportControlsSelectCollection', [
		'Collection'
		(Collection) ->
			_.extend @, new Collection
			@add [
				id: -1
				name: 'Current month'
				dates:
					low: -> new Date (new Date).setDate 1
					high: -> new Date
			,
				id: 0
				name: 'Last month'
				dates:
					low: -> new Date (new Date).subMonth().setDate 1
					high: -> new Date (new Date).setDate 0
			,
				id: 1
				name: 'Last 3 months'
				default: yes
				dates:
					low: -> new Date (new Date).subMonth(2).setDate 1
					high: -> new Date (new Date)
			,
				id: 2
				name: 'Custom date range by month'
				allowDatepickers: yes
			]
			@
	]