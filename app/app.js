var myApp=angular.module('myApp',[]);


myApp.controller('myController',['$scope',function($scope){
    
    $scope.arr=[
        {name:"shubhi",
        rate:"20",
    },
    {name:"nidhi",
        rate:"25",
    },
    {name:"yash",
        rate:"17",
    },
    ];

}]);