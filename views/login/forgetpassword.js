
angular.module("myapp")
    .controller("forgetPasswordCtrl",function($scope,$interval,$timeout,$location){
    //表单验证
    $scope.data={
        tel:'',
        testify:'',
        new:'',
        confirms:''
    };

  //验证码  定时器
    $scope.isShow=true;
    $scope.hide=function(){
       if($scope.isShow){
           $scope.count=60;
           if($scope.data){
               $interval(function (){
                   if($scope.count==0){
                       $scope.isShow=true;
                   };
                   $scope.count-=1;
               },1000);

           };
       };
         $scope.isShow=!$scope.isShow;
    }
    //非空验证
    $scope.obj={};
    $scope.obj.user="";
    $scope.obj.pwd="";
    $scope.loginprompt=false;
        var timer=null;
    $scope.authentication=function(){
        $timeout.cancel(timer)
        if($scope.obj.user&&$scope.obj.pwd){
            $location.path("tabs/home")
        }else if($scope.obj.user==""){
            $scope.loginprompt=true;
            timer=$timeout(function(){$scope.loginprompt=false;},3000)
        }
    }


});






