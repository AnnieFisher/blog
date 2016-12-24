var app = angular.module('ngBlog');


app.factory('generalService', function($http, $location) {


	var generalService = {};
	var currentBlog= {};
	
	generalService.getBlog = function(){
		return currentBlog;
	}
		  
	generalService.setBlog = function(blog){
		currentBlog = blog;
	}
		  
	generalService.getPostsGeneral = function() {
		
		return $http({
			method : 'GET',
			url: 'api/post'
		})
	};
	 
	 generalService.addComment = function(blog, newComment) {
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