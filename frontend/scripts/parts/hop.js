class Hop{
    constructor(game){
        this.image = document.getElementById('hop');

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;
        this.size = 30;
        
        this.reset();
        

    }

    reset(){
        this.position = {x:10, y:200};
        this.speed={x:4, y:-3}; 
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x,this.position.y, this.size, this.size);
    }

    update(deltaTime){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        //Get the ball to bouce of walls; Added .size to ensure it did go past line.

        if(this.position.x + this.size > this.gameWidth || this.position.x <0){
            this.speed.x = -this.speed.x;
        }

        //Hit Top of Box
        if( this.position.y <0){
            this.speed.y = -this.speed.y;
        }

        //Lose a Life (Hits bottom)
        if(this.position.y + this.size > this.gameHeight){
            this.game.lives--;
            this.reset();
        }

         if(hopHit(this, this.game.mashpaddle)){
            this.speed.y = -this.speed.y;
            this.position.y = this.game.mashpaddle.position.y - this.size;
        } 
    }
}