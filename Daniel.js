let player = [];
let computer = [];
let lives = 2;

let count = 2;
let value = 1;

const icons = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

const q = (uno) => document.querySelector(uno);

function showBid() {
  document.querySelector(".controller").style.display = "grid";
}

function showDice(arr, id) {
  q(id).textContent = arr.map(n => icons[n - 1]).join(" ");
}

function computerMakeBid() {
  let compCount = Math.floor(Math.random() * 6) + 1;
  let compValue = Math.floor(Math.random() * 6) + 1;

  q("#computerBid").textContent =
    "Computer biedt: " + compCount + " x " + icons[compValue - 1];

  return { compCount, compValue };
}

function rollDice() {
  player = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
  ];

  computer = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
  ];

  showDice(player, "#playerDice");

  q(".result").textContent = "";
  showBid();
  computerMakeBid(); 
}

function updateDisplay() {
  q("#display").textContent = count + " x " + icons[value - 1];
}

function countUp() {
  count = Math.min(count + 1, 10);
  updateDisplay();
}

function countDown() {
  count = Math.max(count - 1, 1);
  updateDisplay();
}

function valueUp() {
  value = Math.min(value + 1, 6);
  updateDisplay();
}

function valueDown() {
  value = Math.max(value - 1, 1);
  updateDisplay();
}

function submitBid() {
  q(".result").textContent =
    "Je bod is: " + count + " x " + icons[value - 1];
}

function callLiar() {
  let all = [...player, ...computer];
  let actual = all.filter(n => n === value).length;

  showDice(computer, "#computerDice");

  if (actual >= count) {
    q(".result").textContent =
      "Je zat fout! Er zijn echt " + actual + " x " + icons[value - 1];

    lives--;
    q(".lives").textContent = "Lives: " + lives;

    if (lives <= 0) {
      q(".result").textContent = "GAME OVER!";
      setTimeout(() => window.location.reload());
      return;
    }
  }

  q(".result").textContent =
    "JE WON! Er zijn maar " + actual + " x " + icons[value - 1];

  setTimeout(() => location.reload(), 2000);
}

updateDisplay();
