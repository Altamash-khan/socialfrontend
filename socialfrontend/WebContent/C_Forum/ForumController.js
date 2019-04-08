MyApplication.controller("ForumController", function($scope, $http, $location,$route,$rootScope) {
	$scope.forum = {
		'forumId' : 0,
		'forumname' : '',
		'forumContent' : '',
		'createDate' : '',
		'loginName' : '',
		'status' : ''
	}
	$scope.forumdata;
	function listForum() {
		console.log('List Forum Accessed')
		$http.get('http://localhost:8080/socialmiddleware/showAllForums')
				.then(function(response) {
					console.log(response.data)
					$scope.forumdata = response.data
				});
	}
	
	$scope.addForum = function() {
		console.log('Add Forum Accessed');
		$http.post('http://localhost:8080/socialmiddleware/addForum',
				$scope.forum)
				.then(function(response) {
			$location.path("/AddForum");
		});
	}

	$scope.approve=function(forumId) {
		console.log('Forum Approved')
		$http.get('http://localhost:8080/socialmiddleware/'+forumId)
		.then(function(response) {

		});
	}
		
	$scope.delete = function(forumId) {
		console.log('Forum Deleted')
		$http.get('http://localhost:8080/socialmiddleware/deleteForum/'+forumId)
		.then(function(response) {
		});
	}

	$scope.reject = function(forumId) {
		console.log('Forum Rejected')
		$http.get(
				'http://localhost:8080/socialmiddleware/'+forumId)
				.then(function(response) {

		});
	}
	$scope.showComment=function(forumId)
	{
		console.log("Show Comment Accessed");
		$rootScope.forumId=forumId;
		$location.path("/ForumComment");
	}


		listForum()

});