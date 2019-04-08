MyApplication.controller("ForumCommentController", function($scope, $http,
		$location, $route, $rootScope) {
	$scope.forum = {
		'forumId' : 0,
		'forumname' : '',
		'forumContent' : '',
		'createDate' : '',
		'loginname' : '',
		'status' : ''
	};
	$scope.forumComment = {
		'commentId' : 0,
		'commentText' : '',
		'loginname' : '',
		'commentDate' : '',
		'forumId' : 0
	};
	$scope.forumCommentData;
	$scope.forumdata;
	function listForumComment() {
		console.log('list blog Comment Methods');
		console.log($rootScope.forumId);
		$http.get(
				'http://localhost:8080/socialmiddleware/listForumComment/'
						+ $rootScope.forumId).then(function(response) {
			$scope.forumCommentData = response.data;
			console.log($scope.forumCommentData);
		});
	}
	function getAForum() {
		console.log('Get a Forum');
		$http.get(
				'http://localhost:8080/socialmiddleware/getForum/'
						+ $rootScope.forumId).then(function(response) {
			$scope.forumdata = response.data;
			console.log($scope.forumdata);

		});
	}
	$scope.addComment = function() {
		$scope.forumComment.loginname = $rootScope.currentUser.loginname;
		$scope.forumComment.forumId = $rootScope.forumId;
		$http.post('http://localhost:8080/socialmiddleware/addForumComment',
				$scope.forumComment).then(function(response) {
			console.log('Successfully Comment Added');
		});
	};
	$scope.deleteComment = function(commentId) {
		$http.get(
				'http://localhost:8080/socialmiddleware/deleteForumComment/'
						+ $commentId).then(function(response) {

			console.log('Forum Comment Deleted')
			location.path("/ForumComment");
			listForumComment();
		});
	};
	listForumComment();
	getAForum();
});