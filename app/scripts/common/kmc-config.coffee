do ->

	module = angular.module 'KalturaUsageDashboard.kmc-config', []

	module.provider 'kmc', ->
		$get: ->
			window.kmc or vars:
				service_url: 'http://www.kaltura.com'
				ks: 'YzRlMGFkM2VkYmI4MmUxNGY0ZTQ1ZGNkYmRlYTNmM2FjOGQwZDkwOXw5MzkzNDE7OTM5MzQxOzE0NDU5MzA4MzQ7MjsxNDQ1ODQ0NDM0LjMyMTtya3NoYXJlZGJveEBnbWFpbC5jb207ZGlzYWJsZWVudGl0bGVtZW50Ozs='