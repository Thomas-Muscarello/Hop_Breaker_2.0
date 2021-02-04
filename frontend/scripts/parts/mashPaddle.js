class Mashpaddle{
    constructor(game){
        //When paddle created, it has a:
        this.gameWidth = game.gameWidth
        this.width = 150;
        this.height = 30;

        this.maxSpeed = 10;
        this.speed = 0;

        this.position = {
            //Make paddle in middle of screen
            x: game.gameWidth / 2 - this.width / 2 ,
            y: game.gameHeight - this.height - 10,

        }
    }
    
    moveLeft(){
        this.speed = -this.maxSpeed;

    }

    moveRight(){
        this.speed = this.maxSpeed;
    }

    stop(){
        this.speed = 0
    }

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
   
    update(deltaTime){
        this.position.x += this.speed;

        //Stops on left wall
        if(this.position.x < 0) 
        this.position.x = 0;

        //Stop @ right wall
        if(this.position.x + this.width> this.gameWidth)
        this.position.x = this.gameWidth - this.width;
    }
    
}