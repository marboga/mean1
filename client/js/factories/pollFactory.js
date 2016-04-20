console.log('in poll factory')

survey_app.factory('pollFactory', function($http){
	var factory = {};
	var polls = {};
	factory.poll;
	factory.options;

	factory.index = function(callback){
		$http.get('/polls').success(function(polls){
			console.log('polls got')
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
		$http.get('/remove/'+info).success(function(info){
			console.log('got back from server', info);
			callback(info);
		})
	}

	factory.update = function(info, callback){
		console.log('in factory update', info)
		$http.get('/poll/'+info.id+'/'+info.option).success(function(info){
			callback(info);
		})
	}


	return factory;
})
