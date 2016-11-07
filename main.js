var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

function deg2rad(degree){
    return (Math.PI/180)*degree;
}

function getX(radius , angle){
    return (radius * Math.cos(deg2rad(angle))) + centerX;
}

function getY(radius , angle){
    return (radius * Math.sin(deg2rad(angle))) + centerY;
}



function drawClock(){
    var myDate = new Date();
    var sec = myDate.getSeconds();
    var milliSec = myDate.getMilliseconds();
    var min = myDate.getMinutes();
    var hr = myDate.getHours();
    var dateStr = myDate.toDateString();
    //console.log(sec + " " + milliSec);
    ctx.fillStyle='lightblue';
    ctx.fillRect(0,0,2*centerX,2* centerY);
    
    //Second Arm
    ctx.strokeStyle = 'red';
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'red';
    ctx.beginPath();
    ctx.arc(centerX,centerY,150,deg2rad(270),deg2rad(270 + ((sec + milliSec/1000 ) * 6)),false);
    ctx.lineWidth = 10;
    ctx.stroke();
    
    //Minute Arm
    ctx.strokeStyle = 'green';
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'green';
    ctx.beginPath();
    ctx.arc(centerX,centerY,170,deg2rad(270),deg2rad(270 + (( min + sec/60 ) * 6)),false);
    ctx.lineWidth = 19;
    ctx.stroke();
    
    //Hour Arm
    ctx.strokeStyle = 'darkorange';
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'orange';
    
    ctx.beginPath();
    ctx.arc(centerX,centerY,200,deg2rad(270),deg2rad(270 + ((hr + min/60 ) * 15)),false);
    ctx.lineWidth = 22;
    ctx.stroke();
    
    ctx.fillStyle = 'black';
    ctx.shadowBlur = 7;
    ctx.shadowColor = 'black';
    ctx.font = "30px Arial"
    ctx.strokeStyle = 'black';
    ctx.fillText(dateStr,centerX - 120 ,centerY);
    //ctx.fillText('12',centerX - 15,35);
    //ctx.fillText('6',centerX - 15,500-15);
    //ctx.fillText('3',465,centerY);
    //ctx.fillText('9',20,centerY);
    /*ctx.fillText('1',getX(222,300),getY(222,300));
    ctx.fillText('2',getX(222,330),getY(222,330));
    ctx.fillText('3',getX(222,0),getY(222,0));
    ctx.fillText('4',getX(222,30),getY(222,30));
    ctx.fillText('5',getX(232,60),getY(232,60));
    ctx.fillText('6',getX(242,90),getY(242,90));
    ctx.fillText('7',getX(242,120),getY(242,120));
    ctx.fillText('8',getX(242,150),getY(242,150));
    ctx.fillText('9',getX(242,180),getY(242,180));
    ctx.fillText('10',getX(242,210),getY(242,210));
    ctx.fillText('11',getX(232,240),getY(232,240));
    ctx.fillText('12',getX(222,270),getY(222,270));*/
    
    //ctx.fillText(sec,getX(160,(270 + (sec * 6))) , getY(130,(270 + (sec * 6))));
    ctx.font = "20px Arial"
    ctx.strokeStyle = 'black';
    ctx.fillText(hr+":",220,centerY + 50);
    ctx.fillText(min+":",250,centerY + 50);
    ctx.fillText(sec,280,centerY + 50);
    
    setTimeout(drawClock,60);
}


drawClock();
