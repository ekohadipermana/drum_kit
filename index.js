// alert('Hello there');
// document.querySelector('button').addEventListener('click', gotClick);  this line to check if the button clicked then will call gotClick function

// document.querySelector('.set button').addEventListener('click', gotClick);

// creating elements
let buttonW = document.querySelector('.w');
let buttonS = document.querySelector('.s');
let buttonA = document.querySelector('.a');


function gotClick() {
    // alert('I got clicked');
    let audio = new Audio('sounds/crash.mp3');
    audio.play();
}


// new one
for (let i = 0; i < document.querySelectorAll('.drum').length; i++){
    document.querySelectorAll('button')[i].addEventListener('click', gotClick);
}


