class Player{
    constructor(){    }
    //read the playercount from database
        getCount(){
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on("value",function(data){
        playerCount=data.val()
        })
        }
        //write the playercount value to the dataBase
        updateCount(count){
            database.ref('/').update({
                playerCount:count
            })
            
        }
        //update the player details in the data base
        update(name){
            var playerIndex = "player"+ playerCount
            database.ref(playerIndex).set({
                name:name
            })
        }
}