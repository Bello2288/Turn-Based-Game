const playerAttackStrong = document.querySelector(".knightButton1");
const playerAttackMed = document.querySelector(".knightButton2");
const playerAttackWeak = document.querySelector(".knightButton3");
const enemyCurrentHealth = document.querySelector(".enemy-health");
const playerCurrentHealth = document.querySelector(".player-health");
let delayInMilliseconds = 1000;
let grunt = new Audio('grunt.mp3');
let oof = new Audio('oof.mp3');
let background = new Audio('background.mp3');
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
    
}

function medAttack(button) {

    enemyCurrentHealth.innerHTML = parseInt(enemyCurrentHealth.innerHTML) - rng(0, 10);
    grunt.play();

    setTimeout(function(){
        playerCurrentHealth.innerHTML = parseInt(playerCurrentHealth.innerHTML) - rng(0, 10);
        oof.play();
    }, delayInMilliseconds);

    background.play();
           
 }
    
 function weakAttack(button) {

    enemyCurrentHealth.innerHTML = parseInt(enemyCurrentHealth.innerHTML) - (rng(0, 5)-1);
    grunt.play();

    setTimeout(function(){
        playerCurrentHealth.innerHTML = parseInt(playerCurrentHealth.innerHTML) - (rng(0, 5)-1);
        oof.play();
    }, delayInMilliseconds);

    background.play();
       
 }

// Change Characters Functionality //

'use strict';


const playerSelection = document.querySelector(".player-switch-hover");
//const playerOptions = playerSelection.querySelectorAll("option");
var playerDescription = document.getElementById("player-class");
var playerImg = document.getElementById("player-img");
var playerText = document.querySelector(".text-here");


var btn1Text = document.querySelector(".knightButton1");
var btn2Text = document.querySelector(".knightButton2");
var btn3Text = document.querySelector(".knightButton3");


//const playerButtons = document.querySelector(".player-abilities");
//console.log(playerButtons[0], 'buttons');

const knightDesc = 'Knight';
const knightImg = ("images/knight.jpg");
const knightText = "The knight comes from the Kingdom of Lordaeron. He is renowned for his glorious achievements at the Siege of Black Temple.";
const knightB1 = 'Heroic Strike';
const knightB2 = 'Cleave';
const knightB3 = 'Headbutt';

/*                 <ul class="player-abilities">
                    <li><button type="button" class="knightButton1">Heroic Strike</button></li>
                    <li><button type="button" class="knightButton2">Cleave</button></li>
                    <li><button type="button" class="knightButton3">Headbutt</button></li>
                </ul> */


const mageDesc = 'Battle Mage';
const mageImg = ("images/battle-mage.jpg");
const mageText = "Battle mage stuff here";
const mageB1 = 'Mage Attack 1';
const mageB2 = 'Mage Attack 2';
const mageB3 = 'Mage Attack 3';

function changeCharacter(num){
	if(num === 0){
		console.log('knight');
		playerDescription.innerText = knightDesc;
		playerImg.src = knightImg;
		playerText.innerText = knightText;
		btn1Text.innerText = knightB1;
		btn2Text.innerText = knightB2;
		btn3Text.innerText = knightB3;
	}else if (num === 1){
		console.log('mage');
		playerDescription.innerText = mageDesc;
		playerImg.src = mageImg;
		playerText.innerText = mageText;
		btn1Text.innerText = mageB1;
		btn2Text.innerText = mageB2;
		btn3Text.innerText = mageB3;
	};
};




playerSelection.addEventListener('change', option => {
	var selection = playerSelection.selectedIndex;
	console.log(selection, 'selection');
	changeCharacter(selection);
});




