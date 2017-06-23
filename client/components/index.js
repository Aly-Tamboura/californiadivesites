const app = angular.module('App', []);

app.controller('pagecontroller', function($scope) {

});

app.directive('diveApp', function(){
	return {
		controller: 'pagecontroller',
		restrict: 'E',
		template: `<div>
                 <h1>Entry Point</h1>
							</div>`
	}
})