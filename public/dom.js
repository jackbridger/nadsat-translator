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