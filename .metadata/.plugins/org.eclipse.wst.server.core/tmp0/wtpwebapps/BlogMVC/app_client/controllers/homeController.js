// homeController.js

var app = angular.module('ngBlog');

app.controller("homeController", function($scope, authenticationService, $location, postService) {
	
	$scope.user = {};
	$scope.posts = [];
	$scope.quotes = [];
	$scope.temp;
	
	$scope.loadUser= function(){
		return authenticationService.currentUser()
	    }
	
	 $scope.loadPosts = function(){
	      postService.getPosts()
	        .then(function(response){
	          $scope.posts = response.data;
	        });
	 };
	
	 $scope.loadQuote = function(){
 		postService.getQuote()
 		.then(function(response){
 			$scope.quotes = response.data;
 			for (var i = 0; i<$scope.quotes.length;i++){
 				var temp = $scope.quotes[i].content;
 				temp = temp.replace("<p>","");
 				$scope.temp = temp.replace("</p>","");
 				}
 		})
      };
      
      $scope.goToBlog = function(post) {
	        postService.setBlog(post);
	        $location.url("/blog")
	    };
	  
		
	    $scope.addPostRedirect = function() {
			$location.url('/addPost');
		};
	
		$scope.createPost = function(post) {
		      post.postDate = Date.now();
		      var newPost = {
		    		postDate : post.postDate,
		    		postName : post.postName,
		        body : post.body
		      }
		      postService.createPost(newPost)
		      .then(function(res){
		      })
		      $location.url("/home")
		 };
		 		 
		 $scope.edit = function(post) {
			postService.update(post)
			.then(function(response) {
			})
			$scope.loadPosts();
			$location.url("/home")
		 };
		 

		 $scope.deletePost = function(post) {
		  postService.deletePost(post)
		    .then(function(res){
		      $scope.loadPosts();
		    })
		    $location.url("/home")
		  };
		  
	
		 $scope.loadPosts();
		 $scope.loadQuote();

});