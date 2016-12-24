var app = angular.module('ngBlog');


app.factory('generalService', function($http, $location) {


	var generalService = {};
	var currentBlog= {};
	
	generalService.getBlog = function(){
		console.log("here in get")
		return currentBlog;
	}
		  
	generalService.setBlog = function(blog){
		console.log("here in set")
		console.log(currentBlog)
		currentBlog = blog;
	}
		  
	generalService.getPostsGeneral = function() {
		
		return $http({
			method : 'GET',
			url: 'api/post'
		})
	};

//	generalService.getComments = function() {
//		var postId = null;
//		
//		return $http({
//			method : 'GET',
//			url: 'api/post/' +postId + '/comment'
//		})
//	 };
	 
	 generalService.addComment = function(blog, newComment) {
			console.log("addComment")
			console.log(newComment)
			return $http({
				method : 'POST',
				url : 'api/post/' + blog.id +'/comment',

			headers : {
					'Content-Type' : 'application/json'
				},
				data : newComment
				})
		};
	
	generalService.getQuoteGeneral = function() {
		return $http({
			method : 'GET',
			url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback='
		})
		
	};
	
	return generalService;
});