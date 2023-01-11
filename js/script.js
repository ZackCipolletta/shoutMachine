let size = 10;

function getUsrInput() {
    let input = document.getElementById('userInput').value;
    let printLoc = document.getElementById('capitalInput');
    printLoc.innerHTML = input.toUpperCase();
}

function font() {
    let para = document.getElementById('capitalInput');
    let body = document.querySelector('body');
    para.style.fontSize = size + 'px';
    size += 15;
    if (size > 100) {
    body.style.background= 'red';
    }
}

function submit() {
    let formEl = document.querySelector('form');
    formEl.onsubmit = function(event) {
        event.preventDefault();
        getUsrInput();
        font();
    }
}

window.onload = function() {
    submit();
}

//let fontSize = document.getElementById("capitalInput").style.fontSize;

