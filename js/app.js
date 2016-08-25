var myapp=angular.module("myapp",["ionic"]);
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
     $ionicConfigProvider.backButton.text("");
     $ionicConfigProvider.backButton.previousTitleText(true);

    //android tabs在底部
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('bottom');//默认为left

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    //登录路由(钦)
    $stateProvider.state("login",{
        url:"/login",
        templateUrl:"views/login/login.html",
        controller:"forgetPasswordCtrl"
    });
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html"
    });
    //主页路由
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tabs-home":{
            templateUrl:"views/home/home.html",
            controller:"homeCtrl"

        }}
    });
    $stateProvider.state("tabs.workbox",{
        url:"/workbox",
        views:{"tabs-home":{
            templateUrl:"views/home/workbox.html"
        }}
    });
    $stateProvider.state("tabs.zphz",{
        url:"/zphz",
        views:{"tabs-home":{
            templateUrl:"views/home/zphz.html",
            controller:"homeCtrl"
        }}
    });

    //设置路由(杰)
    $stateProvider.state("tabs.set",{
        url:"/set",
        views:{"tabs-home":{
            templateUrl:"views/set/set.html"
        }}
    });
    //修改密码路由(杰)
    $stateProvider.state("tabs.password",{
        url:"/password",
        views:{"tabs-home":{
            templateUrl:"views/password/password.html"
        }}
    });
    //成绩路由(杰)
    $stateProvider.state("tabs.result",{
        url:"/result",
        views:{"tabs-home":{
            templateUrl:"views/result/result.html"
        }}
    });
    //职素分(杰)
    $stateProvider.state("tabs.job_quality",{
        url:"/job_quality",
        views:{"tabs-home":{
            templateUrl:"views/job_quality/job_quality.html"
        }}
    });
    //分享路由(杰)
    $stateProvider.state("tabs.share",{
        url:"/share",
        views:{"tabs-home":{
            templateUrl:"views/share/share.html",
            controller:"homeCtrl"
        }}
    });

    //注册路由(钦)
    $stateProvider.state("tabs.forgetpassword",{
        url:"/forgetpassword",
        views:{"tabs-home": {
            templateUrl: "views/login/forgetpassword.html",
            controller:"forgetPasswordCtrl"
        }}
    });
    $stateProvider.state("tabs.loginagain",{
        url:"/loginagain",
        views:{"tabs-home": {
            templateUrl: "views/login/login2.html"
        }}
    });

    //助手路由
    $stateProvider.state("tabs.assistant",{
        url:"/assistant",
        views:{"tabs-assistant":{
            templateUrl:"views/assistant/assistant.html",
            controller:"assistantCtrl"

        }}
    });
    //社区路由
    $stateProvider.state("tabs.community",{
        url:"/community",
        abstract:true,
        views:{"tabs-community":{
            templateUrl:"views/community/community.html"
        }}
    });
    //goTop页面路由
    $stateProvider.state("tabs.community.goTop",{
        url:"/goTop",
        views:{"tabs-goTop":{
            templateUrl:"views/goTop/goTop.html",
            controller:"communityCtrl"
        }}
    });
    //goTop详情页面路由
    $stateProvider.state("tabs.community.goTopDdt",{
        url:"/goTopDdt",
        views:{"tabs-goTop":{
            templateUrl:"views/goTop/goTopDdt.html",
            controller:"com_CGTop"
        }}
    });
    //活动页面路由
    $stateProvider.state("tabs.community.activity",{
        url:"/activity",
        views:{"tabs-activity":{
            templateUrl:"views/activity/activity.html",
            controller:"activityCtrl"
        }}
    });
    //活动详情页面路由
    $stateProvider.state("tabs.community.activityDet",{
        url:"/activityDet",
        views:{"tabs-activity":{
            templateUrl:"views/activity/activityDet.html",
            controller:"activityCtrl"
        }}
    });

    //校园页面路由
    $stateProvider.state("tabs.community.college",{
        url:"/college",
        views:{"tabs-college":{
            templateUrl:"views/college/college.html"
        }}
    });
    //校园详情页面路由
    $stateProvider.state("tabs.community.collegeInfor",{
        url:"/collegeInfor",
        views:{"tabs-college":{
            templateUrl:"views/college/collegeInfor.html"
        }}
    });
    //邮件页面路由
    $stateProvider.state("tabs.community.mail",{
        url:"/mail",
        views:{"tabs-mail":{
            templateUrl:"views/mail/mail.html"
        }}
    });
    //$urlRouterProvider.otherwise("/tabs/home")
    $urlRouterProvider.otherwise("/login")
});

myapp.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });

            scope.$on('$ionicView.beforeLeave', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
});




