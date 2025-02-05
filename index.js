const images = ["/RedRoses.jpg", "/goldrose.jpg", "/telephone.jpg"];

let body = document.querySelector("body");
body.style.textAlign = "center";
body.style.scrollBehavior = "none";
body.style.height = "100vh";
body.style.background = "#e38b8b";

let heading = document.createElement("H1");
heading.textContent = "My name is Moridiya";
heading.style.textDecoration = "underline";
document.querySelector("body").appendChild(heading);

let img1 = document.createElement("img");
img1.src = "rose1.jpeg";
img1.style.borderRadius = "15px 5px";
document.querySelector("body").appendChild(img1);

let pTag = document.createElement("p");
pTag.textContent =
  "As much as I really wanna date JOHNSON at the same I really don’t want to";
pTag.style.fontWeight = "bold";
document.querySelector("body").appendChild(pTag);

let img2 = document.createElement("img");
img2.src = "rose2.jpeg";
img2.style.borderRadius = "15px 5px";
document.querySelector("body").appendChild(img2);

let h2 = document.createElement("H2");
h2.textContent = "But am starting to fall for him";
document.querySelector("body").appendChild(h2);

let buttonContainer = document.createElement("div");
buttonContainer.id = "inputField";
buttonContainer.style.display = "flex";
buttonContainer.style.flexWrap = "wrap";
buttonContainer.style.gap = "20px";
buttonContainer.style.justifyContent = "center";
document.querySelector("body").appendChild(buttonContainer);

let clearButton = document.createElement("img");
clearButton.src = "./reset.jpg";
clearButton.style.width = "100px";
clearButton.style.cursor = "pointer";
clearButton.style.borderRadius = "10px";
// clearButton.style.borderColor = "#00fff0";
clearButton.addEventListener("click", clearfunc);
document.querySelector("div").appendChild(clearButton);

let button = document.createElement("img");
button.src = images[1];
button.style.textAlign = "center";
button.style.borderRadius = "10px";
button.style.cursor = "pointer";
button.style.width = "100px";
button.style.borderColor = "#00fff0";
button.addEventListener("click", openfunc);
document.querySelector("div").appendChild(button);

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
paradiv.style.height = "100px";
document.querySelector("body").appendChild(paradiv);

let buttDiv = document.createElement("p");
buttDiv.href = "https://wa.me/+2348150672809";
buttDiv.id = "buttDiv";
buttDiv.style.fontWeight = "bold";
buttDiv.style.fontSize = "15px";
document.querySelector("body").appendChild(buttDiv);

// let buttonParagraph = document.createElement("p");
// buttonParagraph.id = "buttonParagraph";
// document.querySelector("body").appendChild(buttonParagraph);

function clearfunc() {
  const inputField = document.getElementById("para");
  inputField.textContent = "";
}
function openfunc() {
  let paraGraph = document.getElementById("para");
  paraGraph.textContent =
    "You Can Call Me anytime am always ON and active for you (+2348150672809)";
  document.querySelector("body").appendChild(paraGraph);
}

function Roses() {
  const inputField = document.getElementById("para");
  inputField.textContent = "";
  let anotherImage = document.createElement("img");
  anotherImage.src = "rose.svg";
  document.getElementById("para").appendChild(anotherImage);
}

function callMyName() {
  const button = document.createElement("button");
  button.textContent = "View button";
  button.style.fontWeight = "normal";
  button.style.padding = "5px 10px";
  button.style.textAlign = "center";
  button.style.borderRadius = "10px";
  button.style.background = "#000";
  button.style.color = "#fff";
  button.style.cursor = "pointer";
  button.style.borderColor = "#00fff0";
  button.addEventListener("click", message);
  document.querySelector("div").appendChild(button);
}

callMyName();

function message() {
  const paraGraph = document.getElementById("para");
  paraGraph.textContent = "Like";
  paraGraph.style.textDecoration = "none";
  document.querySelector("body").appendChild(paraGraph);
}

function tryReturn() {
  return "I am a return statement";
}
