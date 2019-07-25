// Interact with our HTML. Create our event listeners

let searchForTranslation = wordToTranslate => {
  let xhr = new XMLHttpRequest();
  let url = "/translate" + "?" + wordToTranslate;

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var nadsatData = xhr.responseText;
      console.log(nadsatData);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

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
  test1: "dhdj"
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
    document.body.insertBefore(newButton, currentDiv);

    // creates autocomplete suggestions as buttons, but adds new ones every time the array is refreshed
    // this version is technically closer to what we need than the above option
    // var btn = document.createElement("button");
    // btn.innerHTML = word;
    // document.body.appendChild(btn);
  }
  returnedWords.forEach(createItem);
}

document.getElementById("inputField").addEventListener("keyup", getInput);

// document.onload = alert("test");

// var testObject = { tested: "1", testing: "2", no: "3" };

// display possible words
