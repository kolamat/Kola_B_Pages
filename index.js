const namesArrays = [
  "john",
  "samuel",
  "jesus",
  "job",
  "jack",
  "jackson",
  "tomiwa",
  "yusuf",
  "sam",
  "joshua",
  "kate",
  "david",
  "dames",
  "james",
  "jacob",
  "emmanuel",
];

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

const personal = [
  {
    name: "M",
    image: "mor2.jpg",
  },
  {
    name: "A",
    image: "mor1.jpg",
  },
  {
    name: "M",
    image: "mor3.jpg",
  },
];

let body = document.querySelector("body");
body.style.textAlign = "center";
body.style.scrollBehavior = "smooth";
body.style.height = "100vh";
body.style.background = "#c46666";
body.style.overflowX = "hidden";
body.style.color = "white";
body.style.margin = "0px";
body.style.padding = "0px 20px 0px 5px";
body.style.fontFamily = "'Crimson Text', serif";

// Define the CSS animation
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 1s ease-in-out;
  }
`;
document.head.appendChild(style);

const formDiv = document.createElement("div");
formDiv.style.display = "flex";
formDiv.style.justifyContent = "space-between";
formDiv.style.alignItems = "center";
body.appendChild(formDiv);

const logo = document.createElement("img");
logo.src = "MAM.png";
logo.style.width = "70px";
formDiv.appendChild(logo);

// Create a form element
const form = document.createElement("form");
form.id = "nameForm";
form.style.margin = "20px 0px";
form.style.display = "flex";
formDiv.appendChild(form);

// Create an input field for the name
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Enter your name";
// nameInput.style.color = "white";
nameInput.style.padding = "10px";
nameInput.style.borderRadius = "5px";
nameInput.style.border = "1px solid black";
nameInput.style.marginRight = "10px";
nameInput.style.background = "none";
nameInput.style.width = "140px";
form.appendChild(nameInput);

// Create a submit button
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";
submitButton.style.padding = "10px 20px";
submitButton.style.borderRadius = "5px";
submitButton.style.border = "solid black 1px";
submitButton.style.background = "#c46666";
submitButton.style.color = "#fff";
submitButton.style.cursor = "pointer";
form.appendChild(submitButton);

// Append the form to the body at the top
body.insertBefore(formDiv, body.firstChild);

// Add an event listener to the form to handle the submit event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the value of the input field
  const name = nameInput.value;

  // Create an h1 element to display the name
  let h1 = document.createElement("H1");
  h1.id = "h1";
  h1.textContent = "Hi " + name + ", How are you doing today?";
  h1.style.fontStyle = "italic";
  h1.style.fontSize = "20px";
  h1.style.color = "#490e0e";
  h1.style.textTransform = "uppercase";

  // Append the h1 element to the body at the top
  formDiv.appendChild(h1, body.firstChild);

  // Remove the form from the body
  form.remove();
});

const imageContainer = document.createElement("div");
imageContainer.id = "imageContainer";
imageContainer.style.display = "flex";
imageContainer.style.flexDirection = "colunm";
imageContainer.style.justifyContent = "space-between";
imageContainer.style.justifyItems = "stretch";
body.appendChild(imageContainer);

const mainContainer = document.createElement("div");
mainContainer.id = "div";
mainContainer.style.width = "100%";
mainContainer.style.display = "grid";
mainContainer.style.justifyItems = "center";
mainContainer.style.justifyContent = "center";
mainContainer.style.placeItems = "center";
// mainContainer.style.gridTemplateColumns = "380px 380px 380px";
body.appendChild(mainContainer);

let img1 = document.createElement("img");
img1.src = images[6];
img1.style.borderRadius = "10px 5px";
img1.style.width = "300px";
img1.style.height = "200px";
div.appendChild(img1);

let pTag = document.createElement("p");
pTag.textContent =
  "As much as I really wanna date JOHNSON at the same I really don’t want to,";
pTag.style.fontWeight = "bold";
div.appendChild(pTag);

let img2 = document.createElement("img");
img2.src = images[7];
img2.style.borderRadius = "10px 5px";
img2.style.width = "350px";
img2.style.height = "310px";
div.appendChild(img2);

let h2 = document.createElement("H2");
h2.textContent = "But am starting to fall for him.";
body.appendChild(h2);

let buttonContainer = document.createElement("div");
buttonContainer.id = "buttonContainer";
buttonContainer.style.display = "flex";
buttonContainer.style.flexWrap = "wrap";
buttonContainer.style.gap = "20px";
buttonContainer.style.justifyContent = "center";
body.appendChild(buttonContainer);

let clearButton = document.createElement("img");
clearButton.src = "./reset.jpg";
clearButton.style.width = "100px";
clearButton.style.cursor = "pointer";
clearButton.style.borderRadius = "10px";
// clearButton.style.borderColor = "#00fff0";
clearButton.addEventListener("click", resetButton);
buttonContainer.appendChild(clearButton);

let rose = document.createElement("img");
rose.src = images[1];
rose.style.borderRadius = "10px";
rose.style.width = "100px";
rose.style.cursor = "pointer";
rose.addEventListener("click", Roses);
buttonContainer.appendChild(rose);

let button = document.createElement("img");
button.src = images[2];
button.style.textAlign = "center";
button.style.borderRadius = "10px";
button.style.cursor = "pointer";
button.style.width = "100px";
button.style.borderColor = "#00fff0";
button.addEventListener("click", numberParaGraph);
buttonContainer.appendChild(button);

let paraGraphAnchor = document.createElement("a");
paraGraphAnchor.href = "https://wa.me/+2348150672809";
paraGraphAnchor.id = "paraGraphAnchor";
paraGraphAnchor.style.fontWeight = "bold";
paraGraphAnchor.style.fontSize = "15px";
paraGraphAnchor.style.textDecoration = "none";
paraGraphAnchor.style.fontWeight = "bold";
paraGraphAnchor.style.padding = "15px";
paraGraphAnchor.style.color = "#aae4aa";
paraGraphAnchor.style.width = "auto";
paraGraphAnchor.style.height = "auto";
paraGraphAnchor.style.margin = "15px 0px";
body.appendChild(paraGraphAnchor);

let buttDiv = document.createElement("div");
buttDiv.href = "https://wa.me/+2348150672809";
buttDiv.id = "buttDiv";
// buttDiv.textContent = "jackson";
buttDiv.style.fontWeight = "bold";
buttDiv.style.fontSize = "15px";
body.appendChild(buttDiv);

function resetButton() {
  const emptyContent0 = document.getElementById("paraGraphAnchor");
  emptyContent0.textContent = "";

  const emptyContent1 = document.getElementById("buttDiv");
  emptyContent1.textContent = "";
}
function numberParaGraph() {
  let paraGraph = document.getElementById("paraGraphAnchor");
  paraGraph.textContent =
    "You Can Call Me anytime am always ON and active for you (+2348150672809) Either WhatsApp or Mobile Call, am availey";
  paraGraph.style.fontSize = "20px";
  body.appendChild(paraGraph);
  paraGraph.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
}

function Roses() {
  // This const code makes the image and content to display once and not multiple times
  const content = document.getElementById("paraGraphAnchor");
  content.textContent = "Will You Be My VAL??";
  content.style.display = "flex";
  content.style.flexDirection = "column";
  content.style.alignItems = "center";
  content.style.color = "#493434";
  content.style.fontSize = "20px";

  let redRose = document.createElement("img");
  redRose.src = images[0];
  redRose.style.width = "300px";
  redRose.style.borderRadius = "10px 20px";
  redRose.style.marginTop = "20px";
  redRose.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  paraGraphAnchor.appendChild(redRose);
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
  buttonContainer.appendChild(button);
}

Quotes();

function message() {
  // THIS AN IF-STATEMENT THAT MAKES THE QUOTES TO DISPLAY ONLY ONCE
  if (document.getElementById("quote0")) {
    return;
  }

  const quote0 = document.createElement("img");
  quote0.id = "quote0";
  quote0.src = images[3];
  quote0.style.width = "300px";
  quote0.style.marginTop = "5px";
  quote0.style.borderRadius = "10px";
  quote0.classList.add("fade-in");
  quote0.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  buttDiv.appendChild(quote0);

  const quote1 = document.createElement("img");
  quote1.id = "quote1";
  quote1.src = images[4];
  quote1.style.width = "300px";
  quote1.style.borderRadius = "10px";
  quote1.style.margin = "10px 5px";
  quote1.classList.add("fade-in");
  quote1.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });

  buttDiv.appendChild(quote1);

  const quote2 = document.createElement("img");
  quote2.id = "quote2";
  quote2.src = images[5];
  quote2.style.width = "300px";
  quote2.style.borderRadius = "10px";
  quote2.classList.add("fade-in");
  quote2.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });

  buttDiv.appendChild(quote2);
}

function tryReturn() {
  personal.map((person, index) => {
    const personContainer = document.createElement("div");
    personContainer.id = "personContainer";
    personContainer.style.alignContent = "bottom";

    const paraGraph = document.createElement("p");
    paraGraph.textContent = person.name;
    paraGraph.style.margin = "0px";
    personContainer.appendChild(paraGraph);

    const image = document.createElement("img");
    image.src = person.image;
    image.style.width = "120px";
    image.style.borderRadius = "10px";

    // this if statement is used to give margin to the second image and apply style conditionally

    //THIS IF-STATEMENT IS USED TO CHECK IF THE INDEX IS LESS THAN 2
    if (index === 1) {
      personContainer.style.margin = "20px 2px";
      personContainer.style.fontSize = "30px";
      personContainer.style.fontWeight = "bold";
    }
    // THIS IF-STATEMENT IS USED TO GIVE MARGIN TO THE FIRST AND THIRD IMAGE

    // if (person.image === "mor1.jpg" || person.image === "mor3.jpg") {
    //   image.style.margin = "20px 2px";
    // }

    personContainer.appendChild(image);
    imageContainer.appendChild(personContainer);
  });
}

tryReturn();

// document.getElementById("pNames").appendChild(namesArrays);

// const pNames = document.createElement("p");
// pNames.id = "pNames";
// document.querySelector("body").appendChild(pNames);
// var count = 0;

// function testSwitchcase(value) {
//   switch (value) {
//     case 1:
//       count++;
//       return count;
//     case 2:
//       count--;
//       return count;
//   }
// }
