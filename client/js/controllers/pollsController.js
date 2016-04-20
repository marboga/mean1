console.log('in polls controller');

survey_app.controller('pollsController', function($scope, pollFactory, loginFactory, moment, $location){
	console.log('loading controller')
	$scope.polls = [];
	$scope.user = {};
	$scope.thisques = pollFactory.poll;//THIS.

	function index(){
		pollFactory.index(function(data){
			$scope.polls = data;

		})
	}
	index();

	function getUser(){
		loginFactory.getUser(function(data){
			$scope.user = data;
			console.log("SCOpE USER==", $scope.user.name)
		})
	}
	getUser();

	$scope.makePoll = function(){
		console.log($scope.new_poll, "new poll 'ere")
		console.log("SCOPE USER",$scope.user.name)
		$scope.new_poll._user = $scope.user._id
		pollFactory.create($scope.new_poll, function($scope, pollFactory){
			$scope.new_poll = {}
			$location.url('/polls');
		})
	}

	$scope.removePoll = function(poll){
		if (poll.name === $scope.user){
			console.log('trying to remove', poll);
			pollFactory.delete(poll, function(poll, pollFactory){
				index();
			})
		}
	}

	$scope.getOneQ = function(poll){
		pollFactory.get_q(poll, function(poll){
			$scope.thisques = pollFactory.poll;
			console.log(pollFactory.poll, "^^^^^^^")
		})
	}

})
