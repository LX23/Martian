angular.module("myapp").controller("com_CGTop",function($scope) {
        var ov = document.getElementsByTagName("video")[0];
        var btn = document.getElementsByClassName("_btn_")[0];
        var box = document.getElementsByClassName("_box_")[0];
        var play=document.getElementsByClassName("play")[0];
        var stop=document.getElementsByClassName("stop")[0];
        var lx_model1=document.getElementsByClassName("lx_model1")[0];
        var cpm=document.getElementsByClassName("cpm")[0];
        var NoServices=document.getElementsByClassName("NoServices")[0];
        var flush=document.getElementsByClassName("flush")[0];
        var op=document.getElementsByClassName("op")[0];
        //重新加载
        $scope.reload1=function(){
            flush.className="flush rotates";
            op.style.display="none";
            setInterval(function(){
                NoServices.style.display="none";
            },2000)
        };

        //流量观看时
        $scope.play=function(){
                lx_model1.style.display="block";
                cpm.style.display="block";
            box.style.display="none";
        };
        $scope.bofang=function(){
            lx_model1.style.display="none";
            cpm.style.display="none";
            if(ov.paused){
                ov.play();
                play.style.display= "none";
                stop.style.display= "block";
            }else{
                ov.pause();
                stop.style.display= "none";
                play.style.display= "block";
            }
        };
        $scope.quxiao=function(){
            lx_model1.style.display="none";
            box.style.display="block";
            cpm.style.display="none";
                ov.pause();
                stop.style.display= "none";
                play.style.display= "block";
        };

        //播放按钮
        $scope.traffic= function () {
            if(ov.paused){
                ov.play();
                play.style.display= "none";
                stop.style.display= "block";
            } else{
                ov.pause();
                stop.style.display= "none";
                play.style.display= "block";
            }
        };
});