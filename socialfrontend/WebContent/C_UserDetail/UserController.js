MyApplication.controller("UserController", function($scope, $http, $location,
		$rootScope, $cookieStore) {
	$scope.User = {
		'loginname' : '',
		'password' : '',
		'username' : '',
		'emailid' : '',
		'mobileno' : '',
		'address' : '',
		'role' : ''
	}
	$scope.register = function() {
		console.log('Enter the Register');
		$scope.User.role = 'ROLE_USER';
		$http.post('http://localhost:8080/socialmiddleware/registerUser',$scope.User)
		.then(function(response)
						{
			console.log('Registered');
			$location.path("/login");
		});

	}
	$scope.logincheck = function() {
		console.log('Enter the login Check Function')
		$http.post('http://localhost:8080/socialmiddleware/checkUser',$scope.User)
				.then(function(response) {
			console.log('login Checked');
			$scope.User = response.data;
			$rootScope.currentUser = response.data;
			$cookieStore.put('userDetails', response.data);
			console.log($rootScope.currentUser);
			$location.path("/userhome");

		});
	}
	$rootScope.logout = function() {
		console.log('Iam in logout function');
		delete $rootScope.currentUser;
		alert("Logged Out")
		$cookieStore.remove('userDetails');
		$location.path("/logout");
	}
});
