angular.module('MainCtrl', []).controller('MainController', function($scope,$mdDialog) {


	$scope.social = {
		linkedin: 'https://www.linkedin.com/in/mahasagar',
		twitter: 'https://twitter.com/The_MahaSagar',
		skype: 'skype:the_mahasagar',
		github: 'https://github.com/mahasagar/'
	};
	$scope.phone = '+91 8880191315';
	$scope.address = {street: 'Koramangala, Bangalore - 560047', state: 'KA, India.'};
	$scope.mail = 'chaudharisagard@gmail.com';

	$scope.ComingSoon = function(ev) {
		// Appending dialog to document.body to cover sidenav in docs app
		// Modal dialogs should fully cover application
		// to prevent interaction outside of dialog
		$mdDialog.show(
			$mdDialog.alert()
				.parent(angular.element(document.querySelector('#popupContainer')))
				.clickOutsideToClose(true)
				.title('Under Construction')
				.textContent('Its lot of work..!stay tune..!')
				.ariaLabel('Site is under construction')
				.ok('ookchaa.!!')
				.targetEvent(ev)
		);
	};
});