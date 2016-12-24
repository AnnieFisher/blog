var app = angular.module('ngBlog');
app.directive('bloggeneralDirective', function(generalService, $location){
	return{
		
		restrict : 'E',
		template :  
		
		`
		<header ng-include="'gen-nav.html'"></header>
		<div class="view">
				<!--Intro content-->
				<div class="full-bg-img flex-center">
					<div class="row">
		        			<div>
				        		
								<div class="container">
									<div class="col-md-6 col-md-offset-3">
										<div id ="trans2">
											<h3 id="name">{{blog.postName}}</h3>
											<h5 id ="date">{{blog.postDate}}</h5>
										</div>
									</div>
									
									<div class="col-md-6 col-md-offset-3" id="border2">
											<h4 id = "postBody">{{blog.body}}</h4>		
									</div>
								
									<div class="col-md-6 col-md-offset-3">
									<h4>Comments</h4>
									<h5 ng-repeat="comment in blog.comments">{{comment.body}} {{comment.postDate}}</h5>
									</div
							
								</div>
		        			</div>
					</div>  
				</div>
			
		      <div class="col-md-6 col-md-offset-3">
			      <form name="addComment">
			      	<h2> Leave a comment</h2>
			      	<button ng-click =createComment(comment)>Submit</button>
			        <textarea cols="100" ng-model="comment.body" placeholder="comment..." required ng-minlength="2" ng-maxlength="1000">
			        
			      </form>
		     </div>
		</div>
	
			
		`,
		
		link : function($scope, $element, $attr){
			
			$scope.blog = generalService.getBlog();
			
					
			
			$scope.createComment = function(comment) {
		        comment.date = Date.now();
		        var newComment = { 
		          postDate : comment.date,
		          body : comment.body
		        }
		        generalService.addComment($scope.blog, newComment)
		        .then(function(res){
		          $location.url("/blogGen")
		          })
		
		        };
		     
		    }
		  }
		});
