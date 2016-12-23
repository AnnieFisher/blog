// authenticationService.js

var app = angular.module('ngBlog');

app.factory('authenticationService', function($http, $window, $location) {
	// Place JWT into local storage
	var saveToken = function(token) {
		$window.localStorage['post-token'] = token;
	};

	// Retrieve JWT from local storage
	var getToken = function() {
		return $window.localStorage['post-token'];
	};
	
	// TODO: THE ABOVE FUNCTIONS MAY BE CAUSING LOGIN ISSUES, INVESTIGATE TOMORROW

	// Contact the server, authenticate user credentials
	var loginNewUser = function(user) {
		return $http({
			method : 'POST',
			url : 'api/auth/login',
			headers : {
                'Content-Type' : 'application/json'
              },
            data : user
		})
	};

    // Check that a user's login is valid (present AND not expired)
    var isLoggedIn = function() {
      var token = getToken();

      if (token) {
        // $window.atob decodes the encoded string
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };

 // Get current user from JWT
    var currentUser = function() {
      if (isLoggedIn()) {
        var token = getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return {
          username : payload.username,
          id : payload.id,
        };
      }
    };


    // End Session for Current User
    var logout = function () {
        $window.localStorage.removeItem('post-token');
    };
    

    return {
      loginNewUser : loginNewUser,
      logout : logout,
      isLoggedIn : isLoggedIn,
      currentUser : currentUser,
      getToken : getToken,
      saveToken : saveToken
    }

})