//      EVENT LISTENER
//event listeners are what we tell our computer to do whenever any activity is going 
// on in the web page. LIke when the user clicks on something or press the keyboard, etc
//an anonymos function does not have a name and the functio is directly written in the listener

// Creating a function that does something when a button is clicked
// for all the buttons, we weill need to create a forEach loop because we are looping through



//    USING FOREACH WITH NORMAL FUNCTION

// document.querySelectorAll("button").forEach(function buttonLoopArrowFunc(buttonFunc) {buttonFunc.addEventListener("click", handleClick);});// takes 2 argument, the type of event and a listener(function to be called and it does not take parenthesis)

// function handleClick(){
// alert("I got clicked")// we want our button to say this when clicked.
// }

//     USING FOREACH WITH ARROW FNCTION

document.querySelectorAll("button").forEach(buttonLoopArrowFunc =>{buttonLoopArrowFunc.addEventListener("click", handleClick)})// takes 2 argument, the type of event and a listener(function to be called and it does not take parenthesis)

function handleClick(){
    //we want to play the sound but before that, we need to know which button triggered 
    // the eventListener; which button was clicked. and its done by the method (this)
    // this.style.color="blue";
    // and then we need to select te text and pla different souds when different btoons if pressed
    //by creating a switch statement
let buttonText = this.textContent;
buttonAnimation(this.textContent);
switch (buttonText) {
    case "w":
        let crash =new Audio("sounds/crash.mp3")
        crash.play();
        break; //break tells the code to exit this statement and continue with the next
        case "a":
            let kickBass =new Audio("sounds/kick-bass.mp3")
            kickBass.play();
        break;
        case "s":
            let snare =new Audio("sounds/snare.mp3")
            snare.play();
        break;
        case "d":
            let tom1 =new Audio("sounds/tom-1.mp3")
            tom1.play();
        break;
        case "j":
            let tom2 =new Audio("sounds/tom-2.mp3")
            tom2.play();
        break;
        case "k":
            let tom3 =new Audio("sounds/tom-3.mp3")
            tom3.play();
        break;
        case "l":
            let tom4 =new Audio("sounds/tom-4.mp3")
            tom4.play();
    default:console.log(buttonText); //its like the else steement that covers what the if and if else doesnt cover/ like what if  //the buttons wasnt w, a, s, k, d, etc and instead i ot u or 1 or 6
}

}

// Adding keydown Event Listener
document.addEventListener("keydown", function(event){  // even shows which event the keydown was pressed
    let keyWord = event.key;
    buttonAnimation(event.key);
    switch (keyWord) {
        case "w":
            let crash =new Audio("sounds/crash.mp3")
            crash.play();
            break; //break tells the code to exit this statement and continue with the next
            case "a":
                let kickBass =new Audio("sounds/kick-bass.mp3")
                kickBass.play();
            break;
            case "s":
                let snare =new Audio("sounds/snare.mp3")
                snare.play();
            break;
            case "d":
                let tom1 =new Audio("sounds/tom-1.mp3")
                tom1.play();
            break;
            case "j":
                let tom2 =new Audio("sounds/tom-2.mp3")
                tom2.play();
            break;
            case "k":
                let tom3 =new Audio("sounds/tom-3.mp3")
                tom3.play();
            break;
            case "l":
                let tom4 =new Audio("sounds/tom-4.mp3")
                tom4.play();
        default:console.log(keyWord); //its like the else steement that covers what the if and if else doesnt cover/ like what if  //the buttons wasnt w, a, s, k, d, etc and instead i ot u or 1 or 6
    }
});

//     CREATING A BTTON ANIMATION

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

// a method is a function attached to an object and mthod is called by using the dot notation