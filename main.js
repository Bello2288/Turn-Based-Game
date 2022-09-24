'use strict';

function changeLore(str) {
    loreText.innerText = str;
}

function lorePlaceholder(){
	loreText.innerText = '';
};

const loreText = document.querySelector(".text-here");
/* === KNIGHT BUTTON 1 === */
const knightBtn1 = document.querySelector('.knightButton1');


 
 knightBtn1.addEventListener("mouseover", button => {
	 console.log('mouse over');
	 changeLore('Heroic Strike: Power sword strike, dealing 1d20 damage.');
	 
 });
 
 knightBtn1.addEventListener("mouseout", button => {
	 console.log('mouse out');
	 lorePlaceholder();
 });
 /* === KNIGHT BUTTON 2 */

const knightBtn2 = document.querySelector('.knightButton2');


 
 knightBtn2.addEventListener("mouseover", button => {
	 console.log('mouse over');
	 changeLore('Cleave: The Knight swings downward, attempting to sever his adversary in half, dealing 1d10 damage. ');
	 
 });
 
 knightBtn2.addEventListener("mouseout", button => {
	 console.log('mouse out');
	 lorePlaceholder();
 });

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