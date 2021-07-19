class Form {

  constructor() {
 this.input = createInput("").attribute("placeholder", "Nickname");
    this.button = createButton('PLAY');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    
    this.reset = createButton('Reset');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  enter() {
    this.title.hide();
    this.input.hide();
    this.button.hide();
    this.about.hide();

    player.name = this.input.value();
    playerCount++;
    player.index = playerCount;
    player.updateName();
    player.updateCount(playerCount);

    
    
  }
  display(){
    
    

    this.input.position(displayWidth/2 - 200 , displayHeight/2 + 250);
    this.button.position(displayWidth/2 - 140, displayHeight/2+300);

    
    






    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      
      player.update();
      player.updateCount(playerCount);
      
    });
    
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      ship.visible=false;
      bgS.velocityY=0;
      
    
    database.ref("/").update({
      player: null,
      
    });});
  }
}
