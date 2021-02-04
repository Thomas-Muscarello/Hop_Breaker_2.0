 //Hits with anything
 function hopHit(hop,gameObject){
        let bottomHop = hop.position.y + hop.size;
        let topOfHop = hop.position.y;

        //Define Size of object getting hit
        let topOfItemHit= gameObject.position.y;
        let leftOfItemHit = gameObject.position.x;
        let rightOfItemHit = gameObject.position.x + gameObject.width;
        let bottomOfItemHit = gameObject.position.y + gameObject.height;

        //Allows to bounce off object
        if(
            bottomHop >= topOfItemHit &&
            topOfHop <= bottomOfItemHit &&
            hop.position.x >= leftOfItemHit &&
            hop.position.x + hop.size <= rightOfItemHit){
                
        return true;
            }else{
        return false;
        }
    }