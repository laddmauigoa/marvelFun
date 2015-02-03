var app = angular.module('marvel');

app.service('mainService', function($http) {
	
	this.getData = function() {
		return $http({
			method: 'GET',
			url: 'http://gateway.marvel.com:80/v1/public/characters/1009351?ts=1&apikey=3a673928d3504e61f05ab1cd31175e74&hash=b9a6b076720c2f3d7c0ee590b8465a02'
		})

	}

	this.getInfo = function() {
		return $http({
			method: 'JSONP',
			params: {
				callback: 'JSON_CALLBACK'
			},
			url: "http://gateway.marvel.com/v1/public/characters/1009351/comics?ts=1&apikey=3a673928d3504e61f05ab1cd31175e74&hash=b9a6b076720c2f3d7c0ee590b8465a02"
		})
		// .then(function(res) {
		// 	console.log('res', res);

		// }, function(err) {
		// 	console.log('err', err)
		// })
	}
	
})