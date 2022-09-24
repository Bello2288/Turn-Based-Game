const playerAttackStrong = document.querySelector(".knightButton1");
const playerAttackMed = document.querySelector(".knightButton2");
const playerAttackWeak = document.querySelector(".knightButton3");
const enemyCurrentHealth = document.querySelector(".enemy-health");
const playerCurrentHealth = document.querySelector(".player-health");
let delayInMilliseconds = 2000;

const rng = function randomNumber(min, max) { 
    return Math.round(Math.random() * (max - min) + min);
};

playerAttackStrong.addEventListener('click', strongAttack);
playerAttackMed.addEventListener('click', medAttack);
playerAttackWeak.addEventListener('click', weakAttack);

function strongAttack(button) {

    enemyCurrentHealth.innerHTML = parseInt(enemyCurrentHealth.innerHTML) - rng(0, 20);
       
    setTimeout(function(){
        playerCurrentHealth.innerHTML = parseInt(playerCurrentHealth.innerHTML) - rng(0, 20);
    }, delayInMilliseconds);
}

function medAttack(button) {

    enemyCurrentHealth.innerHTML = parseInt(enemyCurrentHealth.innerHTML) - rng(0, 10);

    setTimeout(function(){
        playerCurrentHealth.innerHTML = parseInt(playerCurrentHealth.innerHTML) - rng(0, 10);
    }, delayInMilliseconds);
           
 }
    
 function weakAttack(button) {

    enemyCurrentHealth.innerHTML = parseInt(enemyCurrentHealth.innerHTML) - (rng(0, 5)-1);

    setTimeout(function(){
        playerCurrentHealth.innerHTML = parseInt(playerCurrentHealth.innerHTML) - (rng(0, 5)-1);
    }, delayInMilliseconds);
       
 }

