var numOfBtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfBtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var symbol = this.innerHTML;
        makeSound(symbol);
        createAnimation(symbol);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    createAnimation(event.key);
});

function makeSound(value) {
    switch (value) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            alert("Not applicable.");
    }
}

function createAnimation(currentKey) {
    var actionButton = document.querySelector("."+currentKey);
    actionButton.classList.add("pressed");
    setTimeout(function() {
        actionButton.classList.remove("pressed");
    },100);
}
