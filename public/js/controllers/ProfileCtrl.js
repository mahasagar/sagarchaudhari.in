angular.module('ProfileCtrl', ['ngSanitize']).controller('ProfileController', function($scope,$rootScope) {

	$rootScope.showContact=true;
	$scope.name = 'Sagar Chaudhari';
	$scope.title = 'Software Developer';
	$scope.dob = '09-08-1990';
	$scope.phone = '+91 8880191315';
	$scope.address = {street: 'Koramangala, Bangalore - 560047', state: 'KA, India.'};
	$scope.mail = 'chaudharisagard@gmail.com';
	$scope.blog = {url: 'https://sagarchaudhari.in/blogs', title: 'Blogs [Coming soon]'};
	$scope.social = {
		linkedin: 'https://www.linkedin.com/in/mahasagar',
		twitter: 'https://twitter.com/The_MahaSagar',
		skype: 'skype:the_mahasagar',
		github: 'https://github.com/mahasagar/',
		insta:'https://www.instagram.com/the_mahasagar/'
	};

	$scope.aboutus = '<p>I am an software engineer.' +
		' I like to learn new technologies and play around. Currently working in Medibox,' +
		' Bangalore as Software Engineer,' +
		' I am involved with designing and developing scalable applications,</p>' +
		'<br>' +
		'<p>I\'ve been associated and involved with computers through out my life.' +
		' Among other stuff, I like to play sports,' +
		' surf blogs and articles. And of course '+
		'<a href="https://www.instagram.com/the_mahasagar/"><i >#Instagram</i></a> </p>';
	$scope.awards = [
		'Best Sportsman,SPI, 2009',
		'Best All-rounder,SPI, 2009'
	];


	$scope.workInfo = [{
		year: 'August 2015 - Present ',
		company: ' Medibox Technologies LLP, Bangalore',
		role: ' Software Developer',
		description: '<p>Designed & Developed scalable App application to build digital platform ' +
		'for healthcare industry.' +
		' Designed, Developed And Test Android App for Pharmacies to Order Medicine from Suppliers.,' +
		' to facilitate Demilitarized zone, and proactively enforce security measures.</p>' +
		'<p>Technologies used: Android, Ionic Framework, Mongo DB, Node.JS, AngularJS, ElasticSearch, Nginx, ELK stack.'
	}, {
		year: 'Jan 2015 - July 2015 ',
		company: ' Nextect Services, Bangalore',
		role: 'Android Application Developer',
		description: '<p>Developed Two Android App for a Student Tracking [Parents And Teachers]. Designed and Implemented new feature for Student Tracking App,led to 100% user acquisition per school</p><p>Technologies used: Android, WCF, Sql Server.'
	}, {
		year: 'Jan 2014 - July 2014 ',
		company: ' Mobintia Technologies, Pune ',
		role: ' Android Intern',
		description: '<p>Coordinating with team members for design,integration,app maintenance, etc.</p>'
	}];

	$scope.education = [ {
		title: 'Master of Computer Science, 2014',
		univ: ' S.P.College, Pune ',
		description: '<p>Completed the Degree, Master of Computer Science: Data Structures, Algorithm analysis and design, Theoretical Computer Science, Operating Systems, Systems software, Information systems, Network & system security, Distributed systems</p><p> Project on Evaluation of Operating System Module</p>'
	}, {
		title: 'B.C.S, 2012',
		univ: ' T.C.College, Baramati, Pune ',
		description: '<p>Completed the Degree, Bachelor of Computer Science</p>'
	}, {
		title: 'H.S.C, 2009',
		univ: ' SPI, P.V.P.Sainik School, Pravaranagar, Ahmednagar ',
		description: '<p>Completed the 12th STD</p>'
	}, {
		title: 'S.S.C, 2007',
		univ: ' Mary Memorial School, Daund, Pune ',
		description: '<p>Completed the 10th STD</p>'
	}];

	$scope.skills = [{
		title: 'Languanges - C/C++/Java',
		value: '80%'
	}, {
		title: 'Android App Development ',
		value: '85%'
	}, {
		title: 'Scripting - Node.JS/Shell',
		value: '80%'
	}, {
		title: 'HTML/CSS',
		value: '70%'
	}, {
		title: 'NoSQL - Mongo DB/ Redis ',
		value: '85%'
	}, {
		title: 'Algorithms & Data structures',
		value: '75%'
	}, {
		title: 'Web App development ',
		value: '70%'
	}, {
		title: 'DB SQl - MySQL, Oracle PL/SQL',
		value: '75%'
	}];
});