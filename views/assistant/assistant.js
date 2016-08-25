angular.module("myapp").controller("assistantCtrl",function($scope,$ionicModal,$timeout){
    $scope.i=0;//定义一个提交问题索引变量
    $scope.obj={};//新建一个空对象
    $scope.promptbox=false;
    $scope.helpbtnclass=function(){
        //console.log($scope.obj.action);//使用对象解决作用域问题
        //return  $scope.action==""?"helpbtn":"achelpbtn";
        if($scope.obj.action){
            return "achelpbtn";
        }else{
            return "helpbtn";
        }
    }
    //4星弹窗
    $ionicModal.fromTemplateUrl('views/modal/fourstar.html', {
        scope: $scope,       // 作用域使用父作用域
        //animation: 'slide-in-up'
//        animation: 'slide-in-left'
//        animation: 'slide-in-right'
          animation: 'scale-in'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function(index) {
        for(var i=0;i<$scope.stars.length;i++){
            $scope.stars[i].starsrc="images/assistant/unselstar.png";
                $scope.text="";
            }
        $scope.i=index;//取得索引
        $scope.modal.show();

    };
    // 离开时清除model
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    //问题提交
    $scope.process=[];
    $scope.help=function(){
        var item={
            nowDate:new Date(),
            states:0,
            state:"处理中",
            evaluate:false,
            problem:$scope.obj.action
        }
        $scope.process.push(item);
        $scope.obj.action="";
        $scope.promptbox=true;
        $timeout(function(){$scope.promptbox=false;},3000)
    };

    //4星评价
    $scope.stars=[
        {"starnum":1,"starsrc":"images/assistant/unselstar.png","text":"未解决"},
        {"starnum":2,"starsrc":"images/assistant/unselstar.png","text":"不满意"},
        {"starnum":3,"starsrc":"images/assistant/unselstar.png","text":"满意"},
        {"starnum":4,"starsrc":"images/assistant/unselstar.png","text":"非常满意"}
    ];
    $scope.initnum=0;
    $scope.text="";
    $scope.clickstar=function(star){
        $scope.initnum=star.starnum;
        for(var i=0;i<$scope.stars.length;i++){
            if($scope.initnum>=$scope.stars[i].starnum){
                $scope.stars[i].starsrc="images/assistant/selstar.png";
                $scope.text= $scope.stars[i].text
            }else{
                $scope.stars[i].starsrc="images/assistant/unselstar.png";
            }
        }
    }
    //评价状态处理
    $scope.closeModal = function() {
        $scope.process[$scope.i].state="已处理";
        $scope.process[$scope.i].evaluate=true;
        $scope.process[$scope.i].states=$scope.initnum;
        $scope.process[$scope.i].problem= $scope.obj.action;
        console.log($scope.process[$scope.i]);
        $scope.modal.hide();
    };
})

