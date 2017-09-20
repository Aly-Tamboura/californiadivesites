const app = angular.module('App', ["ngRoute", "uiGmapgoogle-maps"]);

app.controller('mainController', function($scope, $interval) {

 var mapOptions = {
      zoom: 9,
      center: new google.maps.LatLng(36.800772,-121.947358),
      mapTypeId: google.maps.MapTypeId.SATELLITE
  }
  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

  $scope.markers = []
  var mark = new google.maps.Marker({
          position: {lat: Number('36.800772'), lng: -121.947358},
          map: $scope.map,
          title: 'Test!'
        });
  $scope.markers.push(mark)


});

app.controller("loginController", function ($scope, $location) {
  $scope.authenticate = function (username) {
    // write authentication code here..
    //$location.path('/main');
  };
});