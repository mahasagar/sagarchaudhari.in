angular.module('MainCtrl', []).controller('MainController', function($scope) {


	$scope.social = {
		linkedin: 'https://www.linkedin.com/in/mahasagar',
		twitter: 'https://twitter.com/The_MahaSagar',
		skype: 'skype:the_mahasagar',
		github: 'https://github.com/mahasagar/'
	};
	$scope.phone = '+91 8880191315';
	$scope.address = {street: 'Koramangala, Bangalore - 560047', state: 'KA, India.'};
	$scope.mail = 'chaudharisagard@gmail.com';

});