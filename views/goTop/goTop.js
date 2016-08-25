angular.module("myapp").controller("communityCtrl",function($scope,$http) {
    $scope.products=[
        {"img":"images/community/com_bg_02.jpg","title":"创意在哪里？","content":"#海报设计"},
        {"img":"images/community/com_bg_03.jpg","title":"奇幻森林之旅","content":"#影视特效"},
        {"img":"images/community/com_bg_04.jpg","title":"我们一路向前","content":"#行业经验"}
    ];
    //     上拉刷新
    $scope.infinite=function(){
        $http.get("json/community.json").success(function(data){
            Array.prototype.push.apply($scope.products,data);
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };
});
