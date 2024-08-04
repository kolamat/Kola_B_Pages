let body = document.querySelector("body");
body.style.textAlign = "center";
body.style.background = "#e38b8b";

let heading = document.createElement("H1");
heading.textContent = "My name is Temi";
heading.style.textDecoration = "underline";
document.querySelector("body").appendChild(heading);

let img1 = document.createElement("img");
img1.src = "rose1.jpeg";
img1.style.borderRadius = "15px 5px";
document.querySelector("body").appendChild(img1);

let pTag = document.createElement("p");
pTag.textContent = "I dont like the 'LOVE' phrase";
pTag.style.fontWeight = "bold";
document.querySelector("body").appendChild(pTag);

let img2 = document.createElement("img");
img2.src = "rose2.jpeg";
img2.style.borderRadius = "15px 5px";
document.querySelector("body").appendChild(img2);

let h2 = document.createElement("H2");
h2.textContent = "But I might fall for the 'LOVE' of red 'Roses'";
document.querySelector("body").appendChild(h2);

let buttonContainer = document.createElement("div");
buttonContainer.id = "inputField";
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "Space-Between";
document.querySelector("body").appendChild(buttonContainer);

let button = document.createElement("button");
button.textContent = "Click-Me";
button.style.fontWeight = "normal";
button.style.padding = "5px 10px";
button.style.textAlign = "center";
button.style.background = "#000";
button.style.borderRadius = "10px";
button.style.color = "#fff";
button.style.cursor = "pointer";
button.style.borderColor = "#00fff0";
button.addEventListener("click", openfunc);
document.querySelector("div").appendChild(button);

let clearButton = document.createElement("button");
clearButton.textContent = "Click-Me To Reset";
clearButton.style.fontWeight = "normal";
clearButton.style.padding = "5px 10px";
clearButton.style.textAlign = "center";
clearButton.style.background = "#000";
clearButton.style.color = "#fff";
clearButton.style.cursor = "pointer";
clearButton.style.borderRadius = "10px";
clearButton.style.borderColor = "#00fff0";
clearButton.addEventListener("click", clearfunc);
document.querySelector("div").appendChild(clearButton);

let rose = document.createElement("button");
rose.textContent = "View ROSE";
rose.style.fontWeight = "normal";
rose.style.padding = "5px 10px";
rose.style.textAlign = "center";
rose.style.borderRadius = "10px";
rose.style.background = "#000";
rose.style.color = "#fff";
rose.style.cursor = "pointer";
rose.style.borderColor = "#00fff0";
rose.addEventListener("click", Roses);
document.querySelector("div").appendChild(rose);

let paradiv = document.createElement("a");
paradiv.href = "https://wa.me/+2348150672809";
paradiv.id = "para";
paradiv.style.fontWeight = "bold";
paradiv.style.fontSize = "15px";
paradiv.style.color = "green";
document.querySelector("body").appendChild(paradiv);

function openfunc() {
  let paraGraph = document.getElementById("para");
  paraGraph.textContent =
    "You Can Call Me anytime am always ON and active for you (+2348150672809)";
  document.querySelector("body").appendChild(paraGraph);
}

function clearfunc() {
  const inputField = document.getElementById("para");
  inputField.textContent = "";
}

function Roses() {
  const inputField = document.getElementById("para");
  inputField.textContent = "";
  let anotherImage = document.createElement("img");
  anotherImage.src = "rose.svg";
  document.getElementById("para").appendChild(anotherImage);
}
