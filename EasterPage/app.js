const colors = ["#5f0000", "#000000", "#ffd700", "#800080"];

const body = document.querySelector("body");

const div = document.createElement("div");
div.style.padding = "20px 10px";
div.style.textAlign = "center";
div.style.justifyItems = "center";
body.insertBefore(div, body.firstChild);

const header = document.createElement("header");
header.className = "header";
header.textContent = "Happy Easter";
div.appendChild(header);

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
