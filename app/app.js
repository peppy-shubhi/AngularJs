var myApp=angular.module('myApp',[]);


myApp.controller('myController',['$scope',function($scope){
    $scope.message="hello people";
    $scope.arr=['shubhi','nidhi','yash'];

}]);