var app = angular.module('ngBlog');


app.factory('postService', function($http, $location) {


	var postService = {};
	var currentBlog= {};
	
	postService.getBlog = function(){
		console.log("here in get")
		return currentBlog;
	}
		  
	postService.setBlog = function(blog){
		currentBlog = blog;
	}
		  
		  
	
	postService.getPosts = function() {
		
		return $http({
			method : 'GET',
			url: 'api/post'
		})
		
	};
	
postService.getQuote = function() {
		
		return $http({
			method : 'GET',
			url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback='
		})
		
	};
	
	
	postService.createPost = function(newPost) {
		return $http({
			method : 'POST',
			url : 'api/post',
			headers : {
				'Content-Type' : 'application/json',
				
			},
			data : newPost
		})
		.then(function() {
			$location.url('/index');
		})
	}
	
	postService.update = function(updatedPost) {
		console.log("in service")
		console.log(updatedPost)
		return $http({
			method : 'PUT',
			url : 'api/post/' + updatedPost.id,
			headers : {
				'Content-Type' : 'application/json'
			},
			data : updatedPost
		})
	};
	
	
	postService.deletePost = function(post){
		return $http({
			method : 'DELETE',
			url : 'api/post/' + post.id,
			headers : {
					'Content-Type' : 'application/json'
			},
		});
	};
	
	
	
	return postService;
});