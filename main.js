const playerAttackStrong = document.querySelector(".knightButton1");
const playerAttackMed = document.querySelector(".knightButton2");
const playerAttackWeak = document.querySelector(".knightButton3");
const enemyCurrentHealth = document.querySelector(".enemy-health");
const playerCurrentHealth = document.querySelector(".player-health");
let delayInMilliseconds = 1000;
let grunt = new Audio('grunt.mp3');
let oof = new Audio('oof.mp3');
let background = new Audio('background-edit.mp3');
background.volume=0.1;


const rng = function randomNumber(min, max) { 
    return Math.round(Math.random() * (max - min) + min);
};

playerAttackStrong.addEventListener('click', strongAttack);
playerAttackMed.addEventListener('click', medAttack);
playerAttackWeak.addEventListener('click', weakAttack);



function strongAttack(button) {

    enemyCurrentHealth.innerHTML = parseInt(enemyCurrentHealth.innerHTML) - rng(0, 20);
    grunt.play();
       
    setTimeout(function(){
        playerCurrentHealth.innerHTML = parseInt(playerCurrentHealth.innerHTML) - rng(0, 20);
        oof.play();
    }, delayInMilliseconds);

    background.play();
    background.loop=true;
}

function medAttack(button) {

    enemyCurrentHealth.innerHTML = parseInt(enemyCurrentHealth.innerHTML) - rng(0, 10);
    grunt.play();

    setTimeout(function(){
        playerCurrentHealth.innerHTML = parseInt(playerCurrentHealth.innerHTML) - rng(0, 10);
        oof.play();
    }, delayInMilliseconds);

    background.play();
    background.loop=true;
           
 }
    
 function weakAttack(button) {

    enemyCurrentHealth.innerHTML = parseInt(enemyCurrentHealth.innerHTML) - (rng(0, 5)-1);
    grunt.play();

    setTimeout(function(){
        playerCurrentHealth.innerHTML = parseInt(playerCurrentHealth.innerHTML) - (rng(0, 5)-1);
        oof.play();
    }, delayInMilliseconds);

    background.play();
    background.loop=true;
       
 }

