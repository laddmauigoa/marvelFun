var app = angular.module('marvel')

app.controller('heroCtrl', function($scope, mainService, heroData) {
	$scope.alias = heroData.heroicData
	console.log($scope.alias)




	// mainService.getHeroData().then(function(res) {
	// 	$scope.stuff = res.data.data.results[0]
	// 	console.log($scope.stuff)
	// })

	mainService.getInfo($scope.alias.id).then(function(res) {
		$scope.pics = res.data.data.results[0].images;
		console.log(res);
		console.log("..............")
	})
})