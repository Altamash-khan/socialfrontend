MyApplication.controller("BlogCommentController",function($scope,$rootScope,$location,$http,$route)
{
	$scope.blog={
			     'blogId':0,
			     'blogName':'',
			     'blogDesc':'',
			     'createdDate':'',
			     'loginname':'',
			     'status':'',
			     'likes':0,
			     'dislikes':0
			     
	};
	
	$scope.blogComment={
			          'commentId':0,
			          'commentText':'',
			          'blogId':0,
			          'commentDate':'',
			           'loginname':''
			        };
	$scope.blogCommentdata;
	$scope.blogdata;
	function listBlogComment(){
		console.log('list Blog Commet')
		console.log($rootScope.blogId);
		$http.get('http://localhost:8080/socialmiddleware/listBlogComment/'+$rootScope.blogId)
		.then(function(response){
			$scope.blogCommentdata=response.data;
			console.log($scope.blogCommentdata);
		});
	}
	function getABlog()
	{
		console.log('blogComment Getting');
		console.log($rootScope.blogId);
		$http.get('http://localhost:8080/socialmiddleware/getBlog/'+$rootScope.blogId)
		.then(function(response){
			$scope.blogdata = response.data;
			console.log($scope.blogdata);
			
		});
				
	}
	$scope.addcomment=function(){
		$scope.blogComment.loginname=$rootScope.currentUser.loginname;
		$scope.blogComment.blogId=$rootScope.blogId;
		console.log("Adding Comment");
		console.log($scope.blogComment);
		$http.post('http://localhost:8080/socialmiddleware/addBlogComment/',$scope.blogComment)
		.then(function(response){
			console.log("Success");
		});
	}
	$scope.delete =function(commentId){
		alert("CommentDeleted");
		$http.get('http://localhost:8080/socialmiddleware/deleteComment/'+commentId)
		.then(function(response)
				{
			console.log('Blog Comment Deleted')
			location.path("/BlogComment");
				});
	}
	getABlog();
	listBlogComment();
	
});	
