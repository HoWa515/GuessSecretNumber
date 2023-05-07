'use strict';

// generate a number;initialize score;
let secretNr = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNr;
// Handle user guess
document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    
    //no guess;
    if(!guess){
        document.querySelector('.message').textContent = 'Please enter a number!'
    } 
    //guess the right number;
    else if(guess === secretNr){
        document.querySelector('.message').textContent = 'Correct!🎉🎉🎉';
        document.querySelector('body').style.backgroundColor = 'pink';
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //guess is wrong;
    else if(guess !== secretNr){
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNr?
            `${guess} is too high`:`${guess} is too low`;
            score --;
            document.querySelector('.score').textContent = score;
            }else{
            document.querySelector('.message').textContent = 'You lose!';
            } 
    }
     
})

document.querySelector('.again').addEventListener('click',function(){
score = 20;
secretNr = Math.trunc(Math.random()*20) + 1;
document.querySelector('.message').textContent = 'Start guessing...';
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent ='?';
document.querySelector('.guess').value ='';
document.querySelector('body').style.backgroundColor = 'rgb(172, 201, 172)'
})

 