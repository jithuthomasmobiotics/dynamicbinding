var app =angular.module("app",[]);

app.controller('keymembers', function($scope, $http, $timeout) {

  // Function to get the data
  $scope.getData = function(){
      $http.get("data/table1.json")
      .then(function(response) {
          console.log(response);
          $scope.keymem = response.data;
      });
  };

  // Function to replicate setInterval using $timeout service.
  $scope.intervalFunction = function(){
    $timeout(function() {
      $scope.getData();
      $scope.intervalFunction();
  }, 1000)
  };

  // Kick off the interval
  $scope.intervalFunction();
});


app.controller('savings', function($scope, $http, $timeout) {

  // Function to get the data
  $scope.getData = function(){
      $http.get("data/table2.json")
      .then(function(response) {
          console.log(response);
          $scope.save = response.data;
      });
  };

  // Function to replicate setInterval using $timeout service.
  $scope.intervalFunction = function(){
    $timeout(function() {
      $scope.getData();
      $scope.intervalFunction();
  }, 1000)
  };

  // Kick off the interval
  $scope.intervalFunction();
});
