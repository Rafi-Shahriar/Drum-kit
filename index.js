




//for mouse click
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(event) {
        console.log(event);
        var key = this.textContent;

        makeAnimation(key);   //animation
        makeSound(key);       //sound
        });
}



//for keyboard
document.addEventListener("keypress", function(event) {
    makeAnimation(event.key);   //animation
    makeSound(event.key);       //sound
});


//make the sound
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
            
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
    
        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;   
    }
}



//for animation
function makeAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    //change animation
    activeButton.classList.add("pressed");

    //revert back to original animation
    //the timer here is in miliseconds.
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}




