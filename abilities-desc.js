'use strict';

function changeLore(str) {
    loreText.innerText = str;
}

function lorePlaceholder(str){
	loreText.innerText = str;
};

const loreText = document.querySelector(".text-here");
/* === KNIGHT BUTTON 1 === */
const knightBtn1 = document.querySelector('.knightButton1');

knightBtn1.addEventListener("mouseover", button => {
	console.log('mouse over');
   if (btn1Text.innerText === knightB1){
	   changeLore('Heroic Strike: Powerful sword strike, dealing 1d20 damage.')
   } else if (btn1Text.innerText === mageB1) {
	   changeLore('Fire Blast: an explosion of fire encompasses the enemy, dealing 1d20 damage.')
   };
});
	
 
 
 knightBtn1.addEventListener("mouseout", button => {

	 console.log('mouse out');
	 if (playerDescription.innerText === knightDesc) {
		lorePlaceholder(knightText);
	} else if (playerDescription.innerText === mageDesc) {
		lorePlaceholder(mageText);
	};
});
 /* === KNIGHT BUTTON 2 */

const knightBtn2 = document.querySelector('.knightButton2');


 
 knightBtn2.addEventListener("mouseover", button => {
	 console.log('mouse over');
	 if (btn2Text.innerText === knightB2) {
	 	changeLore('Cleave: The Knight swings downward, attempting to sever his adversary in half, dealing 1d10 damage. ');
	 } else if (btn2Text.innerText === mageB2) {
		changeLore('Shield Bash: the Battle Mage lunges forward shield-first, dealing 1d10 damage.')
	 }
 });
 
 knightBtn2.addEventListener("mouseout", button => {
	 console.log('mouse out');
	 if (playerDescription.innerText === knightDesc) {
		lorePlaceholder(knightText);
	} else if (playerDescription.innerText === mageDesc) {
		lorePlaceholder(mageText);
	};
});

 /* === KNIGHT BUTTON 3 */

 const knightBtn3 = document.querySelector('.knightButton3');


 
 knightBtn3.addEventListener("mouseover", button => {
	 console.log('mouse over');
	 if (btn3Text.innerText === knightB3) {
	 changeLore('Headbutt: The Knight thrusts his head forward onto the enemy, dealing 1d5 + 1 damage.');
	 } else if (btn3Text.innerText === mageB3) {
		changeLore('Slash: in a violent, sweeping movement the Battle Mage slices the enemy, dealing 1d5 + 1 damage.')
	 }
 });
 
 knightBtn3.addEventListener("mouseout", button => {
	console.log('mouse out');
	 if (playerDescription.innerText === knightDesc) {
		   lorePlaceholder(knightText);
	   } else if (playerDescription.innerText === mageDesc) {
		   lorePlaceholder(mageText);
	   };
});




 
 /* === COUNTESS MORGANA WITCH BUTTONS === */
 function witchChangeLore(str) {
    witchLoreText.innerText = str;
}

function witchLorePlaceholder(str){
	witchLoreText.innerText = str;
};
 
const witchLoreText = document.querySelector(".witch-text-here");
/* === WITCH BUTTON 1 === */
const witchBtn1 = document.querySelector('.witchButton1');


 
 witchBtn1.addEventListener("mouseover", button => {
	 console.log('mouse over');
	 if (witchBtn1.innerText === witchB1) {
		witchChangeLore('Arcane Barrage: Magical bombardment, dealing 1d20 damage.');
		} else if (witchBtn1.innerText === chieftanB1) {
		   witchChangeLore('Brutalize: The War Chieftan roars with bestial vigor, charging at the enemy, dealing 1d20 damage.')
		}
	});
 
 witchBtn1.addEventListener("mouseout", button => {
	 console.log('mouse out');
	 if (enemyDescription.innerText === witchDesc) {
		witchLorePlaceholder(witchText);
	} else if (enemyDescription.innerText === chieftanDesc) {
		witchLorePlaceholder(chieftanText);
	};
});
 /* === WITCH BUTTON 2 */

const witchBtn2 = document.querySelector('.witchButton2');


 
 witchBtn2.addEventListener("mouseover", button => {
	 console.log('mouse over');
	 if (witchBtn2.innerText === witchB2) {
		witchChangeLore('Lightning Bolt: A bolt of lightning falls from the clouds striking the enemy, dealing 1d10 damage.');
		} else if (witchBtn2.innerText === chieftanB2) {
		   witchChangeLore('Pummel: in quick, nimble thrusts, the War Chieftan punches his target, dealing 1d10 damage.')
		}
	});
 
 witchBtn2.addEventListener("mouseout", button => {
	 console.log('mouse out');
	 if (enemyDescription.innerText === witchDesc) {
		witchLorePlaceholder(witchText);
	} else if (enemyDescription.innerText === chieftanDesc) {
		witchLorePlaceholder(chieftanText);
	};
});

 /* === WITCH BUTTON 3 */

 const witchBtn3 = document.querySelector('.witchButton3');


 
 witchBtn3.addEventListener("mouseover", button => {
	 console.log('mouse over');
	
	 if (witchBtn3.innerText === witchB3) {
		witchChangeLore('Icy Touch: Embracing her icy heart, the witch reaches out towards her enemy, dealing 1d5 + 1 damage.');
		} else if (witchBtn3.innerText === chieftanB3) {
		   witchChangeLore('Backhand: with his free hand, the War Chiefhand swats at his enemy, dealing 1d5 + 1 damage.')
		}
	});
 
 witchBtn3.addEventListener("mouseout", button => {
	 console.log('mouse out');
	 if (enemyDescription.innerText === witchDesc) {
		witchLorePlaceholder(witchText);
	} else if (enemyDescription.innerText === chieftanDesc) {
		witchLorePlaceholder(chieftanText);
	};
});