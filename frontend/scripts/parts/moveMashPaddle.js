class MoveMashPaddle{
    constructor(mashpaddle, game){
        document.addEventListener('keydown',event=>{
            switch(event.keyCode){
                case 37:
                    mashpaddle.moveLeft();
                    break;
                case 39:
                    mashpaddle.moveRight();
                    break;
                case 27: //ESC
                    game.pause();
                    break;
                case 32: //SPACE
                    game.start();
                    break;
            }
        });

        document.addEventListener('keyup',event=>{
            switch(event.keyCode){
                case 37:
                    if(mashpaddle.speed <0)
                    mashpaddle.stop();
                    break;
                case 39:
                    if(mashpaddle.speed >0)
                    mashpaddle.stop();
                    break;
            }
        });

    }
}