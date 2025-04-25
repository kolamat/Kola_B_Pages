const colors = ["#5f0000", "#000000", "#ffd700", "#800080"];

const body = document.querySelector("body");

const div = document.createElement("div");
div.style.padding = "20px 10px";
div.style.textAlign = "center";
body.insertBefore(div, body.firstChild);

const header = document.createElement("header");
header.className = "header";
header.textContent = "Happy Easter";
body.insertBefore(header, body.firstChild);

const prayerParagraph = document.createElement("p");
prayerParagraph.textContent =
  " Heavenly Father, I pray that this Easter deepens her faith in You. May the power of Christ's resurrection strengthen her trust in Your promises.";
prayerParagraph.style.color = "#fff";
prayerParagraph.style.fontSize = "25px";
prayerParagraph.style.fontWeight = "bold";
prayerParagraph.style.background = "#2ea95b";
prayerParagraph.style.display = "none";
prayerParagraph.style.padding = "10px";
prayerParagraph.style.borderRadius = "10px";
prayerParagraph.style.marginBottom = "15px";
div.appendChild(prayerParagraph);

const container = document.querySelector(".imagecontainer");
const containerOne = document.querySelector(".imagecontainer1");
const containerTwo = document.querySelector(".imagecontainer2");

const fill = document.createElement("button");
fill.onclick = fillcontainer;
fill.textContent = "resore images";
fill.style.padding = "10px 5px";
fill.style.background = "#3d5923";
fill.style.color = "#ffffff";
fill.style.fontSize = "20px";
// div.appendChild(fill);

const button = document.createElement("button");
button.onclick = showParagraph;
button.textContent = "Click me";
button.style.padding = "10px 5px";
button.style.background = "#5f0000";
button.style.color = "#ffffff";
button.style.fontSize = "20px";
div.appendChild(button);

const Ma = document.createElement("button");
Ma.onclick = fillcontainer;
Ma.textContent = "Ma";
Ma.style.padding = "10px 5px";
Ma.style.background = "#5f0000";
Ma.style.color = "#ffffff";
Ma.style.fontSize = "20px";
// div.appendChild(Ma);

const Mo = document.createElement("button");
Mo.onclick = fillcontainer;
Mo.textContent = "Mo";
Mo.style.padding = "10px 5px";
Mo.style.background = "#5f0000";
Mo.style.color = "#ffffff";
Mo.style.fontSize = "20px";
// div.appendChild(Mo);

const Me = document.createElement("button");
Me.onclick = fillcontainer;
Me.textContent = "Me";
Me.style.padding = "10px 5px";
Me.style.background = "#5f0000";
Me.style.color = "#ffffff";
Me.style.fontSize = "20px";
// div.appendChild(Me);

function showParagraph() {
  prayerParagraph.style.display = "flex";
}

function fillcontainer() {
  clearcontainer();
  container.style.display = "flex";
}
function ma() {
  clearcontainer();
  containerOne.style.display = "flex";
}
function mo() {
  clearcontainer();
  containerTwo.style.display = "flex";
}

function clearcontainer() {
  container.style.display = "none";
  containerOne.style.display = "none";
  containerTwo.style.display = "none";
}
