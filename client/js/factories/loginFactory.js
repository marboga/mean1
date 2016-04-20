console.log('in login factory');

survey_app.factory('loginFactory', function($http){
	var factory = {}
	var user;
	factory.user;

	factory.login = function(user, callback){
		console.log(user)
		$http.post('/login', user).success(function(output){
			factory.user = output;
			callback(factory.user);
		})
	}

	factory.getUser = function(callback){
		// console.log('user is', factory.user);
		callback(factory.user);
	}

	factory.logout = function(){
		factory.user = '';
	}

	return factory;
})
