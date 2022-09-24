const playerAttackStrong = document.querySelector(".knightButton1");
const playerAttackMed = document.querySelector(".knightButton2");
const playerAttackWeak = document.querySelector(".knightButton3");
const enemyCurrentHealth = document.querySelector(".enemy-health");
const playerCurrentHealth = document.querySelector(".player-health");
let delayInMilliseconds = 1000;

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

 /* === KNIGHT BUTTON 3 */

 const knightBtn3 = document.querySelector('.knightButton3');


 
 knightBtn3.addEventListener("mouseover", button => {
	 console.log('mouse over');
	 changeLore('Headbutt: The Knight thrusts his head forward onto the enemy, dealing 1d5 + 1 damage.');
	 
 });
 
 knightBtn3.addEventListener("mouseout", button => {
	 console.log('mouse out');
	 lorePlaceholder();
 });

 /* === COUNTESS MORGANA WITCH BUTTONS === */

