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
const backBtn = document.getElementById("back");
const burger = document.getElementById("burger-icon");
const burgerMenu = document.getElementById("burger-display");
const shop = document.getElementById("shop-icon");
const shopMenu = document.getElementById("shop-display");
const logOverlay = document.getElementById("logs-overlay");
const logContainer = document.getElementById("log-container");
const logBtn = document.getElementById("logs");
const closeLogs = document.getElementById("closer");
const sceneCharacter = document.getElementById("scene-character");
const saveBtn = document.getElementById("save");
const loadBtn = document.getElementById("load-Btn")
const gameContainer = document.getElementById("game-Container");
const settingsBtn = document.getElementById("settings-Btn");
const settingsBtn1 = document.getElementById("settings");
const settingsOverlay = document.getElementById("settings-display");
const closeSettings = document.getElementById("close-settings");
const eraseBtn = document.getElementById("clear-Btn");

window.gameStats = {fame: 0, wealth: 0, heat: 0};
const choices = [choice1, choice2, choice3];
let position = ["menu-Screen",];
let gender = false;
let character = "";
let textLogs = [];
let currentChoiceIds = [];
let pastChoices = [];
let burgerStatus = false;
let shopStatus = false;
let settingsStatus = false;
let previousScreen = "game-Screen";
let saveGameName;
const storedFiles = localStorage.getItem("saveFiles");
let saveFiles = storedFiles ? JSON.parse(storedFiles) : [];

let wealthMultiplier = 0;
const maxPurchase = 5;
const multiplierCost = 100;
const multiplierIncrease = 0.05;

const wealthCount = document.getElementById("wealth-val");
const multiplierBtn = document.querySelector('#wealth-mult-btn');

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

    if (node.minigame === "miniGame2") {
        minigameNextNode = node.idsForChoices[0];
        goTo("miniGame2");
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
    do{
        pastChoices.pop();
    }while(pastChoices.length != 0);
    pastChoices.push(node.choice.at(0));
    pastChoices.push(node.choice.at(1));
    pastChoices.push(node.choice.at(2));
    addTextLog();
    console.log(currentChoiceIds);
    console.log(pastChoices);
    statsCheck(node);
    console.log(gameStats);
    return currentChoiceIds, textLogs, pastChoices, gameStats;
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

shop.addEventListener("click", ()=>{
    if(shopStatus == false){
        shopMenu.style = "display:flex;";
        shopStatus = true;
        shopWealth();
        return shopStatus;
    }else{
        shopMenu.style = "display:none;";
        shopStatus = false;
        return shopStatus;
    }
})

settingsBtn.addEventListener ("click", ()=> {
    settingDoer()
})
settingsBtn1.addEventListener ("click", ()=> {
    settingDoer()
})
    
function settingDoer(){
    if(settingsStatus == false) {
        settingsOverlay.style = "display:flex;";
        settingsStatus = true;
        return settingsStatus;
    } else {
        settingsOverlay.style = "display:none;"
        settingsStatus = false;
        return settingsStatus;
    }
}

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
    gameContainer.style.opacity = "0.5";
    burgerMenu.style.opacity = "0.5"
})

