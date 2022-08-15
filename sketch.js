var bg;
var monkey;
var monkeyImg;
function preload(){
    bg = loadImage("./assets/Fundo1.jpg");
    monkeyImg = loadImage("./assets/macaco.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    monkey = createSprite(width/2,height/2,10,10);
    monkey.addImage("monkey",monkeyImg);
}

function draw(){
    background(bg);
    
    drawSprites();
}

