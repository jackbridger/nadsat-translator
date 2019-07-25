// Interact with our HTML. Create our event listeners

document.onload = function() {
  searchForTranslation();
}

let searchForTranslation = () => {
  let wordToTranslate = 'men';
  console.log(wordToTranslate)
  let xhr = new XMLHttpRequest();
  let url = "/translate" + "?" + 'men';
  console.log(url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var nadsatData = xhr.responseText;
      // something .innertext = nadsatData
      console.log(nadsatData)
    }console.log(nadsatData)

  }

  xhr.open("GET", url, true);
  xhr.send();
}

let searchBox = document.getElementById('inputField');
let submitbutton = document.getElementById("clicky");



// submitbutton.addEventListener("click", searchForTranslation('men'));

// ______


// Interact with our HTML. Create our event listeners



// let searchForTranslation = (wordToTranslate) => {
//   let xhr = new XMLHttpRequest();
//   let url = "/translate" + "?" + wordToTranslate;
//
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       var nadsatData = xhr.responseText;
//       console.log(nadsatData);
//       // something .innertext = nadsatData
//     }
//   }
//   xhr.open("GET", url, true);
//   xhr.send();
// }
//
//

//
// // -------------------
//
// // autocomplete section
// // user types into text box; on each key press, search dictionary object and return possible words
// // (add event listener etc.)
// function getInput() {
//   document.getElementById("inputField").value = inputString;
// }
// console.log(inputString);
//
// document.getElementById("inputField").addEventListener("onkeydown", getInput);
// // var testObject = { tested: "1", testing: "2", no: "3" };
// var testObject = data.nadsat;
//
// var returnedWords = [];
//
// function pushKeys(key) {
//   var keyString = key.toString();
//   if (keyString.includes(inputString)) {
//     returnedWords.push(key);
//   }
// }
//
// Object.keys(testObject).forEach(pushKeys);
//
// console.log(returnedWords);
// // display possible words
