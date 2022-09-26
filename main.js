


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
let delayForPLayerLoss = 2000;
const enemyImageBlink = [
    {opacity: '1'},
    {opacity: '0'},
    {opacity: '1'},
 ]
 const enemyImageTiming = {
    duration: 500,
    iterations: 1
 }

const enemyImage = document.getElementById('enemy-img')

const playerImage = document.getElementById('player-img')

const playerImageBlink = [
    {opacity: '1'},
    {opacity: '0'},
    {opacity: '1'},
 ]
 const playerImageTiming = {
    duration: 500,
    iterations: 1
 }

function endGame() {
    if (parseInt(enemyCurrentHealth.innerHTML) <= 0 || parseInt(playerCurrentHealth.innerHTML) <= 0){
        alert("Game Over! Refresh to start a new game.");
    } 
};



const rng = function randomNumber(min, max) { 
    return Math.round(Math.random() * (max - min) + min);
};

playerAttackStrong.addEventListener('click', strongAttack);
playerAttackMed.addEventListener('click', medAttack);
playerAttackWeak.addEventListener('click', weakAttack);



function strongAttack(button) {
    console.log('strong attack');
    enemyImage.animate(enemyImageBlink, enemyImageTiming);

    enemyImage.animate(enemyImageBlink, enemyImageTiming);

    enemyCurrentHealth.innerHTML = parseInt(enemyCurrentHealth.innerHTML) - rng(0, 20);
    grunt.play();
    
       
    setTimeout(function(){
        if(parseInt(enemyCurrentHealth.innerHTML) <= 0 || parseInt(playerCurrentHealth.innerHTML) <= 0){
            alert("Game Over! Refresh to start a new game.");
        } else{
        playerImage.animate(playerImageBlink, playerImageTiming);
        playerCurrentHealth.innerHTML = parseInt(playerCurrentHealth.innerHTML) - rng(0, 20);
        oof.play();
        }
    }, delayInMilliseconds);

    background.play();
    background.loop=true;

    setTimeout(function(){
        endGame();
    }, delayForPLayerLoss);

    }


function medAttack(button) {

    enemyImage.animate(enemyImageBlink, enemyImageTiming);
    
    enemyCurrentHealth.innerHTML = parseInt(enemyCurrentHealth.innerHTML) - rng(0, 10);
    grunt.play();

    setTimeout(function(){
        if(parseInt(enemyCurrentHealth.innerHTML) <= 0 || parseInt(playerCurrentHealth.innerHTML) <= 0){
            alert("Game Over! Refresh to start a new game.");
        } else{
        playerImage.animate(playerImageBlink, playerImageTiming);
        playerCurrentHealth.innerHTML = parseInt(playerCurrentHealth.innerHTML) - rng(0, 10);
        oof.play();
        }
    }, delayInMilliseconds);

    background.play();
    background.loop=true;

    setTimeout(function(){
        endGame();
    }, delayForPLayerLoss);
 }

    
 function weakAttack(button) {

    enemyImage.animate(enemyImageBlink, enemyImageTiming);

    enemyCurrentHealth.innerHTML = parseInt(enemyCurrentHealth.innerHTML) - (rng(0, 5)-1);
    grunt.play();

    setTimeout(function(){
        if(parseInt(enemyCurrentHealth.innerHTML) <= 0 || parseInt(playerCurrentHealth.innerHTML) <= 0){
            alert("Game Over! Refresh to start a new game.");
        } else{
        playerImage.animate(playerImageBlink, playerImageTiming);
        playerCurrentHealth.innerHTML = parseInt(playerCurrentHealth.innerHTML) - (rng(0, 5)-1);
        oof.play();
        }
    }, delayInMilliseconds);

    background.play();
    background.loop=true;

    setTimeout(function(){
        endGame();
    }, delayForPlayerLoss);
       
 }

// Change Characters Functionality //

'use strict';


