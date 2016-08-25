angular.module("myapp").controller("activityCtrl",function($scope,$interval,$ionicModal){
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

	$scope.myDate = new Date();
	$scope.oYear = $scope.myDate.getFullYear().toString().slice(2);
	$scope.month = ($scope.myDate.getMonth()+1).toString();
	$scope.day = $scope.myDate.getDay().toString();
	$scope.min = $scope.myDate.getMinutes();
	$scope.isShow = false;
	var future_time = 1000*30;
	var timer = $interval(countdown,1000);
	function countdown (){
		    if(future_time>0){
		    	future_time-=1000;
		    }
		    if(future_time==1000){
		    	$scope.isShow = true;
		    	$interval.cancel(timer);
		    }
	};
	countdown ();
	
});
