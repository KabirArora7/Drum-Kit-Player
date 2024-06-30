function playSound(evt){
    switch (evt) {
            case 'w':
                audio = new Audio (("./sounds/crash.mp3"));
                audio.play();
                break;
    
            case 'a':
                audio = new Audio (("./sounds/kick-bass.mp3"));
                audio.play();
                break;

            case 's':
                audio = new Audio (("./sounds/snare.mp3"));
                audio.play();
                break;

            case 'd':
                audio = new Audio (("./sounds/tom-1.mp3"));
                audio.play();
                break;

            case 'j':
                audio = new Audio (("./sounds/tom-2.mp3"));
                audio.play();
                break;

            case 'k':
                audio = new Audio (("./sounds/tom-3.mp3"));
                audio.play();
                break;

            case 'l':
                audio = new Audio (("./sounds/tom-4.mp3"));
                audio.play();
                break;
        
            default:
                break;
    }
}
    





document.addEventListener("keypress" , function(event) {
    // console.log(event)
    playSound(event['key']);
    buttonAnimation(event.key);
} )



numOfButtons = document.querySelectorAll(".drum").length

for (var i=0; i<numOfButtons; i++) {
    var keyPressed = document.querySelectorAll(".drum")[i];
    // console.log(keyPressed.innerHTML)
    keyPressed.addEventListener("click", function(){
        buttonInnerHTML = this.innerHTML
        playSound(buttonInnerHTML)

        buttonAnimation(buttonInnerHTML)




    })

    

}


function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")
    setTimeout(function(){activeButton.classList.remove("pressed")}, 100)
}
