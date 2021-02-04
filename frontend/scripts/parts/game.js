class Game{
      constructor(gameWidth,gameHeight){
          this.gameWidth = gameWidth;
          this.gameHeight = gameHeight;
          this.main = ""
          
          this.gamestate = GAMESTATE.MENU;
          this.hop = new Hop(this);
          this.mashpaddle = new Mashpaddle(this);
          this.gameObjects = [];
          this.grains = [];
          this.score = 0;
          this.lives = 1;
          
          new MoveMashPaddle(this.mashpaddle, this);
        }

    start(){
        console.log(this.gamestate)
        if(this.gamestate !== GAMESTATE.MENU  &&
            this.gamestate !==GAMESTATE.RESET) return;

        this.grains = buildLevel(this,level1);
        
        this.gameObjects = [
            this.mashpaddle, this.hop
        ]

        this.gamestate = GAMESTATE.RUNNING;
    }

    update(deltaTime){
        if(this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;
        
        if(this.grains.length === 0 && this.gamestate ===GAMESTATE.RUNNING) this.gamestate = GAMESTATE.WINNER; 
          
        
        if(
            this.gamestate === GAMESTATE.PAUSED || 
            this.gamestate === GAMESTATE.MENU || 
            this.gamestate === GAMESTATE.GAMEOVER ||
            this.gamestate === GAMESTATE.WINNER
        ) 
        return;
          

        [...this.gameObjects, ...this.grains].forEach(object=> object.update(deltaTime));


        this.grains = this.grains.filter(grain=> !grain.breakGrain);
    }

    draw(ctx){
        [...this.gameObjects, ...this.grains].forEach(object => object.draw(ctx));
        
        if(this.gamestate === GAMESTATE.PAUSED){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();

           ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press Esc to Unpause", this.gameWidth/2, this.gameHeight/2);
        };

        if(this.gamestate === GAMESTATE.MENU){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press Space to Start", this.gameWidth/2, this.gameHeight/2);
        };

        if(this.gamestate === GAMESTATE.GAMEOVER){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "black";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Game Over", this.gameWidth/2, this.gameHeight/2);
        };

        //Winner
        if(this.gamestate === GAMESTATE.WINNER){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "black";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("WINNER!", this.gameWidth/2, this.gameHeight/2);
        };
        
        

        //Draw Lives
        ctx.font = "16px Arial";
        ctx.fillStyle = "green";
        ctx.fillText("Lives: "+this.lives, 32, 20);
        ctx.fillText("Score: "+this.score, 615, 20);

    }

    pause(){
        if(this.gamestate === GAMESTATE.PAUSED){
            this.gamestate = GAMESTATE.RUNNING;
        }else if(this.gamestate === GAMESTATE.RUNNING){
            this.gamestate = GAMESTATE.PAUSED;
        
        }

    }

    enterScore(){
        if(this.gamestate === GAMESTATE.WINNER &&
            !this.formRender ||
            this.gamestate === GAMESTATE.GAMEOVER &&
            !this.formRender){
               new EnterScore(this.score)
               this.formRender = true
            }
    }
}