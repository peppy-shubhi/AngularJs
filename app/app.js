var myApp=angular.module('myApp',[]);


myApp.controller('myController',['$scope',function($scope){
    
    $scope.arr=[
        {name:"shubhi",
        rate:"20",
        available:true
    },
    {name:"nidhi",
        rate:"25",
        available:true
    },
    {name:"yash",
        rate:"17",
        available:true
    },
    ];

}]);