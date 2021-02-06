class API{
    constructor(port=3000){
        this.port = port
        this.url= `http://localhost:${port}`
    }
   
    parseJSON = resp => resp.json()
    headers = {"Accepts":"application/json","Content-Type":"application/json"}
    
    //URL Getters
    get usersURL(){
        return this.url +`/users`
    };

    get scoresURL(){
        return this.url +`/scores`
    };

    //Get

    //Fetch to get all users
    getUsers = () => fetch(this.usersURL).then(this.parseJSON)
    getUser = (userID) => fetch(this.usersURL +`/${userID}`).then(this.parseJSON);

    //Fetch to get all scores
    getScores = () => fetch(this.scoresURL).then(this.parseJSON)
    getScore = (scoreID) => fetch(this.scoresURL + `/${scoreID}`).then(this.parseJSON);
    
    //Post

    //Fetch to Post new User
    postUser= body => fetch(this.usersURL,{
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(body)
    }).then(this.parseJSON)

    // Fetch Post new User and Score
    postUserScore = body => fetch(this.scoresURL,{
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(body)
    }).then(this.parseJSON)

    //Delete method.... Commented out becuase Users shouldn't be able to delete anyone they want but it is still needed during testing
  /*  deleteUser = (id) => {
        return fetch(this.usersURL + `/${id}`,{
            method: "DELETE",
            headers: this.headers
        }).then(this.parseJSON)
    }
  */
}