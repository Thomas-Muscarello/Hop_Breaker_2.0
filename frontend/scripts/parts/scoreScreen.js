class ScoreScreen{
    constructor(){
        main.innerHTML=""

        this.scoresContainer = document.createElement('ol')

        api.getUsers()
        .then(this.renderScores)
        .catch(()=> console.log("ERRROR"))

        main.append(this.scoresContainer)
        this.renderNewGameBttn()
    }

    //Render
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
                p.innerText = `${user.name} - Points: ${score.points}`
                li.append(p)
            })
            this.scoresContainer.append(li)
        })
    }

    renderNewGameBttn = () =>{
        const newGameBttn = document.createElement('button')
        newGameBttn.innerText = "New Game"
        newGameBttn.addEventListener("click", this.handleClickNewGame)
        main.append(newGameBttn)
    }

    //Listner
    handleClickNewButton = ()=>{
        new Game
    }

    //To Delete Users
    /*
    delete = (user, li) => {
        const api = new API
        api.deleteUser(user.id)
    }
    */
}