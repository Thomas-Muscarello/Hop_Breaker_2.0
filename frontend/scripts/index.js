const api = new API
const main = document.querySelector('main')
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
let lastTime = 0;


//Game Size
const GAME_WIDTH = 650;
const GAME_HEIGHT = 450;

//GAMESTATE
const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  WINNER: 4,
  RESET: 5
  };

//Start New Game
let game =new Game(GAME_WIDTH,GAME_HEIGHT);

function gameLoop(timeStamp){
  //calculate how much time has passed
  let deltaTime = timeStamp-lastTime;
  lastTime = timeStamp;

  //clear screen
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  //Update and draw
  game.update(deltaTime);
  game.draw(ctx);
  game.enterScore();
  

  //Call game again with new time stamp
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
