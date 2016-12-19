var app = angular.module('ngBlog');
app.directive('blogDirective', function( postService, $compile){
	return{
		
		restrict : 'E',
		template :  
		
		`
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
									<div class="col-md-6 col-md-offset-3" id="updateBtn" style ="margin-top:20px">
										<button class="btn btn-success" ng-click = "update(blog)" >Update Post</button>
										<button class="btn btn-danger btn-sm" ng-click = "deletePost(blog)" >Delete Post</button>
									</div>
									<div class="col-md-6 col-md-offset-3" id="border2">
											<h4 id = "postBody">{{blog.body}}</h4>
									</div>
								</div>
							
							
								
							
		        			</div>
					</div>  
				</div>
			</div>
	
			
		`,
		
		link : function($scope, $element, $attr){
			
			
			$scope.blog = postService.getBlog();
			
			
			$scope.blogCopy = {};
		     var editForm = null;

		     $scope.update = function(blog) {
		    	 
		      if(editForm===null){
			      $scope.blogCopy = angular.copy(blog);
	
			      var $form =
			       `
			
			      <div class="container">
			    	  	<div class="row" id ="update">
					   <form id="updatePost" ng-action="save(blogCopy)">
					   	
						  <label for="postName" class="sr-only">Post Name</label>
						  <input type="text" size = "50" ng-model="blogCopy.postName" name="postName" placeholder = "Title">
						  <br><br><br>
						  <textarea name="body" ng-model="blogCopy.body" placeholder="Enter text here" 
						            wrap="hard" rows="20" cols="150">
						  </textarea>
						  <br><br>
						  <button class="btn" ng-click ="save(blogCopy)">Save</button>
			    	  		  <button class="btn" ng-click="cancel()">Cancel</button>
						</form
						</div>
					 </div>
			      `
				    var compiledForm = $compile($form)($scope);
				    editForm = compiledForm;
				    $element.after(compiledForm);

		      		}
		     	}
		     
				$scope.cancel = function() {
				  if(editForm !=null) {
				    editForm.remove(editForm);
				    editForm = null;
				  }
				};
				
				$scope.save = function(blog){
				  $scope.edit(blog);
				  editForm.remove();
				  editForm = null;
				  $scope.blogCopy = {};
				}

		    }
		  }
		});
