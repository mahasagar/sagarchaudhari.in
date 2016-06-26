angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/', {
			templateUrl: 'views/profile.html',
			controller: 'ProfileController'	
		});

	$locationProvider.html5Mode(true);

}]);