const images = [
  "RedRoses.jpg",
  "goldrose.jpg",
  "telephone.jpg",
  "quotes.png",
  "quotes1.png",
  "quotes2.png",
  "red1.jpg",
  "red.jpg",
];

let body = document.querySelector("body");
body.style.textAlign = "center";
body.style.scrollBehavior = "none";
body.style.height = "100vh";
body.style.background = "#c46666";
body.style.overflowX = "hidden";
body.style.color = "white";

let heading = document.createElement("H1");
heading.textContent = "My name is Moridiya";
heading.style.textDecoration = "underline";
document.querySelector("body").appendChild(heading);

const mainContainer = document.createElement("div");
mainContainer.id = "div";
mainContainer.style.width = "100%";
mainContainer.style.display = "grid";
mainContainer.style.justifyItems = "center";
// mainContainer.style.gridTemplateColumns = "repeat(auto-fill, 380px)";
mainContainer.style.placeItems = "center";
// mainContainer.style.gridTemplateColumns = "380px 380px 380px";
document.querySelector("body").appendChild(mainContainer);

let img1 = document.createElement("img");
img1.src = images[6];
img1.style.borderRadius = "10px 5px";
img1.style.width = "300px";
img1.style.height = "200px";
document.getElementById("div").appendChild(img1);

let pTag = document.createElement("p");
pTag.textContent =
  "As much as I really wanna date JOHNSON at the same I really don’t want to";
pTag.style.fontWeight = "bold";
document.getElementById("div").appendChild(pTag);

let img2 = document.createElement("img");
img2.src = images[7];
img2.style.borderRadius = "10px 5px";
img2.style.width = "350px";
img2.style.height = "310px";
document.getElementById("div").appendChild(img2);

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
document.getElementById("inputField").appendChild(clearButton);

let button = document.createElement("img");
button.src = images[2];
button.style.textAlign = "center";
button.style.borderRadius = "10px";
button.style.cursor = "pointer";
button.style.width = "100px";
button.style.borderColor = "#00fff0";
button.addEventListener("click", openfunc);
document.getElementById("inputField").appendChild(button);

let rose = document.createElement("img");
rose.src = images[1];
rose.style.borderRadius = "10px";
rose.style.width = "100px";
rose.style.cursor = "pointer";
rose.addEventListener("click", Roses);
document.getElementById("inputField").appendChild(rose);

let paradiv = document.createElement("a");
paradiv.href = "https://wa.me/+2348150672809";
paradiv.id = "para";
paradiv.style.fontWeight = "bold";
paradiv.style.fontSize = "15px";
paradiv.style.color = "green";
paradiv.style.width = "auto";
paradiv.style.height = "auto";
document.querySelector("body").appendChild(paradiv);

let buttDiv = document.createElement("p");
buttDiv.href = "https://wa.me/+2348150672809";
buttDiv.id = "buttDiv";
buttDiv.style.fontWeight = "bold";
buttDiv.style.fontSize = "15px";
document.querySelector("body").appendChild(buttDiv);

function clearfunc() {
  const inputField = document.getElementById("para");
  inputField.textContent = "";
}
function openfunc() {
  let paraGraph = document.getElementById("para");
  paraGraph.textContent =
    "You Can Call Me anytime am always ON and active for you (+2348150672809)";
  //   paraGraph.style.marginBottom = "20px";
  document.querySelector("body").appendChild(paraGraph);
}

function Roses() {
  // This const code makes only the image to display once and not multiple times
  const inputField = document.getElementById("para");
  inputField.textContent = "";
  let redRose = document.createElement("img");
  redRose.src = images[0];
  redRose.style.width = "300px";
  redRose.style.borderRadius = "10px 20px";
  redRose.style.marginTop = "20px";
  document.getElementById("para").appendChild(redRose);
}

function Quotes() {
  const button = document.createElement("button");
  button.textContent = "Love Quotes";
  button.style.fontWeight = "bold";
  button.style.fontSize = "15px";
  button.style.padding = "5px 10px";
  button.style.textAlign = "center";
  button.style.borderRadius = "10px";
  button.style.background = "#c46666";
  button.style.color = "#fff";
  button.style.cursor = "pointer";
  button.style.borderColor = "#00fff0";
  button.addEventListener("click", message);
  document.getElementById("inputField").appendChild(button);
}

Quotes();

function message() {
  const inputField = document.getElementById("para");
  inputField.textContent = "";
  const quote0 = document.createElement("img");
  quote0.src = images[3];
  quote0.style.width = "300px";
  quote0.style.marginTop = "5px";
  quote0.style.borderRadius = "10px";
  document.getElementById("para").appendChild(quote0);
  const quote1 = document.createElement("img");
  quote1.src = images[4];
  quote1.style.width = "300px";
  quote1.style.borderRadius = "10px";
  quote1.style.margin = "10px 5px";
  document.getElementById("para").appendChild(quote1);
  const quote2 = document.createElement("img");
  quote2.src = images[5];
  quote2.style.width = "300px";
  quote2.style.borderRadius = "10px";
  document.getElementById("para").appendChild(quote2);
}

function tryReturn() {
  return "I am a return statement";
}
