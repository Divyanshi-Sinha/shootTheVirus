var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;                        //C41// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles; // C41//SA
var cars = [];
var bg,bgimg
var city,cityimg
var graveyard,graveyardimg
var man1,man1img
var man2,man2img
var man3,man3img
var man4,man4img
var map1,map1img
var map2,map2img
var map3,map3img
var map4,map4img
var park,parkimg
var play,playimg
var shop,shopimg
var village,villageimg


function preload() {
  
    bgimg = loadImage("assets/background.jpg")
    cityimg = loadImage("assets/city.jpg")
    graveyardimg = loadImage("assets/graveyard.jpg")
    man1img = loadImage("assets/man1.png")
    man2img = loadImage("assets/man2.png")
    man3img = loadImage("assets/man3.png")
    man4img = loadImage("assets/man4.png")
    map1img = loadImage("assets/map1.png")
    map2img = loadImage("assets/map2.png")
    map3img = loadImage("assets/map3.png")
    map4img = loadImage("assets/map4.png")
    shopimg = loadImage("assets/shop.png")  
    playimg = loadImage("assets/play.png")
    villageimg = loadImage("assets/village.png")
    parkimg = loadImage("assets/park.jpg")
    nextimg = loadImage("assets/next.png")
    
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
 bg.addImage(bgimg)
 bg.scale = 2;
 
 //park.visible = false;
}

function draw() {
  //background("bgimg");
 
drawSprites();  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mapHide(){
  sprite.visible = false;
}
