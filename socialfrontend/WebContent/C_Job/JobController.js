MyApplication.controller("JobController",function($scope,$http,$location,$route,$rootScope)
		{
	$scope.job={
			'jobid':0,
			'desgination':'',
			'companyname':'',
			'jobdesc':'',
			'location':'',
			'salary':0,
			'lastDateToApply':''
			};
	$scope.applyJob={
			'applyjobId':0,
			' jobid':0,
			'loginname':'',
			'appliedDate':''
				};

	$scope.jobdata;
	$scope.applyjobdata;
	function listJob() {
		console.log('List Job Accessed')
		$http.get('http://localhost:8080/socialmiddleware/showAllJob')
				.then(function(response) {
					console.log(response.data)
					$scope.jobdata = response.data
				});
	}
	$scope.addJob = function() {
		console.log('Add Job Accessed');
		alert("Job Added");
		$http.post('http://localhost:8080/socialmiddleware/addJob',
				$scope.job).then(function(response) {
			$location.path("/Job");
		});
	}
	$scope.delete = function(jobid) {
		console.log('Job Deleted');
		alert("Job Deleted");
		$http.get(
				'http://localhost:8080/socialmiddleware/deleteJob/'
						+ jobid).then(function(response) {
							$scope.reload;
							listJob();
		});
	}
	function getJob() {
		console.log('List User Job Accessed')
		console.log($rootScope.jobid);
		$http.get('http://localhost:8080/socialmiddleware/getJob/'+$rootScope.jobid)
				.then(function(response) {
					$scope.jobdata = response.data;
					console.log($scope.jobdata);
				});
	}
	$scope.apply = function(jobid) {
		console.log('Job Applied');
		console.log($scope.applyjobdata);
		alert("Applied for selected job");
		$http.post(
				'http://localhost:8080/socialmiddleware/applyJob',$scope.applyjobdata
						).then(function(response) {
							$scope.reload;
							console.log($scope.applyjobdata);
							ListAppliedJob();
		});
	}
	
	function ListAppliedJob() {
		console.log('List Applied Job Accessed');
		loginname = $rootScope.currentUser.loginname;
		$http.get('http://localhost:8080/socialmiddleware/listAppliedJobs/'+loginname)
				.then(function(response) {
					$scope.applyjobdata = response.data;
					console.log($scope.ListAppliedJob);
				});
	}
	
	listJob();
	ListAppliedJob();
		});