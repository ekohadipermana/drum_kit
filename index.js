// alert('Hello there');
// document.querySelector('button').addEventListener('click', gotClick);  this line to check if the button clicked then will call gotClick function

// document.querySelector('.set button').addEventListener('click', gotClick);

function gotClick(){
    alert('I got clicked');
}

// new one
for (let i = 0; i < document.querySelectorAll('.drum').length; i++){
    document.querySelectorAll('button')[i].addEventListener('click', gotClick);
}

