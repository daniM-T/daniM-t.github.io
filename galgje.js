/*

random woord plaatsen:
we hebben een array nodig met een aantal woorden

we hebben een functie nodig
we gebruiken de random functie van JS
we vermenigvuldigen dit met de lengte van de array
we gaan het getal naar benede afronden (floor)
we halen het woord op met het random getal
we hebben een 2e array nodig waar alle letters in komen
dit gaan we vullen met het random woord (zoek het op op het internet. kijk naar char from string).
we moeten hidden word ophalen
en met een loop gaan we streepjes neer zetten voor het aantal chars (karakters).



het woord van uit de inputveld halen
en controleren:

We halen met een querySelector formulier van guess-word ophalen
We zetten een evenListener er op die luistert naar submit

we maken een functie aan.
we vergelijken het gerade woord met het woord dat geraden moet worden
als het gelijk is aan elkaar:
het woord laten zien
als het niet gelijk is:
we zetten een punt bij de fouten

fouten laten zien:
maak een functie aan
hier in passen we de image aan
we gebruiken hiervoor de mistakes
we kunnen de mistakes in galgje string zetten
de image moet opgehaalt worden met een querySelector
we passen de src aan van de image

maak een functie aan het parameter voor gewonnen of verloren
maak een div in html
maak de dic op met css
zet hier een element voor de tekst in of je heb gewonnen of niet
maak een knop om opnieuw te spelen
het element hidden maken
de div ophalen met een querySelector
in js de tekst aanpassen op basis van gewonnen of verloren met if
maak de div zichtbaar

button
Maak een knop in HTML
geef de knop een id zodat je hem later kunt vinden
Zoek de knop op in JavaScript
gebruik document.querySelector om de knop te pakken
Voeg een klik‑event toe aan de knop
wanneer de knop wordt aangeklikt:
voer een functie uit
In die functie: 

functie letter raden
We hebben een array nodig
Deze zetten we klaar voor de geraden letters
formulier ophalen met een querySelector
event listener op het formulier
we maken een functie aan
we halen de letter op die is ingevult
we lopen door de array met de geraden leters
als de letter er in zit geven we een melding
we maken een loop door de juiste letters heen
als de letter gelijk is vervangen we het streepje 
in toGuessWord met de geraden letter
als er geen letter goed is dan moeten addMistake aanroepen
we roepen de funtie renderWord weer aan
voeg de letter toe aan de geraden letters
we maken een functie met een for loop 
om de geraden letters neer te zetten
we maken een functie met een for loop om de graden letters te
controleren
als alle letters goed zijn laten we het eindscherm zien
*/

const hiddenWordP = document.querySelector(".hidden-word>p");
const wordForm = document.querySelector(".word-form");
const wordInput = document.querySelector("#guess-word");
const image = document.querySelector(".hangman-image>galgje");
const letterList = document.querySelector(".letter-list");
const endScreen = document.querySelector(".end-screen");
const endScreenText = document.querySelector(".end-screen>p");
const replayBtn = document.querySelector(".replay-btn");

let word = "";
let wordLetters = [];
let toGuessWord = [];
let mistakes = 0;
const words = [
  "javascript",
  "html",
  "css",
  "variable",
  "function",
  "object",
  "array",
  "string",
  "boolean",
  "null",
  "undefined",
  "loop",
  "condition",
  "event",
  "element",
  "attribute",
  "selector",
  "class",
  "id",
  "tag",
  "node",
  "document",
  "browser",
  "render",
  "style",
  "flexbox",
  "grid",
  "mediaquery",
  "responsive",
  "component",
  "framework",
  "library",
  "debug",
  "compile",
  "execute",
];

wordForm.addEventListener("submit", checkWord);
replayBtn.addEventListener("click", replay);

getRandomWord();

function getRandomWord() {
  const random = Math.floor(Math.random() * words.length);
  word = words[random];
  for (let i = 0; i < word.length; i++) {
    wordLetters.push(word[i]);
    toGuessWord.push("_");
  }
  console.log(word);

  renderWord();
}

function renderWord() {
  let word = "";
  for (let i = 0; i < toGuessWord.length; i++) {
    word += toGuessWord[i] + " ";
  }
  hiddenWordP.textContent = word;
}

function checkWord(e) {
  e.preventDefault();
  const guessWord = wordInput.value.toLowerCase();
  if (guessWord === word) {
    showEndScreen(true);
  } else {
    addMistake();
  }
}

function addMistake() {
  mistakes++;
  image.src = `img/part-${mistakes}.png`;
  if (mistakes > 10) {
    showEndScreen(false);
  }
}

function showEndScreen(won) {
  if (won) {
    endScreenText.textContent = "Je hebt gewonnen!!!!";
  } else {
    endScreenText.textContent = `Jammer, je hebt verloren. Het woord was ${word}`;
  }
  endScreen.classList.remove("hidden");
}

function replay() {
  endScreen.classList.add("hidden");
  mistakes = 0;
  image.src = "galgje/part-0.png";
  wordLetters = [];
  toGuessWord = [];
  getRandomWord();
  letterList.innerHTML = "";
}
