
var app = angular.module('ngBlog');
app.controller('postsController', function($scope, postService, $location){
    
	$scope.posts = [];
	$scope.quotes = [];
	$scope.resultArr = [];
	$scope.temp;
	
	  $scope.loadData = function(){
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
	    }

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
		      $location.url("/posts")
		 };
		 
//		 $scope.updatePostRedirect = function(post) {
//				$location.url('/updatePost');
//				console.log(post)
//			};
		 
		 $scope.edit = function(post) {
			 console.log("in EDIT***")
			postService.update(post)
			.then(function(response) {
				
			})
			$scope.loadData();
			$location.url("/posts")
		 };
		 

		 $scope.deletePost = function(post) {
		  postService.deletePost(post)
		    .then(function(res){
		      $scope.loadData();
		    })
		    $location.url("/posts")
		  };

		 $scope.loadData();
		 $scope.loadQuote();
});







