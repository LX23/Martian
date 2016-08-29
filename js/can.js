angular.module("myapp").controller("resultCtrl",function(){
    var myscore=["B+","A","A+","A-","A+"]
    var myweek=["第二周","第三周","第四周","第五周","第六周"]
    var score=["F","D","C-","C","C+","B-","B","B+","A-","A","A+"]
    var scoreY=["100","90","80","70","60","50","40","30","20","10","0"]

    var oCan=document.getElementById("can")
    var blockwidth=oCan.width/5;
    var scaleHeight=1.3;
    var paddingTop=30;
    oCan.height=scaleHeight*100+paddingTop;
    var ctx=oCan.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(-100,oCan.height);
    ctx.font="16px Arial";
    ctx.fillStyle="#17ca92"
    for(var i=0;i<myscore.length;i++){
        ctx.lineTo(blockwidth/2+i*blockwidth,scoreY[score.indexOf(myscore[i])]*scaleHeight+paddingTop);
        ctx.fillText(myscore[i],blockwidth/2+i*blockwidth-5,scoreY[score.indexOf(myscore[i])]*scaleHeight+paddingTop-10);
    };
    ctx.lineTo(oCan.width+100,oCan.height);
    ctx.strokeStyle="#3cb3d5";
    ctx.stroke();

    //渐变背景
    var grd=ctx.createLinearGradient(0,0,blockwidth*(myscore.length-1),scaleHeight*100+10);
    grd.addColorStop(0,"#2cc599");
    grd.addColorStop(1,"#75c7ef");
    ctx.fillStyle=grd;
    ctx.fill();

    //底部星期背景矩形
    ctx.fillStyle="#2ac598";
    ctx.fillRect(0,oCan.height-25,oCan.width,25);

    //底部星期文字
    ctx.font="10px 宋体";
    ctx.fillStyle="#fff";
    for(var i=0;i<myscore.length;i++){
        ctx.fillText(myweek[i],blockwidth/2+i*blockwidth-10,oCan.height-8);
    };

    var oCan1=document.getElementById("can1");
    var ctx1=oCan1.getContext("2d");
    var grd1=ctx1.createLinearGradient(0,0,oCan1.width,oCan1.height);
    grd1.addColorStop(0,"#2cc599");
    grd1.addColorStop(1,"#75c7ef");
    ctx1.fillStyle=grd1;
    ctx1.fillRect(0,0,oCan1.width,oCan1.height);

    //贝塞尔曲线
    var grd2=ctx1.createLinearGradient(0,0,2,2);
    grd2.addColorStop(0,"#b5e867");
    grd2.addColorStop(0.5,"#8bf6a4");
    grd2.addColorStop(1,"#7cffd8");
    ctx1.lineWidth=4;
    ctx1.strokeStyle=grd2;
    ctx1.beginPath();
    ctx1.moveTo(0,oCan1.height-60);
    ctx1.bezierCurveTo(100,100,260, 160, oCan1.width-40, 80);
    ctx1.stroke();
    ctx1.closePath();

    //添加文字和图片
    ctx1.font="16px 宋体";
    ctx1.fillStyle="#fff";
    ctx1.fillText("击败了85%的同学",40,30);
    var image = new Image();
    image.src = "images/set/jibai.png";
    image.onload = function () {
        ctx1.drawImage(image,10,10,25,25)
      }
});