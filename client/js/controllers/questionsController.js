console.log('in qs controller')

survey_app.controller('questionsController', function($scope, pollFactory, loginFactory){
	$scope.thisQuestion = {};
	$scope.user = {};


	function getUser(){
		loginFactory.getUser(function(data){
			$scope.user = data;
			console.log("current user is", $scope.user.name)
		})
	}
	getUser();

	$scope.getOneQ = function(poll){
		pollFactory.get_q(poll, function(poll){
			$scope.thisques = pollFactory.poll;
			console.log(pollFactory.poll, "^^^^^^^")
		})
	}

	$scope.doVote = function(option){
		console.log("vote controller, option=", option);
		pollFactory.update(option, function(option, pollFactory){

		})
	}

})
