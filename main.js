// const prompt = require("prompt-sync")({ sigint: true });

// let hintList = document.getElementById("hintList");

// hint.forEach((item)=>{
//   let li = document.createElement("li");
//   li.innerText = item;
//   list.appendChild(li);
// })

const printHint = () => {
  console.log(hint);
};

let hintDisplay = document.getElementById("hintDisplay");

// const button = document.querySelectorAll("button");

// Inital amount of lives/tries is 5

let lives = 6;

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

const inputLetter = (button) => {
  var guess = button;
  console.log(guess);
  hangman(guess);
  document.getElementById("hintDisplay").innerText = "";
  document.getElementById("hintDisplay").innerText = hint.join("");
  checkforwin();
};
// To start, hint will be an empty array

let hint = [];

// This is going to populate the hint array with underscores to match the 'hidden' solution

const makeHint = (solution) => {
  for (let i = 0; i < solution.length; i++) {
    hint.push("_");
    // let hintDisplay = document.createElement("p");
    // hintDisplay.innerText = hint;
    // document.querySelector("#hintDisplay").appendChild(hintDisplay);
  }
  console.log(hint);
  return hint;
};
makeHint(solution);

const displayHint = (hint) => {
  if (hintDisplay.childNodes.length === 0) {
    document.getElementById("hintDisplay").innerText = "Guess to start!";
  }
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
    if (lives === 5) {
      document.getElementById("img4").style.visibility = "hidden";
      document.getElementById("img5").style.visibility = "visible";
      document.getElementById("img6").style.visibility = "hidden";
      document.getElementById("img7").style.visibility = "hidden";
      document.getElementById("img8").style.visibility = "hidden";
      document.getElementById("img9").style.visibility = "hidden";
      document.getElementById("img10").style.visibility = "hidden";
    } else if (lives === 4) {
      document.getElementById("img4").style.visibility = "hidden";
      document.getElementById("img5").style.visibility = "hidden";
      document.getElementById("img6").style.visibility = "visible";
      document.getElementById("img7").style.visibility = "hidden";
      document.getElementById("img8").style.visibility = "hidden";
      document.getElementById("img9").style.visibility = "hidden";
      document.getElementById("img10").style.visibility = "hidden";
    } else if (lives === 3) {
      document.getElementById("img4").style.visibility = "hidden";
      document.getElementById("img5").style.visibility = "hidden";
      document.getElementById("img6").style.visibility = "hidden";
      document.getElementById("img7").style.visibility = "visible";
      document.getElementById("img8").style.visibility = "hidden";
      document.getElementById("img9").style.visibility = "hidden";
      document.getElementById("img10").style.visibility = "hidden";
    } else if (lives === 2) {
      document.getElementById("img4").style.visibility = "hidden";
      document.getElementById("img5").style.visibility = "hidden";
      document.getElementById("img6").style.visibility = "hidden";
      document.getElementById("img7").style.visibility = "hidden";
      document.getElementById("img8").style.visibility = "visible";
      document.getElementById("img9").style.visibility = "hidden";
      document.getElementById("img10").style.visibility = "hidden";
    } else if (lives === 1) {
      document.getElementById("img4").style.visibility = "hidden";
      document.getElementById("img5").style.visibility = "hidden";
      document.getElementById("img6").style.visibility = "hidden";
      document.getElementById("img7").style.visibility = "hidden";
      document.getElementById("img8").style.visibility = "hidden";
      document.getElementById("img9").style.visibility = "visible";
      document.getElementById("img10").style.visibility = "hidden";
    }
  }
  return hint;
};

// This is going to check if our hint array is the same as out solution

const checkforwin = () => {
  if (hint.join("") === solution) {
    window.alert("You win!!");
    return true;
  } else if (lives === 0) {
    document.getElementById("img4").style.visibility = "hidden";
    document.getElementById("img5").style.visibility = "hidden";
    document.getElementById("img6").style.visibility = "hidden";
    document.getElementById("img7").style.visibility = "hidden";
    document.getElementById("img8").style.visibility = "hidden";
    document.getElementById("img9").style.visibility = "hidden";
    document.getElementById("img10").style.visibility = "visible";
    window.alert("You've been hung");
    return true;
  }
  return false;
};

// makeHint(solution);

// This is the general game function

const hangman = (guess) => {
  takeGuess(guess);
};

if (lives === 5) {
  document.getElementById("img5").style.visibility = "visible";
  document.getElementById("img4").style.visibility = "hidden";
  document.getElementById("img6").style.visibility = "hidden";
  document.getElementById("img7").style.visibility = "hidden";
  document.getElementById("img8").style.visibility = "hidden";
  document.getElementById("img9").style.visibility = "hidden";
  document.getElementById("img10").style.visibility = "hidden";
}

// This keeps the game running while the win and loss conditions have not been met

// if (!checkforwin()) {
//   for (let i = 0; !checkforwin(); i++) {
//     printHint();
//     // var guess = prompt("Enter a Letter:");
//     inputLetter(guess);
//   }
// }
