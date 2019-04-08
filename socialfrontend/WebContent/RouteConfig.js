var MyApplication=angular.module("MyApp",['ngRoute',,'ngCookies']);
 MyApplication.config(function($routeProvider,$locationProvider)
		 {
	alert("Route Provider");
	$locationProvider.hashPrefix('');
	$routeProvider.when('/AddBlog',{templateUrl:"C_Blog/AddBlog.html"})
				  .when('/ManageBlog',{templateUrl:"C_Blog/ManageBlog.html"})
				  .when('/ViewBlog',{templateUrl:"C_Blog/ViewBlog.html"})
				  .when('/BlogComment',{templateUrl:"C_Blog/BlogComment.html"})
				  .when('/ContactUs',{templateUrl:"C_Pages/ContactUs.html"})
                  .when('/AboutUs',{templateUrl:"C_Pages/AboutUs.html"})
				  .when('/login',{templateUrl:"C_UserDetail/Login.html"})
				  .when('/Forum',{templateUrl:"C_Forum/Forum.html"})
				  .when('/ForumComment',{templateUrl:"C_Forum/ForumComment.html"})
                  .when('/ManageForum',{templateUrl:"C_Forum/ManageForum.html"})
                  .when('/AddForum',{templateUrl:"C_Forum/AddForum.html"}) 
				  .when('/register',{templateUrl:"C_UserDetail/SignUp.html"})
				  .when('/userhome',{templateUrl:"C_UserDetail/UserHome.html"})
				  .when('/profilepicture',{templateUrl:"C_UserDetail/ProfilePicture.html"})
				  .when('/logout',{templateUrl:"C_UserDetail/Logout.html"})
				  .when('/friendlist',{templateUrl:"C_Friend/FriendList.html"})
				  .when('/requestpending',{templateUrl:"C_Friend/RequestPending.html"})
				  .when('/suggestionlist',{templateUrl:"C_Friend/SuggestionList.html"})
	 			  .when('/chat',{templateUrl:"C_Chat/Chat.html"})
	 			  .when('/Job',{templateUrl:"C_Job/Job.html"})
	              .when('/AddJob',{templateUrl:"C_Job/AddJob.html"})
	              //.when('/ApplyingJob',{templateUrl:"C_Job/ApplyingJob.html"})
	              .when('/ManageJob',{templateUrl:"C_Job/ManageJob.html"})
	              //.when('/AppliedJob',{templateUrl:"C_Job/AppliedJob.html"})
		 
	     	  			
})
MyApplication.run(function($rootScope,$cookieStore)
{
		console.log('I am in run Function');
		console.log($rootScope.currentUser);
		if($rootScope.currentUser==undefined)
			{
			console.log($cookieStore.get('userDetails'));
			$rootScope.currentUser=$cookieStore.get('userDetails');
			}
});