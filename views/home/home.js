angular.module("myapp").controller("homeCtrl",function($scope,$ionicModal,$state,$timeout){
    $ionicModal.fromTemplateUrl('views/modal/share.html', {
        scope: $scope,       // 作用域使用父作用域
        //animation: 'slide-in-up'
//                        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
        animation: 'scale-in'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    // 离开时清除model
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    $scope.goacitve=function(){
        $state.go("tabs.community.activityDet")
        //$location.path("tabs/community/activityDet")
    };
    //作品分享点赞
    $scope.isShow=true;
    $scope.count=0;
    $scope.hide=function(){
        $scope.isShow=!$scope.isShow;
        $scope.count=1;
    };
    //作业成绩保存链接
    $scope.getlink=false;
    $scope.getlinkfn=function(){
        $scope.getlink=true;
        $timeout(function(){
            $scope.getlink=false;
            $state.go("tabs.result")
        },3000);
    }

});
angular.module("myapp").controller("exitCtrl",function($scope,$ionicModal,$location,$state){
    $ionicModal.fromTemplateUrl('views/modal/exit.html', {
        scope: $scope,       // 作用域使用父作用域
        //animation: 'slide-in-up'
//                        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
      animation: 'scale-in'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    $scope.exitModal = function() {
        $state.go("tabs.loginagain")
        $scope.modal.hide();
    };
    // 离开时清除model
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
});
angular.module("myapp").controller("photoCtrl",function($scope,$ionicModal){
    $ionicModal.fromTemplateUrl('views/modal/cameraphoto.html', {
        scope: $scope,       // 作用域使用父作用域
        //animation: 'slide-in-up'
//                        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
     animation: 'scale-in'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    // 离开时清除model
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
});

//加载时显示警告对话框控制器
angular.module("myapp").controller("pastCtrl",function($scope,$ionicLoading, $timeout){
    $ionicLoading.show({
        templateUrl: 'views/modal/past.html',
        delay:1000
    });
    $timeout(function(){$ionicLoading.hide();},5000)
    $scope.hidepast=function() {
        $ionicLoading.hide();
    }
});