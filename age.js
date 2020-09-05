
let clickMe = document.getElementById('blue');
let removeMe = document.getElementById('red');

function myAge(){
    let div = document.getElementById('box');
    let para = document.createElement('p');

    let inputYear = prompt('Enter Year;')
    let ageInDays = (2020 - inputYear) *356;
    let paratext = document.createTextNode('You are ' + ageInDays + ' days old!');
    para.appendChild(paratext); 
    div.appendChild(para);
    para.style.fontSize = bold;
}

function removemyAge(){
    document.querySelector('p').remove();
}