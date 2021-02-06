//When GAMESTATE is GAMEOVER || WINNER
class EnterScore {
    constructor(score){
        this.score = score
        div.innerHTML = ""

        this.html = document.createElement('div')
        this.html.id = "score-container"

        this.renderScoreMessage();
        this.renderForm();
        this.renderButtn();

        div.append(this.html);

    }

    //Render Methods

    renderScoreMessage = () =>{
        const scoreMessage = document.createElement('p')
        scoreMessage.innerText = `The game has ended with your final score being ${this.score}`
        this.html.append(scoreMessage);
    }

    renderForm= () =>{
        const nameForm = document.createElement('form')
        const nameLabel = document.createElement('label')
        nameLabel.innerText = "Name: "
        this.nameInput = document.createElement('input')
        this.nameInput.type = "text"
        
        const submitBttn = document.createElement('input')
        submitBttn.type = "submit"
        submitBttn.value = "Post Score"
        
        nameForm.append(nameLabel, this.nameInput, submitBttn)
        this.html.append(nameForm)
        
        nameForm.addEventListener("submit", this.handleSubmit)
        
    }

    renderButtn = () =>{
        const seeScoreBttn = document.createElement('button')
        seeScoreBttn.innerText = "See all scores"
        seeScoreBttn.addEventListener("click", this.handleClickAllScores)

        const newGameBttn = document.createElement('button')
        newGameBttn.innerText = "New Game"
        newGameBttn.addEventListener("click", this.handleClickNewGame)

        this.html.append(newGameBttn,seeScoreBttn)
    }

    //Event Listeners

    handleSubmit = event => {
        event.preventDefault()
        if(!this.nameInput.value){
            alert("You Must Enter a Name!")
        }else{
            api.postUserScore({
                user: {
                name: this.nameInput.value
            },
            score: {
                points: this.score
            }
        })
        event.target.remove()
    }
    }

    handleClickAllScores = () =>{
        new ScoreScreen
    }

    handleClickNewGame = event =>{
        event.preventDefault()
        if(!this.restarted){
            game.gamestate = GAMESTATE.MENU
            game.reset(ctx);

            game.gameWidth = GAME_WIDTH;
            game.gameHeight = GAME_HEIGHT;
            game.div = ""
          
            game.gamestate = GAMESTATE.MENU;
            game.hop = new Hop(game);
            game.mashpaddle = new Mashpaddle(game);
            game.gameObjects = [];
            game.grains = [];
            game.score = 0;
            game.lives = 1;
          
            new MoveMashPaddle(game.mashpaddle, game);

            this.restarted = true
            this.html.remove()
            
        }
    }
}