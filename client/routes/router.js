app.config(function($routeProvider) {
	$routeProvider
	  .when("/", {
	  	templateUrl: "components/templates/main.html",
	  	controller: 'mainController'
	  })
	  .when("/signup", {
	  	templateUrl: "components/templates/signup.html",
	  })
	  .when("/login", {
	  	templateUrl: "components/templates/login.html",
	  	controller: "loginController"
	  })
	  .otherwise({redirectTo:'/'});
})