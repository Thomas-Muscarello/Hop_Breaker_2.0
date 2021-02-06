class ScoreScreen{
    constructor(){
        div.innerHTML=""

        this.scoresContainer = document.createElement('ol')

        api.getUsers()
        .then(this.renderScores)
        .catch(()=> console.log("ERRROR"))

        this.renderNewGameBttn()
        div.append(this.scoresContainer)
    }

    //Render
    //Show all Scores with Users
    renderScores = users =>{
        users.forEach(user => {
            const li = document.createElement('li')
            li.className = "user-listing"
            /*
            To Delete Users
            const deleteButtn = document.createElement("button")
            deleteButtn.innerText = "delete"
            li.append(deleteButtn)
            deleteButtn.addEventListener("click", () => this.delete(user))
            */
            user.scores.forEach(score => {
                const p = document.createElement("p")
                p.className = "score-listing"
                p.innerText = `User Name: ${user.name} - Points: ${score.points}`
                li.append(p)
            })
            this.scoresContainer.append(li)
        })
    }

    renderNewGameBttn = () =>{
        const newGameBttn = document.createElement('button')
        newGameBttn.innerText = "New Game"
        newGameBttn.addEventListener("click", this.handleClickNewGame)
        div.append(newGameBttn)

    }

    //Listner
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
            this.scoresContainer.remove()
            event.target.remove()
            
        }
    }

    //To Delete Users
    /*
    delete = (user, li) => {
        const api = new API
        api.deleteUser(user.id)
    }
    */
}

//scores in decending order