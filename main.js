
var x1;
var y1;
var x2;
var y2;


function makeStraight(){
    canvas= document.getElementById("myCanvas");
    ctx=canvas.getContext('2d');

    x1 = prompt("Podaj x 1 punktu");
    y1 = prompt("Podaj y 1 punktu");

    x2 = prompt("Podaj x 2 punktu");
    y2 = prompt("Podaj y 2 punktu");

    ctx.beginPath();
    ctx.strokeStyle='rgb(230,120,10,10)';
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.moveTo(x1,y1);
    ctx.arc(x1,y1,2,0,2*Math.PI);
    ctx.moveTo(x2,y2);
    ctx.arc(x2,y2,5,0,2*Math.PI);
    ctx.stroke();


    console.log(x1);
    console.log(y1);
    console.log(x2);
    console.log(y2);
    var tab=[x1,y1,x2,y2];
    return tab;
}
// var xcheck;
// var ycheck;

function getPointToCheck(){
    xcheck = prompt("Podaj x  punktu");
    ycheck = prompt("Podaj y  punktu");
    var tab = [xcheck,ycheck];
    return tab;
}

function onWhichSide(x1Straight,y1Straight,x2Straight, y2Straight, xToCheck, yToCheck){

    canvas= document.getElementById("myCanvas");
    ctx=canvas.getContext('2d');

    taba=[x1Straight,y1Straight,1];
    tabb=[x2Straight,y2Straight,1];
    tabc=[xToCheck,yToCheck,1];

    ctx.beginPath();
    ctx.strokeStyle='rgb(200,100,10,10)';
    ctx.arc(xToCheck,yToCheck,2,0,2*Math.PI);
    ctx.stroke();

    var det = ((taba[0]*tabb[1]*tabc[2])+(taba[1]*tabb[2]*tabc[0])+(taba[2]*tabb[0]*tabc[1]))-(taba[2]*tabb[1]*tabc[0])-(taba[0]*tabb[2]*tabc[1])-(taba[1]*tabb[0]*tabc[2]);

    console.log(det);

    if(parseInt(det)>=0){
        alert("Punkt leży po prawej stronie");
        return true;}
    // }
    // else if(parseInt(det)==0){
    //    alert( "Punkt lezy na prostej");
    //    return true;
    // }
    else if(parseInt(det)<0){
        alert("Punkt lezy po lewej stronie");
        return false;

    }

}

function checkWichSide(){
    var straight=makeStraight();
    var tabPoint=getPointToCheck();
    onWhichSide(straight[0],straight[1],straight[2],straight[3],tabPoint[0],tabPoint[1]);
}

function bothOnSide(){
    var straight=makeStraight();
    var point1=getPointToCheck();
    var point2=getPointToCheck();

    ifBoth(straight[0],straight[1],straight[2],straight[3],point1[0],point1[1],point2[0],point2[1]);
}


function ifBoth(x1Straight,y1Straight,x2Straight,y2Straight,x1Check,y1Check,x2Check,y2Check){
    canvas= document.getElementById("myCanvas");
    ctx=canvas.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle='rgb(200,100,10,10)';
    ctx.moveTo(x1Check,y1Check);
    ctx.arc(x1Check,y1Check,4,0,2*Math.PI);
    ctx.moveTo(x2Check,y2Check);
    ctx.arc(x2Check,y2Check,4,0,2*Math.PI);
    ctx.stroke();

    var firstPoint = onWhichSide(x1Straight,y1Straight,x2Straight,y2Straight,x1Check,y1Check);
    var secondPoint = onWhichSide(x1Straight,y1Straight,x2Straight,y2Straight,x2Check,y2Check);

    if(firstPoint==secondPoint){
        alert("Sa po tej samej stronie");
        return true;
    }
    else{
        alert("Sa po roznych stronach");
        return false;
    }
}



function ifCrossing(x1Straight1,y1Straight1,x2Straight1,y2Straight1,x1Straight2,y1Straight2,x2Straight2,y2Straight2){


    var straight1 = ifBoth(x1Straight1,y1Straight1,x2Straight1,y2Straight1,x1Straight2,y1Straight2,x2Straight2,y2Straight2);
    console.log(straight1);
    var straight2 = ifBoth(x1Straight2,y1Straight2,x2Straight2,y2Straight2,x1Straight1,y1Straight1,x2Straight2,y2Straight2);
    console.log(straight2);
    if(straight1===straight2){
        alert("Nie przecinaja sie")
        return false;
    }
    else{
        alert("Przecinaja sie")
        return true;
    }

}

function crossingButton(){
    var straight1 =makeStraight();
    var straight2=makeStraight();

    ifCrossing(straight1[0],straight1[1],straight1[2],straight1[3],straight2[0],straight2[1],straight2[2],straight2[3]);
}



function wycz() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 600, 600);
    }
}