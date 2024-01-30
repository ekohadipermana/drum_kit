alert('Hello there');
document.querySelector('button').addEventListener('click', gotClick); // this line to check if the button clicked then will call gotClick function

function gotClick(){
    alert('I got clicked');
}
