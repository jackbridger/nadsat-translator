// Interact with our HTML. Create our event listeners.

document.onload = function() {
  searchForTranslation();
};

let searchForTranslation = () => {
  let wordToTranslate = document.getElementById("inputField").value;
  console.log(wordToTranslate);
  let xhr = new XMLHttpRequest();
  let url = "/translate?" + wordToTranslate;

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var nadsatData = xhr.responseText;
      let resultsBullets = document.getElementById("resultssearch");
      resultsBullets.innerText = nadsatData;

      console.log(nadsatData);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

let submitbutton = document.getElementById("submitbutton");
submitbutton.addEventListener("click", searchForTranslation);

// -------------------

// autocomplete section
// user types into text box; on each key press, search dictionary object and return possible words
// (add event listener etc.)

// const data = require("../src/model");

var inputString = "";

// var testObject = data.nadsat;
// testing...
var testObject = {
  men: "chellovecks",
  money: "cutter",
  corny: "Hound-and-Horny",
  angry: "razdraz",
  woman: "baboochka",
bad: "baddiwad",
band: "banda",
prison: "barry",
bed: "bedways",
crazy: "bezoomny",
library: "biblio",
battle: "bitva",
cry: "blub",
godman: "bogman",
thunder: "boomaboom",
sick: "bolnoy",
big: "bolshy",
upset: "boohoohoo",
boutique: "bootick",
brother: "brat",
bastard: "bratchny",
razor: "britva,",
belly: "brooko",
police: "bruiseboys",
riches: "bugatties",
rich: "bugatty",
vessels: "cables",
cigarette: "crap cancer",
office: "cantora",
pocket: "carman",
tea: "chai",
chaplain: "charlie",
cup: "chasha",
guard: "chasso",
woman: "cheena",
wash: " cheest",
cperson: "helloveck",
nonsense: "chepooka",
wonderful: "choodessny",
mumble: "chumble",
cinema: "cine",
knock: "clop",
beak: "cluve",
bell: "collocoll",
howl: "crark",
steal: "crast",
shout: "creech",
elder: "decrep",
oldman: "dedoochka",
girl: "devotchka",
dobby: "good",
ghost: "dook",
house: "domy"
};

var returnedWords = [];

function pushKeys(key) {
  // returnedWords = [];
  if (inputString !== "") {
    var keyString = key.toString();
    if (
      keyString.includes(inputString) &&
      returnedWords.indexOf(keyString) == -1
    ) {
      // if (keyString.includes(inputString)) {
      // returnedWords = [];
      returnedWords.push(key);
    }
  }
}

function getInput() {
  returnedWords = [];
  inputString = document.getElementById("inputField").value;
  console.log(inputString);
  // pushKeys();
  Object.keys(testObject).forEach(pushKeys);
  console.log(returnedWords);

  // part of the code that just shows the autocomplete suggestions in a non-functional way
  var dropdown = document.getElementById("dropdown");
  dropdown.innerHTML = returnedWords.join(" ");

  function createItem(word) {
    // first attempt I think - can delete
    // var newButton = document.createElement("div");
    // var newWord = document.createTextNode(word);
    // newButton.appendChild(newWord);

    // other part of the code that just shows the autocomplete suggestions in a non-functional way
    var currentDiv = document.getElementById("dropdown");

    // document.body.insertBefore(newButton, currentDiv);

    // creates autocomplete suggestions as buttons, but adds new ones every time the array is refreshed
    // this version is technically closer to what we need than the above option
    // var btn = document.createElement("button");
    // btn.innerHTML = word;
    // document.body.appendChild(btn);
  }
  returnedWords.forEach(createItem);
}

document.getElementById("inputField").addEventListener("keyup", getInput);

function enterButton(e) {
  // checks if button is enter button
  if (e.keyCode == 13) {
    searchForTranslation(inputString);
  }
}
document.getElementById("inputField").addEventListener("keydown", enterButton);

// document.onload = alert("test");

// var testObject = { tested: "1", testing: "2", no: "3" };

// display possible words
