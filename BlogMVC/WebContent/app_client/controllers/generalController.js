
var app = angular.module('ngBlog');
app.controller('generalController', function($scope, generalService, $location){
    
		$scope.posts = [];
		$scope.quotes = [];
		$scope.temp;
	
	    $scope.loadData = function(){
	      generalService.getPostsGeneral()
	        .then(function(response){
	          $scope.posts = response.data;
	        });
	    };
	    	    
	    
	    $scope.loadQuote = function(){
	    	generalService.getQuoteGeneral()
	    		.then(function(response){
	    			$scope.quotes = response.data;
	    			for (var i = 0; i<$scope.quotes.length;i++){
	    				var temp = $scope.quotes[i].content;
	    				temp = temp.replace("<p>","");
	    				$scope.temp = temp.replace("</p>","");
	    				}
	    		 })
	     };

	    $scope.goToBlogGen = function(post) {
	        generalService.setBlog(post);
	        $location.url("/blogGen");
	    };
	  
		 $scope.loadData();
		 $scope.loadQuote();
});






