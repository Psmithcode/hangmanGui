// const prompt = require("prompt-sync")({ sigint: true });
const inputLetter = (button) => {
  var guess = button;
  console.log(guess);
  hangman(guess);
  makeHint(guess);
};

let hintList = document.getElementById("hintList");

// hint.forEach((item)=>{
//   let li = document.createElement("li");
//   li.innerText = item;
//   list.appendChild(li);
// })

const printHint = () => {
  console.log(hint);
};

const button = document.querySelectorAll("button");

// button.addEventListener("click", inputLetter());

// Inital amount of lives/tries is 5

let lives = 5;

// This is the word bank that we will pull the solution from

let words = [
  "pizza",
  "blue",
  "girls",
  "peace",
  "Jonathon",
  "flower",
  "healthy",
  "picture",
  "orange",
  "king",
  "slippery",
  "poundcake",
  "strawberry",
  "nurse",
  "vampire",
  "accessible",
  "nightmare",
  "lopsided",
  "glorious",
  "delicious",
  "frog",
  "camera",
  "sleep",
  "seven",
  "monkey",
  "earth",
  "apple",
  "happy",
  "feeling",
  "summer",
];

// This is going to choose an index at random from our word bank and use that as the solution

const solution = words[Math.floor(Math.random() * words.length)];

// To start, hint will be an empty array

let hint = [];

// This is going to populate the hint array with underscores to match the 'hidden' solution

const makeHint = (solution) => {
  for (let i = 0; i < solution.length; i++) {
    hint = [];
    hint[i] = "_";
    let list = document.createElement("li");
    list.innerText = hint[i];
    document.querySelector("#hintList").appendChild(list);
  }
  return hint;
};

// This will take in our input and loop through the solution to see if it includes our input

const takeGuess = (guess) => {
  for (let i = 0; i < solution.length; i++) {
    if (solution[i] === guess) {
      hint[i] = guess;
    }
  }

  //  If the hint does not include our guess after the above function runs, we will deduct a life from the user

  if (!hint.includes(guess)) {
    lives--;
    console.log(`You have ${lives} lives left.`);
  }
  return hint;
};

// This is going to check if our hint array is the same as out solution

const checkforwin = () => {
  if (hint.join("") === solution) {
    console.log("You win!!");
    return true;
  } else if (lives === 0) {
    console.log("You've been hung");
    return true;
  }
  return false;
};

makeHint(solution);

// This is the general game function

const hangman = (guess) => {
  takeGuess(guess);
};

// This keeps the game running while the win and loss conditions have not been met

// if (!checkforwin()) {
//   for (let i = 0; !checkforwin(); i++) {
//     printHint();
//     // var guess = prompt("Enter a Letter:");
//     inputLetter(guess);
//   }
// }
