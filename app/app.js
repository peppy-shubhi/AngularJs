var myApp=angular.module('myApp',[]);


myApp.controller('myController',['$scope',function($scope){
    $scope.remove_entry=function(a){
        var removed=$scope.arr.indexOf(a);
        $scope.arr.splice(removed,1);
    }
    $scope.add_entry=function()
    {
        $scope.arr.push({
            name:$scope.add.name,
            rate:$scope.add.rate,
            available:$scope.available=true
        })
        $scope.add.name="";
        $scope.add.rate="";
    }
    
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