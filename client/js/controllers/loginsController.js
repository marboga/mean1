console.log('in loginsController')

survey_app.controller('loginsController', function($scope, loginFactory, $location){
	$scope.user = {},

	$scope.login = function(user, data){
		loginFactory.login(user, function(data){
			$scope.user = data;
			$location.url('/polls')
		})
	}
	var getUser = function(){
		loginFactory.getUser(function(data){
			if (data){
				$scope.user = data
			}else{
				$location.url('/')
			}
		})
	}
	getUser();
})
