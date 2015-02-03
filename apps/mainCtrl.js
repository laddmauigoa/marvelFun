var app = angular.module('marvel');

app.controller('mainCtrl', function($scope, mainService) {
	mainService.getData().then(function(res) {
		$scope.stuff = res.data.data.results[0]
		console.log($scope.stuff)
	})

	mainService.getInfo().then(function(res) {
		$scope.pics = res.data.data.results[0].images
		console.log($scope.pics)
	})

});