

survey_app.controller('pollsController', function($scope, pollFactory, loginFactory, moment, $location){
	console.log('loading controller')
	$scope.polls = [];
	$scope.user = {};
	$scope.thisques = pollFactory.poll;
	$scope.options = pollFactory.options;

	function index(){
		pollFactory.index(function(data){
			$scope.polls = data
		})
	}
	index();

	function getUser(){
		loginFactory.getUser(function(data){
			$scope.user = data;
			console.log("current user==", $scope.user.name)
		})
	}
	getUser();

	$scope.makePoll = function(){
		console.log($scope.new_poll, "new poll 'ere")
		console.log("SCOPE USER",$scope.user.name)
		$scope.new_poll._user = $scope.user._id;
		$scope.new_poll.name = $scope.user.name;
		pollFactory.create($scope.new_poll, function($scope, pollFactory){
			if(err){
				res.json(err)
				$location.url('/new');
			}else{
				$scope.new_poll = {}
				$location.url('/polls');
			}
		})
	}

	$scope.removePoll = function(poll){
			console.log('trying to remove', poll);
			pollFactory.delete(poll, function(poll, pollFactory){
				index();
			})
	}

	$scope.getOneQ = function(poll){
		pollFactory.get_q(poll, function(poll){
			$location.url('/poll/'+poll)
			$scope.thisques = pollFactory.poll;
			$scope.options = pollFactory.options
			console.log(pollFactory.poll, pollFactory.options, "^^^^^^^")
		})
	}

	$scope.addLike = function(option){
		console.log("vote controller, option=", option);
		pollFactory.update(option, function(option, pollFactory){
			$scope.getOneQ(option)
		})
	}

	$scope.logout = function(){
		loginFactory.user = ""
		$scope.user = {};
		$location.url('/')
		loginFactory.logout()
	}

})
