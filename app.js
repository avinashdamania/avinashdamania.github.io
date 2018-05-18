var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "templates/sourcreme.html",
	})
	.when("/sourcreme", {
		templateUrl: "templates/sourcreme.html",
	})
	.when("/robotnav", {
		templateUrl: "templates/robotnav.html",
	})
	.when("/app4tht", {
		templateUrl: "templates/app4tht.html"
	})
	.otherwise({redirectTo: "/"});
});




