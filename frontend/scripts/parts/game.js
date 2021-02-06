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
//Allows you to start the game with [SPACE] bar
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
//Update the game
    update(deltaTime){
        //Gameover if you have zero lives
        if(this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;
        //Winner if all the grains are gone
        if(this.grains.length === 0 && this.gamestate ===GAMESTATE.RUNNING) this.gamestate = GAMESTATE.WINNER; 
          
        if(
            this.gamestate === GAMESTATE.PAUSED || 
            this.gamestate === GAMESTATE.MENU || 
            this.gamestate === GAMESTATE.GAMEOVER ||
            this.gamestate === GAMESTATE.WINNER ||
            this.gamestate === GAMESTATE.RESET
        ) 
        return;
          

        [...this.gameObjects, ...this.grains].forEach(object=> object.update(deltaTime));


        this.grains = this.grains.filter(grain=> !grain.breakGrain);
    }

    draw(ctx){
        [...this.gameObjects, ...this.grains].forEach(object => object.draw(ctx));
        
        //Pause Screen
        if(this.gamestate === GAMESTATE.PAUSED){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();

           ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press Esc to Unpause", this.gameWidth/2, this.gameHeight/2);
        };
        //Menu Screen
        if(this.gamestate === GAMESTATE.MENU){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press Space to Start", this.gameWidth/2, this.gameHeight/2);
        };
        //Gameover Screen
        if(this.gamestate === GAMESTATE.GAMEOVER){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "black";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Game Over", this.gameWidth/2, this.gameHeight/2);
        };

        //Winner Screen
        if(this.gamestate === GAMESTATE.WINNER){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "black";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("WINNER!", this.gameWidth/2, this.gameHeight/2);
        };

        //Draw Lives and Score
        ctx.font = "16px Arial";
        ctx.fillStyle = "green";
        ctx.fillText("Lives: "+this.lives, 32, 20);
        ctx.fillText("Score: "+this.score, 615, 20);

    }
//Allows you to pause game with [ESC]
    pause(){
        if(this.gamestate === GAMESTATE.PAUSED){
            this.gamestate = GAMESTATE.RUNNING;
        }else if(this.gamestate === GAMESTATE.RUNNING){
            this.gamestate = GAMESTATE.PAUSED;
        }

    }
//Allows you to enter Score
    enterScore(){
        if(this.gamestate === GAMESTATE.WINNER &&
            !this.formRender ||
            this.gamestate === GAMESTATE.GAMEOVER &&
            !this.formRender){
               new EnterScore(this.score)
               this.formRender = true
            }
    }
//Trying to reset the game
    reset(ctx){
        if(this.gamestate === GAMESTATE.MENU){
        console.log(this.gamestate)
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
        game =new Game
        return game;
        }
    }

}