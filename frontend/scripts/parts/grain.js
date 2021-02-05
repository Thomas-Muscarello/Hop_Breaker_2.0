class Grain{
    constructor(game, position){
        this.image = document.getElementById('grain');

        this.game = game;
        
        this.position = position
        
        this.width = 65;
        this.height = 24;

        this.breakGrain = false;

    }

    update(){
        if(hopHit(this.game.hop, this)){
            this.game.hop.speed.y = -this.game.hop.speed.y;

            //Gets hit by ball
            this.breakGrain = true;
            //Add to score
            game.score ++
        }
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x,this.position.y, this.width, this.height);
    }
}