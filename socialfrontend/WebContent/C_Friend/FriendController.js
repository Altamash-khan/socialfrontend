MyApplication.controller("FriendController", function($scope, $http, $location,
		$rootScope, $cookieStore) {

	$scope.friend = {
		'friendId' : 0,
		'loginname' : '',
		'friendloginname' : '',
		'status' : ''
	};

	$scope.friendList;

	$scope.pendingFriendList;

	$scope.suggestedFriendList;

	function showFriendList() {
		console.log('---I am in show Friend List---');

		loginname = $rootScope.currentUser.loginname;

		console.log(loginname);

		$http.get(
				'http://localhost:8080/socialmiddleware/showFriendList/'
						+ loginname).then(function(response) {
			$scope.friendList = response.data;
			console.log($scope.friendList);
		});
	}

	function showPendingFriendList() {
		console.log('---I am in Pending Friend List---');

		loginname = $rootScope.currentUser.loginname;

		$http.get(
				'http://localhost:8080/socialmiddleware/showPendingFriendRequest/'
						+ loginname).then(function(response) {
			$scope.pendingFriendList = response.data;
			console.log($scope.pendingFriendList);
		});

	}

	function showSuggestedFriendList() {
		console.log('---I am in Suggested Friend List---');

		loginname = $rootScope.currentUser.loginname;

		$http.get(
				'http://localhost:8080/socialmiddleware/showSuggestedFriendList/'
						+ loginname).then(function(response) {
			$scope.suggestedFriendList = response.data;
			console.log($scope.suggestedFriendList);
		});

	}

	$scope.sendFriendRequest = function(loginname1) {
		$scope.friend.loginname = $rootScope.currentUser.loginname;
		$scope.friend.friendloginname = loginname1;

		$http.post('http://localhost:8080/socialmiddleware/sendFriendRequest',
				$scope.friend).then(function(response) {
			console.log('friend request sent');
		});
	}

	$scope.unfriend = function(friendId) {
		console.log('---I am in Unfriend Module---');

		$http.get(
				'http://localhost:8080/socialmiddleware/deleteFriendRequest/'
						+ friendId).then(function(response) {
			console.log("--Successful--" + response.statusText);
			$location.path("/showfriendlist");
		});
	}

	$scope.accept = function(friendId) {
		console.log('---I am in Unfriend Module---');

		$http.get(
				'http://localhost:8080/socialmiddleware/acceptFriendRequest/'
						+ friendId).then(function(response) {
			console.log("--Accept the Friend Request--" + response.statusText);
			$location.path("/showfriendlist");
		});
	}

	showFriendList();
	showPendingFriendList();
	showSuggestedFriendList();
});