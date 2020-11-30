class Form{
    constructor(){    }
    display(){
        //create and display the title
        var title=createElement('h2');
        title.html("car Racing Game")
        title.position(130,0)
        //create the input box to take the user name,play button and display them
        var input = createInput('name')
        var button=createButton('play')
        var greetings = createElement('h3')
        input.position(130,160)
        button.position(250,200)
        //call a function when the play button is pressed=hide textbox and button,take the user name,increase the player count,write name and playercount in data base,display greetings
        button.mousePressed(function () {
            input.hide()
            button.hide()
            var name=input.value()
            playerCount=playerCount+1
            player.update(name)
            player.updateCount(playerCount)
            greetings.html("hello " + name)
            greetings.position(400,200)
        })
    }
}
