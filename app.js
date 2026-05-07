import {story} from "/story.js";
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const sceneImg = document.getElementById("scene");
const currentText = document.getElementById("current-text");
const characterButton = document.getElementById("character-select");
const gameButton = document.getElementById("game-shortcut");
const startButton = document.getElementById("start-Btn");
const maleButton = document.getElementById("male");
const femaleButton = document.getElementById("female");
const mainMenu = document.getElementById("menu-Screen");
const genderScreen = document.getElementById("gender-Screen");
const maleSelect = document.getElementById("character-Select-male");
const femaleSelect = document.getElementById("character-Select-female");
const gameScreen = document.getElementById("game-Screen");
const miniGame1 = document.getElementById("miniGame1");
const backBtn = document.getElementById("back");
const burger = document.getElementById("burger-icon");
const burgerMenu = document.getElementById("burger-display");
const logOverlay = document.getElementById("logs-overlay");
const logContainer = document.getElementById("log-container");
const logBtn = document.getElementById("logs");
const closeLogs = document.getElementById("closer");
const sceneCharacter = document.getElementById("scene-character");
window.gameStats = {fame: 0, wealth: 0, heat: 0};
const choices = [choice1, choice2, choice3];
let position = ["menu-Screen",];
let gender = false;
let character = "";
let textLogs = [];
let currentChoiceIds = [];
let burgerStatus = false;
let shopOwned = { slow: false, wealth: false, heat: false };
let previousScreen = "game-Screen";


function goTo(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screen).classList.add('active');
    if(position.at(-1) === screen){return;}
    else{
    findPos(screen);
    };
}

function findPos(now){
    position.push(now);
    console.log(position);
    return position;
}

backBtn.addEventListener("click", backPage => {
    if(position.at(-1) === "menu-Screen"){
        return;
    }else {
        position.pop();
        console.log(position);
        goTo(position.at(-1));
        return position;
    };
})

startButton.addEventListener("click", () =>{
    goTo("gender-Screen");
})

maleButton.addEventListener("click", () =>{
    goTo("character-Select-male");
    gender = false;
    return gender;
})

femaleButton.addEventListener("click", () =>{
    goTo("character-Select-female");
    gender = true;
    return gender;
})

document.querySelectorAll(".characters").forEach(btn => {
    btn.addEventListener("click", (starter) =>{
        const selectedCharacter = starter.currentTarget.id;
        console.log("Selected", selectedCharacter);
        goTo("game-Screen");
        character = selectedCharacter;
        console.log(character);
        backBtn.style = "display: none;";
        characterCheck();
        return character;
    })
})

document.getElementById("male-slect").addEventListener("click", () =>{
    goTo("character-Select-female");
    console.log("test-path");
})

document.getElementById("male-slect1").addEventListener("click", () =>{
    goTo("game-Screen");
    console.log("test-path");
    character = "jessie";
    characterCheck();
    console.log(character);
})

choices.forEach((btn, index) =>{
    btn.addEventListener("click", () =>{
    if(currentChoiceIds[index] == "start"){
        goTo("menu-Screen");
        textLogs.length = 0;
        logContainer.replaceChildren();
        return textLogs;
    }else if(currentChoiceIds[index] == "restart"){
        character = character;
        characterCheck();
        goTo("game-Screen");
        textLogs.length = 0;
        logContainer.replaceChildren();
        return character, textLogs;
    }else{
        sceneCreation(story[currentChoiceIds[index]]);
    }
    });
})

function sceneCreation(node){
    if (node.minigame === "miniGame1") {
        minigameNextNode = node.idsForChoices[0];
        goTo("miniGame1");
        startGame(); 
        return;
    }
    choiceCheck(node.choice);
    choice1.textContent = node.choice.at(0);
    choice2.textContent = node.choice.at(1);
    choice3.textContent = node.choice.at(2);
    currentText.textContent = node.text;
    sceneImg.src = node.pictureForScene;
    currentChoiceIds = node.idsForChoices;
    textLogs.push(node.text);
    addTextLog();
    return currentChoiceIds, textLogs;
}

let minigameNextNode = null;

document.addEventListener('minigameDone', function(e) {
    goTo('game-Screen');
    sceneCreation(story[minigameNextNode]);
});

function characterCheck(){
    switch (character.toLowerCase()){
        case "jessie":
        case "jessie-female":
            sceneCreation(story.jessieStart);
            if(gender){
                sceneCharacter.src = "images/jessie-female.png";
            }
        break;

        case "rei":
        case "rei-female":
            sceneCreation(story.reiStart);
            if(gender){
                sceneCharacter.src = "images/rei-female.png";
            }else{
                sceneCharacter.src = "images/DNA.png";
            }
        break;

        case "alex":
        case "alex-female":
            sceneCreation(story.alexStart);
            if(gender){
                sceneCharacter.src = "images/alex-female.png";
            }else{
                sceneCharacter.src = "images/alex-male.png";
            }
        break;

        default:
        return;
    }
}

burger.addEventListener("click", ()=>{
    if(burgerStatus == false){
        burgerMenu.style = "display:flex;";
        burgerStatus = true;
        return burgerStatus;
    }else{
        burgerMenu.style = "display:none;";
        burgerStatus = false;
        return burgerStatus;
    }
})

function addTextLog(){
    const loggedText = document.createElement('p');
    textLogCheck(loggedText);
    const latest = textLogs.at(-1);
    loggedText.textContent = latest;
    logContainer.appendChild(loggedText);
}

function textLogCheck(newText){
    document.querySelectorAll(".new").forEach(s => 
        {s.classList.remove("new"),
        s.classList.add("old")}
    );
    newText.classList.add("new");
}

logBtn.addEventListener("click", ()=>{
    logOverlay.style = "display:flex;";
})

closeLogs.addEventListener("click", ()=>{
    logOverlay.style = "display:none;";
})

function choiceCheck(current){
    if(current.length === 1){
        choice2.style = "display:none;";
        choice3.style = "display:none;";
    }else if(current.length === 2){
        choice2.style = "display:block;";
        choice3.style = "display:none;";
    }else{
        choice2.style = "display:block;";
        choice3.style = "display:block;";
    }
}

