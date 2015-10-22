do ->

	module = angular.module 'KalturaUsageDashboard.config', []

	module.config [
		'$urlRouterProvider'
		'$locationProvider'
		'$httpProvider'
		'RestangularProvider'
		'kmcProvider'
		($urlRouterProvider, $locationProvider, $httpProvider, RestangularProvider, kmcProvider) ->
			
			# $locationProvider.html5Mode yes
			# $locationProvider.hashPrefix '!'

			# $httpProvider.defaults.useXDomain = yes
			# $httpProvider.interceptors.push 'authHttpResponseInterceptor'
			# delete $httpProvider.defaults.headers.common['X-Requested-With']
			# $httpProvider.defaults.withCredentials = yes

			kmc = kmcProvider.$get()

			RestangularProvider.setBaseUrl "#{kmc.vars.service_url}/api_v3/index.php"
			RestangularProvider.setDefaultRequestParams
				ks: kmc.vars.ks
				service: 'report'
				'reportInputFilter:timeZoneOffset': (new Date).getTimezoneOffset()
				'reportInputFilter:objectType': 'KalturaReportInputFilter'


			$urlRouterProvider.when '/usage-dashboard', '/usage-dashboard/overall-usage'
			$urlRouterProvider.otherwise '/usage-dashboard'
	]