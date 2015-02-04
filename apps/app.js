var app = angular.module('marvel', ['ngRoute'])

app.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'js/homeTempl.html',
		controller: 'mainCtrl'
	})

	.when('/hero/:hero', {
		templateUrl: 'js/heroTmpl.html',
		controller: 'heroCtrl',
		resolve: {
			heroData: function($route, mainService){
				return mainService.getHeroData($route.current.params.hero)
			}
		}
	})

	.otherwise({
		redirectTo: '/'
	})

})