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

