const naam = prompt("Wat is je naam?");
const answerA = document.querySelector(".answer-a");
const answerB = document.querySelector(".answer-b");
const answerC = document.querySelector(".answer-c");
const answerD = document.querySelector(".answer-d");
const vraag = document.querySelector(".vraag");
// bt zijn de buttons
const btVolgende = document.querySelector(".pvolgende");
const btVorige = document.querySelector(".pvorige");
const opnieuw = document.querySelector(".reset");
const eind = document.querySelector(".einde");

let score = 0;
// questionIndex is eigenlijk welke vraag het is
let questinIndex = 0;

let vragen = [
    "Welke game hoort bij het personage Mario",
    "Welke console is gemaakt door Sony",
    "Welke game is een battle royale",
    "Welke game hoort bij het personage Master Chief",
    "Wat is de naam van de wereld in Minecraft",
    "Welke game is van Rockstar Games",
    "Welke game is een racegame",
    "Welke game is een first-person shooter",
    "Welke game speel je met blokjes bouwen",
    "Welke console is ouder",
    "Welke game is het meest verkocht ooit"
];

let antwoordenA = [
    "Super Mario ",
    "Xbox",
    "FIFA 24",
    "Halo",
    "The Nether",
    "GTA V",
    "Forza Horizon",
    "Call of Duty",
    "ARK",
    "PlayStation 5",
    "Minecraft"
];

let antwoordenB = [
    "Zelda",
    "PlayStation",
    "Fortnite",
    "Gears of War",
    "The End",
    "Hollow Knight",
    "Portal",
    "Team fortress 2",
    "Brawlhalla",
    "Nintendo Switch",
    "Tetris"
];

let antwoordC = [
    "Sonic",
    "Nintendo",
    "Rocket League",
    "Elder scrolls",
    "Overworld",
    "New bindings of isaac",
    "The forest",
    "Gta V",
    "Minecraft",
    "PlayStation 2",
    "GTA V"
];

let antwoordD = [
    "Kirby",
    "Steam Deck",
    "NBA 2K",
    "Destiny",
    "Sky Dimension",
    "Elden Ring",
    "Minecraft",
    "LOL",
    "Phasmophobia",
    "Xbox Series X",
    "Wii Sports"
];


let goedeAntwoord = [
    "a", "b", "b", "a", "c",
    "a", "a", "a", "c", "c", "a"
];

function laadVraag() {
    // vraag
    vraag.innerHTML = (questinIndex + 1) + ". " + vragen[questinIndex];
    // antwoorden
    answerA.innerHTML = antwoordenA[questinIndex];
    answerB.innerHTML = antwoordenB[questinIndex];
    answerC.innerHTML = antwoordC[questinIndex];
    answerD.innerHTML = antwoordD[questinIndex];
    // welke vraag je bent
    btVorige.innerHTML = `${questinIndex + 1} van ${vragen.length} vragen`;
}

laadVraag();

// zorgt ervoor dat de pagina reload
opnieuw.addEventListener("click", () => window.location.reload());

btVolgende.addEventListener("click", function () {
    questinIndex++;

    if (questinIndex >= vragen.length) {
        vraag.innerHTML = "Quiz klaar!";
        eind.classList.remove("onzichtbaar");
        eind.innerHTML = `${naam}, je score is ${score}`;
        answerA.classList.add("onzichtbaar");
        answerB.classList.add("onzichtbaar");
        answerC.classList.add("onzichtbaar");
        answerD.classList.add("onzichtbaar");
        return;
    }

    // kleur volgende remove vlaag
    answerA.classList.remove("rood", "green");
    answerB.classList.remove("rood", "green");
    answerC.classList.remove("rood", "green");
    answerD.classList.remove("rood", "green");

    laadVraag();
});

// wnr iemand een ant drk chk als de ant goed is
answerA.addEventListener("click", () => checkAnswer("a"));
answerB.addEventListener("click", () => checkAnswer("b"));
answerC.addEventListener("click", () => checkAnswer("c"));
answerD.addEventListener("click", () => checkAnswer("d"));

// eerst is alle antwoord rood maken want dat is handig om alleen de goede antwoord groen te maken
function checkAnswer(answer) {
    answerA.classList.add("rood");
    answerB.classList.add("rood");
    answerC.classList.add("rood");
    answerD.classList.add("rood");

    // goedeAntwoode is de array van de correct antwoord en daarnaast de het nummer van de vraag
    let correct = goedeAntwoord[questinIndex];

    // en als de correcte antwoord gelijk is aan ded antwoord dan
    // als de antwoord goes is komt er 1 bij de score
    if (correct === answer) {
        score++;

        confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 }
        });
    }


    // correct kijkt welke letter goed is bijv de a,b,c,c en dan verander de rood button naar groen
    if (correct === "a") answerA.classList.replace("rood", "green");
    if (correct === "b") answerB.classList.replace("rood", "green");
    if (correct === "c") answerC.classList.replace("rood", "green");
    if (correct === "d") answerD.classList.replace("rood", "green");
}