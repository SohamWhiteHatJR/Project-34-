var ball1;
var position,database;

function setup(){

    database = firebase.database();

    createCanvas(500,500);

    ball1 = createSprite(250,250,10,10);
     ball1.shapeColor = "red";

    var ball1Position = database.ref('ball/position');
    ball1Position.on("value",readPosition,showError);

}

function draw(){
    //background("white");
    if(keyDown(LEFT_ARROW)){
         writePosition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
         writePosition(3,0);
    }
    else if(keyDown(UP_ARROW)){
         writePosition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
         writePosition(0,+3);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x' : position.x+x,
        'y' : position.y+y
    })

}

function readPosition(data){
position = data.val();
console.log(position.x)
console.log(position.y)
ball1.x = position.x;
ball1.y = position.y;
}

function showError(){
console.log("error");
}