closeLogs.addEventListener("click", ()=>{
    logOverlay.style = "display:none;";
    gameContainer.style.opacity = "1";
    burgerMenu.style.opacity = "1";
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

function saveGame() {
   const saveGameName = prompt("Please name your save file:");

    const existingSave = localStorage.getItem(saveGameName.toLowerCase());
    if (existingSave) {
        const conflict = prompt("A save file with that name already exists. Would you like to replace it? Type 'yes' if so.");
        if (conflict.toLowerCase() === "yes") {
            localStorage.removeItem(saveGameName);
        }else{
            alert("Save file not replaced.");
            return; 
        }
    }
    if(!saveGameName){
        alert("Invalid Entry");
        return;
    } 
    const saveData = {
    character: character,
    gender: gender,
    textLogs: textLogs,
    currentChoiceIds: currentChoiceIds,
    currentSceneText: currentText.textContent,
    currentSceneImage: sceneImg.src,
    currentScreen: position.at(-1),
    pastChoices: pastChoices
   };

   localStorage.setItem(saveGameName, JSON.stringify(saveData));
   console.log("Save function has worked!");
   console.log(saveFiles)
   saveFiles.push(saveGameName);
   localStorage.setItem("saveFiles", JSON.stringify(saveFiles));
   alert("Game saved!")

    
}

saveBtn.addEventListener("click", saveGame);

function loadGame() {
    if (saveFiles.length === 0) {
        alert("No save games found");
        console.log("No save files found.");
        return;
    }

    const saveGameName = prompt(`Enter the name of your save file:\n${saveFiles.join(", ")}`);

    if (!saveGameName) {
        console.log("No save name entered.");
        return;
    }

    const savedData = JSON.parse(localStorage.getItem(saveGameName));

    if (!savedData) {
        console.log("No save found with that name.");
        return;
    }


   
    character = savedData.character;
    gender = savedData.gender;
    characterCheck(character);
    textLogs = savedData.textLogs;
    currentChoiceIds = savedData.currentChoiceIds;
    pastChoices = savedData.pastChoices;
    currentText.textContent = savedData.currentSceneText;
    sceneImg.src = savedData.currentSceneImage;

    logContainer.replaceChildren();
    textLogs.forEach(log => {
        const p = document.createElement("p");
        p.textContent = log;
        p.style.color ="white";
        logContainer.appendChild(p);
    });

    goTo("game-Screen");
    choiceCheck(savedData.currentChoiceIds);
    choice1.textContent = pastChoices.at(0);
    choice2.textContent = pastChoices.at(1);
    choice3.textContent = pastChoices.at(2);
    console.log("File loaded");
    return character, gender, textLogs, currentChoiceIds, pastChoices;
} 

loadBtn.addEventListener("click", loadGame);


function clearFiles() {
    let confirm = prompt("Are you sure you want delete ALL save files? If you would like to proceed, please type 'confirm'");
    if (confirm.toLowerCase() === "confirm") {
        localStorage.clear(storedFiles);
        saveFiles.length = 0; 
    }
    else {
        alert("Save files not cleared");
    }
};

eraseBtn.addEventListener("click", clearFiles)

function closeSettingsOverlay () {
    if (settingsStatus == true) {
        settingsOverlay.style = "display:none;"
        settingsStatus = false;
        return settingsStatus;
    }
};

closeSettings.addEventListener("click", closeSettingsOverlay);


function shopWealth() {
    
    wealthCount.textContent = `$${gameStats.wealth}`;

    if (wealthMultiplier >= maxPurchase) {
        multiplierBtn.textContent = 'Maxed out';
        multiplierBtn.disabled = true;
    } else {
        const nextMultiplier = Math.round((1 + (wealthMultplier+ 1) * multiplierIncrease) * 100);
        multiplierBtn.textContent = `$${multiplierCost}, Next: ${nextMultiplier}% earnings`;
        multiplierBtn.disabled = gameStats.wealth < multiplierCost;
    }
}

multiplierBtn.addEventListener('click', ()=> {
if (gameStats.wealth < multiplierCost || wealthMultiplier >= maxPurchase) return;
gameStats.wealth -=multiplierCost
wealthCount++;

const newMultiplier = 1 + wealthCount * multiplierIncrease;
 window.miniGameWealthMult  = newMult;
window.miniGameWealthMult2 = newMult;
shopWealth();
});

function statsCheck(checker){
    gameStats.fame = gameStats.fame + checker.stats.fame;
    gameStats.wealth = gameStats.wealth + checker.stats.wealth;
    gameStats.heat = gameStats.heat + checker.stats.heat;
    return gameStats;
}