// Interact with our HTML. Create our event listeners.

document.onload = function() {
  searchForTranslation();
};

let clearDropdown = () => {
  autocompleteList.innerHTML = "";
}


let searchForTranslation = () => {
  if (inputField.value.length < 1) {
    return;
  }
  let wordToTranslate = inputField.value;
  console.log(wordToTranslate);
  let xhr = new XMLHttpRequest();
  let url = "/translate?" + wordToTranslate;

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var nadsatData = xhr.responseText;
      let resultsBullets = document.getElementById("resultssearch");
      resultsBullets.innerText = nadsatData;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};

let searchForAutoComplete = () => {
  let wordToTranslate = inputField.value;
  console.log(wordToTranslate);
  let xhr = new XMLHttpRequest();
  let url = "/autocomplete?" + wordToTranslate;

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      clearDropdown();
      var autoNadsat = JSON.parse(xhr.responseText).autocompleteResults;
      autoNadsat.forEach((item) => {
        let newSuggestion = document.createElement('option');
        newSuggestion.value = item;
        autocompleteList.appendChild(newSuggestion);
      })
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

let submitbutton = document.getElementById("submitbutton");
submitbutton.addEventListener("click", searchForTranslation);

let inputField = document.getElementById("inputField");
inputField.oninput = searchForAutoComplete;
let autocompleteList = document.getElementById("autocomplete-list")


