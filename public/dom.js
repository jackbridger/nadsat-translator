// Interact with our HTML. Create our event listeners.

let clearDropdown = () => {
  autocompleteList.innerHTML = "";
}


let searchForTranslation = (event) => {
  event.preventDefault();

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
submitbutton.addEventListener("click", (event) => {searchForTranslation(event)});

let inputField = document.getElementById("inputField");

inputField.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode === 13 ) {
      submitbutton.click();
    }
})
inputField.oninput = searchForAutoComplete;

let autocompleteList = document.getElementById("autocomplete-list")