var topElement = document.querySelector(".top");
var colorName = document.querySelector("#colorName");
var startBtn = document.getElementById("startBtn");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var container = document.querySelector(".container");

const boxes = document.querySelector(".container");
let colors = []; // Spalvų array

//Susigeneruojam atsitiktinę RGB spalvą su skaičių pagalba
function generateRandomColor() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return `RGB(${r}, ${g}, ${b})`;
}

//Iškeliam į ekraną spalvos skaičių
function displayRandomColorName() {
  var randomIndex = Math.floor(Math.random() * colors.length);
  var randomColor = colors[randomIndex];
  colorName.textContent = randomColor;
}
//
function boxClick(event) {
  var clickedBox = event.target;
  var clickedColor = clickedBox.style.background;
  // Teisingas spėjimas
  if (clickedColor == colorName.textContent.toLowerCase()) {
    topElement.style.background = clickedColor;
      for (var box of boxes.children) {
        box.style.background = clickedColor;
      }
  // Neteisingas spėjimas
    } else {
      clickedBox.style.background = "#232323";
    }
}

function restartGame() {
  topElement.style.background = "#4682b4";
  colors = [];
  var numBoxes = (container.classList.contains("hard")) ? 6 : 3;
  for (var i = 0; i < numBoxes; i++) {
    colors.push(generateRandomColor());
  }

  boxes.innerHTML = "";

  for (var color of colors) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.style.background = color;
    newBox.addEventListener("click", boxClick);
    boxes.appendChild(newBox);
  }

  displayRandomColorName();
}

startBtn.addEventListener("click", restartGame);

easy.addEventListener("click", function () {
  container.classList.remove("hard");
  container.classList.add("easy");
  restartGame();
});

hard.addEventListener("click", function () {
  container.classList.remove("easy");
  container.classList.add("hard");
  restartGame();
});
