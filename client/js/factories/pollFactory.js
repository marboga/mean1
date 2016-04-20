console.log('in poll factory')

survey_app.factory('pollFactory', function($http){
	var factory = {};
	var polls = {};
	factory.poll;

	factory.index = function(callback){
		$http.get('/polls').success(function(polls){
			console.log('poll factory index got')
			callback(polls)
		})
	}

	factory.create = function(info, callback){
		$http.post('/polls/new', info).success(function(info){
			callback(info);
		})
	}

	factory.get_q = function(info, callback){
		console.log('in poll factory', info)
		$http.get('/poll/'+info._id).success(function(info){
			factory.poll = info;
			callback(info);
		})
	}

	factory.delete = function(info, callback){
		console.log('in factory DELETE ,info:', info);
		$http.get('/remove/'+info._id).success(function(info){
			console.log('got back from server', info);
			factory.poll = info;
			callback(info);
		})
	}


	return factory;
})
