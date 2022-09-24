const playerAttackStrong = document.querySelector(".knightButton1");
const playerAttackMed = document.querySelector(".knightButton2");
const playerAttackWeak = document.querySelector(".knightButton3");
const enemyCurrentHealth = document.querySelector(".enemy-health");

const rng = function randomNumber(min, max) { 
    return Math.round(Math.random() * (max - min) + min);
};

playerAttackStrong.addEventListener('click', strongAttack);
playerAttackMed.addEventListener('click', medAttack);
playerAttackWeak.addEventListener('click', weakAttack);

function strongAttack(button) {

    enemyCurrentHealth.innerHTML = parseInt(enemyCurrentHealth.innerHTML) - rng(0, 20);
       
}

function medAttack(button) {

    enemyCurrentHealth.innerHTML = parseInt(enemyCurrentHealth.innerHTML) - rng(0, 10);
           
 }
    
 function weakAttack(button) {

    enemyCurrentHealth.innerHTML = parseInt(enemyCurrentHealth.innerHTML) - (rng(0, 20)-1);
       
    }

