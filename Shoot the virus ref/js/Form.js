class Form {
  constructor() {
    
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Go");
    this.titleImg = createImg("./assets/game title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 100);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);

    
   
  }

  setElementsStyle() {
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
    
  }
  
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    
  }
  hideMap(){
    this.mapButton.hideMap();
    this.mapButton1.hideMap();
    this.mapButton2.hideMap();
    this.mapButton3.hideMap();
  }
  
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      player.getDistance();
      showMap();
     ChooMap();
    
    });
    
    
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
function showMap() {
  this.mapButton = createImg("assets/map1.png")
    this.mapButton1 = createImg("assets/map2.png")
    this.mapButton2 = createImg("assets/map3.png")
    this.mapButton3 = createImg("assets/map4.png")
    this.mapButton.position(width / 2 - 660, height / 2 - 100);
    this.mapButton1.position(width / 2 - 330, height / 2 - 100);
    this.mapButton2.position(width / 2 - 5, height / 2 - 100);
   this.mapButton3.position(width / 2 +334, height / 2 - 100);
   disappearMap();
}
function ChooMap() {
swal({
  title: `To continue please pick a map`,
    confirmButtonText: "Ok"
 });
}
function ChooChara() {
  swal({
    title: `To start the please pick a character`,
      confirmButtonText: "Ok"
   });
  }
 function disappearMap() {
  this.mapButton.mousePressed(() => {
    this.mapButton1.hide();
    this.mapButton.hide();
    this.mapButton2.hide();
    this.mapButton3.hide();
    park = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
    park.addImage(parkimg);
    park.scale = 2.48;
    next = createSprite(width / 2 - 10, height / 2 - 20);
    next.addImage(nextimg);
    next.scale = 0.3;
  })
  this.mapButton1.mousePressed(() => {
    this.mapButton1.hide();
    this.mapButton.hide();
    this.mapButton2.hide();
    this.mapButton3.hide();
    village = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
    village.addImage(villageimg);
    village.scale = 1.1;
    next = createSprite(width / 2 - 10, height / 2 - 20);
    next.addImage(nextimg);
    next.scale = 0.3;
  })
  this.mapButton2.mousePressed(() => {
    this.mapButton1.hide();
    this.mapButton.hide();
    this.mapButton2.hide();
    this.mapButton3.hide();
    graveyard = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
 graveyard.addImage(graveyardimg);
 graveyard.scale = 3.1;
 next = createSprite(width / 2 - 10, height / 2 - 20);
    next.addImage(nextimg);
    next.scale = 0.3;
  })
  this.mapButton3.mousePressed(() => {
    this.mapButton1.hide();
    this.mapButton.hide();
    this.mapButton2.hide();
    this.mapButton3.hide();
    city = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
 city.addImage(cityimg);
 city.scale = 0.4;
 ChooChara();
 man1 = createImg("assets/man1.png")
 man1.position(width / 2 - 460, height / 2 - 100)
 man2 = createImg("assets/man2.png")
 man2.position(width / 2 - 170, height / 2 - 70)
 man3 = createImg("assets/man3.png")
 man3.position(width / 2 + 120, height / 2 - 70)
 man3 = createImg("assets/man3.png")
 man3.position(width / 2 + 120, height / 2 - 70)
   
    
  })
  
 }
