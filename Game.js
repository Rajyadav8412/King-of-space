class Game {
          constructor(){
        
          }
        
          getState(){
            var gameStateRef  = database.ref('gameState');
            gameStateRef.on("value",function(data){
               gameState = data.val();
            })
        
          }
        
          update(state){
            database.ref('/').update({
              gameState: state
            });
          }
        
          async start(){
            if(gameState === 0){
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
              }
              form = new Form();
              form.display();
            }

            
             
            

            
            
             bgS=createSprite(displayWidth/2,displayHeight/2,displayWidth*2,displayHeight*3);
            bgS.addImage(bg2);
            bgS.velocityY=5;
            bgS.visible=false;

            ship=createSprite(displayWidth/2,displayWidth/2,10,10);
            ship.addImage(shipImg);
            ship.scale=0.3;
            ship.visible=false;

            coinGroup= createGroup();
            rGroup=createGroup();
            bGroup=createGroup();
            alienGroup=createGroup();
            fireGroup1=createGroup();
            fireGroup2=createGroup();
            fireGroup3=createGroup();
            fireGroup4=createGroup();

            


            

            



            
        
            
          }
        
          play(){
            form.hide();

            

            

            

            
        
            Player.getPlayerInfo();
            

            if(allPlayers !== undefined){
              

              bgS.visible=true;
              
              
            
              
              if(bgS.y>=displayHeight/2){
                bgS.y=displayHeight/2-500;
                bgS.velocityY=5;
              }



              

              if(frameCount%10===0 && ship.visible!=false && keyIsDown(38)){
                var fire1=createSprite(ship.x-80,ship.y-25,10,10);
                fire1.addImage(weaponImg);
                fire1.scale=0.05;
                fire1.velocityY=-5;
                fire1.lifetime=80;

               var  fire2=createSprite(ship.x+80,ship.y-25,10,10);
                fire2.addImage(weaponImg);
                fire2.scale=0.05;
                fire2.velocityY=-5;
                fire2.lifetime=80;

                fireGroup3.add(fire1);
                fireGroup4.add(fire2);

                

              }

              if(frameCount%140===0 && gameState===1){
                var coins=createSprite(random(50,displayWidth),ship.y-800,10,10);
                coins.addImage(coinImg);
                coins.scale=0.1;
                coins.velocityY=5;

                coinGroup.add(coins);


              }

              if(frameCount%180===0 && gameState===1){
                var rStar=createSprite(random(50,displayWidth),ship.y-900,10,10);
                rStar.addImage(redImg);
                rStar.scale=0.1;
                rStar.velocityY=5;

                rGroup.add(rStar);
              }

              if(frameCount%280===0 && gameState===1){
                var bStar=createSprite(random(50,displayWidth),ship.y-1000,10,10);
                bStar.addImage(blueImg);
                bStar.scale=0.05;
                bStar.velocityY=5;

                bGroup.add(bStar);

              }


              if(frameCount%200===0 && gameState===1){
                var aliens=createSprite(random(100,displayWidth-100),ship.y-1000,10,10);
                aliens.scale=0.3;
                aliens.velocityY=5;
                aliens.lifetime=400;

                var rand=Math.round(random(1,3));
                switch(rand){
                  case 1: aliens.addImage(alienImg1);
                  break;
                  case 2: aliens.addImage(alienImg2);
                  aliens.scale=0.5;
                  break;
                  case 3: aliens.addImage(alienImg3);
                  break;
                }

                alienGroup.add(aliens);

                  var fire3=createSprite(aliens.x-70,aliens.y-25,10,10);
                  fire3.addImage(weaponImg2);
                  fire3.scale=0.05;
                  fire3.velocityY=6.5;
                  fire3.lifetime=1000;
  
                  var fire4=createSprite(aliens.x+70,aliens.y-25,10,10);
                  fire4.addImage(weaponImg2);
                  fire4.scale=0.05;
                  fire4.velocityY=6.5;
                  fire4.lifetime=1000;

                  fireGroup1.add(fire3);
                  fireGroup2.add(fire4);

                  

              }

              if(coinGroup.isTouching(ship)){
                coinGroup.destroyEach();
              }

              if(rGroup.isTouching(ship)){
                rGroup.destroyEach();
              }

              if(bGroup.isTouching(ship)){
                bGroup.destroyEach();
              }

              ship.visible=true;
              
              if(fireGroup1.isTouching(ship) || fireGroup2.isTouching(ship)){
                game.update(2);
              }

              

              if(fireGroup4.isTouching(alienGroup) || fireGroup3.isTouching(alienGroup)){
                alienGroup.destroyEach();
                fireGroup3.destroyEach();
                fireGroup4.destroyEach();
                fireGroup2.destroyEach();
                fireGroup1.destroyEach();
              }

        

              textAlign(CENTER);
                textSize(20);
                fill("red");
                text(allPlayers.name, ship.x, ship.y + 100);

                camera.position.x = displayWidth/2;
                  camera.position.y = ship.y-200;

                  if(keyIsDown(37) && player!=null){
                    ship.velocityX=-5;


                  }else if(keyIsDown(39) && player!=null){
                    ship.velocityX=5;
                  }
            }
          }

          end(){
            ship.visible=false;
            bgS.visible=false;
            alienGroup.visible=false;
           
            

            var gameOver = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
            gameOver.addImage(gameOverImg);
            gameOver.scale=3.5;



          }

          
}
  
