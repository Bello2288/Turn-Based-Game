(function() {



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
    }, delayForPLayerLoss);
       
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
const mageText = "The battle mage is a member of the Order of the Eternal. A secret brotherhood of warrior mages.";
const mageB1 = 'Fire Blast';
const mageB1Desc = 'Fire Blast: it does some stuff';
const mageB2 = 'Shield Bash';
const mageB3 = 'Slash';

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

})();
