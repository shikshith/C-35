class Game{
    constructor(){
    
    }
    //read the gamestate from the data base
    getState(){
    var gameStateRef=database.ref('gameState')
    gameStateRef.on("value",function(data){
    gameState=data.val()
    })
    }
    //write the new value of the gameState to the dataBase
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    //start the game,if the gameState is 0 then create a new player in the dataBase, get the count of the player, display the form
    start(){
        if(gameState === 0){
          player = new Player()
          player.getCount()
          form = new Form()
          form.display()
          
        }
    }
}