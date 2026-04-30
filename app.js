import {story} from "/story.js";
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const characterButton = document.getElementById("character-select");
const gameButton = document.getElementById("game-shortcut");
const startButton = document.getElementById("start-Btn");
const maleButton = document.getElementById("male");
const femaleButton = document.getElementById("female");
const jessieButton = document.getElementById("Jessie");
const jesusButton = document.getElementById("Jesus-juanita");
const rei1Button = document.getElementById("Rei");
const mainMenu = document.getElementById("menu-Screen");
const genderScreen = document.getElementById("gender-Screen");
const maleSelect = document.getElementById("character-Select-male");
const femaleSelect = document.getElementById("character-Select-female");
const gameScreen = document.getElementById("game-Screen");
let position = ["menu-Screen",];
let gender = "";
const characterButtons = [jessieButton, jesusButton, reiButton];

function findPos(now){
    position.push(now);
    console.log(position);
    return position;
}

document.getElementById('back').addEventListener("click", backPage => {
    if(position.at(-1) === "menu-Screen"){
        return;
    }else {
        position.pop();
        console.log(position);
        goTo(position.at(-1));
        return position;
    };
})

startButton.addEventListener("click", starter =>{
    mainMenu.style.display = "none";
})
maleButton.addEventListener("click", male =>{
       mainMenu.style.display = "none";

    gender = "male";
    return gender;
})
femaleButton.addEventListener("click", female =>{
    goTo("character-Select-female");
    gender = "female";
    return gender;
})
characterButtons.forEach(btn => {
    btn.addEventListener("click", (starter) =>{
        const selectedCharacter = starter.curentTarget.id;
        console.log("Selected", selectedCharacter);
        goTo("game-Screen");
})})

const gameStats = { fame: 0, wealth: 0, heat: 0};