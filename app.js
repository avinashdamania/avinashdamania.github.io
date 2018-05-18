var app = angular.module('myApp', ['ui.router', 'ngAnimate']);


app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/default')
	$urlRouterProvider.when('/default', '/default');
	$stateProvider
	.state('default', {
		url: '/default',
		templateUrl: 'templates/default.html',
		controller: 'DefaultCtrl'
	})
	.state('sourcreme', {
		url: '/sourcreme',
		templateUrl: 'templates/sourcreme.html',
		controller: 'SourcremeCtrl'
	})
	.state('/robotnav', {
		url: '/robotnav',
		templateUrl: 'templates/robotnav.html',
		controller: 'RobotNavCtrl'
	})
	.state('/app4tht', {
		url: '/app4tht',
		templateUrl: 'templates/app4tht.html',
		controller: 'App4ThtCtrl'
	})
	$urlRouterProvider.otherwise('/default');

});

app.controller('DefaultCtrl', function($scope) {
	$scope.pageClass = 'default';
})

app.controller('SourcremeCtrl', function($scope) {
	$scope.pageClass = 'sourcreme';
})

app.controller('RobotNavCtrl', function($scope) {
	$scope.pageClass = 'robotnav';
})

app.controller('App4ThtCtrl', function($scope) {
	$scope.pageClass = 'app4tht';
})

