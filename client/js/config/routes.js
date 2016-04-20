survey_app.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: './../views/login.html',
		controller: 'loginsController'
	})
	.when('/polls', {
		templateUrl: './../views/polls.html',
		controller: 'pollsController'
	})
	.when('/new', {
		templateUrl: './../views/newpoll.html',
		controller: 'pollsController'
	})
	.when('/poll/:id', {
		templateUrl: './../views/showOne.html',
		controller: 'pollsController'
	})
	.when('/remove/:id', {
		templateUrl: './../views/polls.html',
		controller: 'pollsController'
	})
	.otherwise('/')
})