const playerSelection = document.querySelector(".player-switch-hover");

var playerDescription = document.getElementById("player-class");
var playerImg = document.getElementById("player-img");
var playerText = document.querySelector(".text-here");


var btn1Text = document.querySelector(".knightButton1");
var btn2Text = document.querySelector(".knightButton2");
var btn3Text = document.querySelector(".knightButton3");


const enemySelection = document.querySelector(".enemy-switch-hover");

var enemyDescription = document.getElementById("enemyDescription");
var enemyImg = document.getElementById("enemy-img");
var enemyText = document.querySelector(".witch-text-here");


var btn1EnemyText = document.querySelector(".witchButton1");
var btn2EnemyText = document.querySelector(".witchButton2");
var btn3EnemyText = document.querySelector(".witchButton3");

//const playerButtons = document.querySelector(".player-abilities");
//console.log(playerButtons[0], 'buttons');

const knightDesc = 'Knight';
const knightImg = ("images/knight.jpg");
const knightText = "The knight comes from the Kingdom of Lordaeron. He is renowned for his glorious achievements at the Siege of Black Temple.";
const knightB1 = 'Heroic Strike';
const knightB2 = 'Cleave';
const knightB3 = 'Headbutt';



const mageDesc = 'Battle Mage';
const mageImg = ("images/battle-mage.jpg");
const mageText = "The battle mage is a member of the Order of the Eternal. A secret brotherhood of warrior mages.";
const mageB1 = 'Fire Blast';
const mageB2 = 'Shield Bash';
const mageB3 = 'Slash';

const witchDesc = 'Witch';
const witchImg = ("images/witch.jpg");
const witchText = "Countess Morgana was exiled from the kingdom of Lordaeron after succumbing to the forces of dark magic. She now reigns over the Stranglethorn forest.";
const witchB1 = 'Arcane Barrage';
const witchB2 = 'Lightning Bolt';
const witchB3 = 'Icy Touch';



const chieftanDesc = 'War Chieftan';
const chieftanImg = ("images/orc.jpg");
const chieftanText = "War Chief Bloodfist claimed power by defeating the previous Chieftan in a mak-gora, a bloody duel to the death.";
const chieftanB1 = 'Brutalize';
const chieftanB2 = 'Pummel';
const chieftanB3 = 'Backhand';

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


function changeEnemyCharacter(num){
	if(num === 0){
		console.log('witch');
		enemyDescription.innerText = witchDesc;
		enemyImg.src = witchImg;
		enemyText.innerText = witchText;
		btn1EnemyText.innerText = witchB1;
		btn2EnemyText.innerText = witchB2;
		btn3EnemyText.innerText = witchB3;
	}else if (num === 1){
		console.log('chieftan');
		enemyDescription.innerText = chieftanDesc;
		enemyImg.src = chieftanImg;
		enemyText.innerText = chieftanText;
		btn1EnemyText.innerText = chieftanB1;
		btn2EnemyText.innerText = chieftanB2;
		btn3EnemyText.innerText = chieftanB3;
	};
};

playerSelection.addEventListener('change', option => {
	var selection = playerSelection.selectedIndex;
	console.log(selection, 'selection');
	changeCharacter(selection);
});

enemySelection.addEventListener('change', option => {
	var selection = enemySelection.selectedIndex;
	console.log(selection, 'selection');
	changeEnemyCharacter(selection);
});
window.onload = (event) => {
 	let playerName = prompt("Enter character name:");
	if (playerName == '') {
		 prompt("Enter character name:");
	} else if (playerName != '') {
		document.getElementById("player-name").innerHTML = playerName;
	};
};
/* setTimeout(function(){
	let playerName = prompt("Enter character name:");
	if (playerName == '') {
		 prompt("Enter character name:");
	} else if (playerName != '') {
		document.getElementById("player-name").innerHTML = playerName;}
	}, 0);

}); */
