const app = angular.module('App', ["ngRoute", "uiGmapgoogle-maps"]);

app.controller('mainController', function($scope, $interval) {

 var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(37.774172,-122.431558),
      mapTypeId: google.maps.MapTypeId.TERRAIN
  }
  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

});

app.controller("loginController", function ($scope, $location) {
  $scope.authenticate = function (username) {
    // write authentication code here..
    //$location.path('/main');
  };
});