class Javagotchi {
  constructor(neutral, hungry, tired, sad, dead) {
    this.states = {
      neutral: neutral,
      hungry: hungry,
      tired: tired,
      sad: sad,
      dead: dead,
    };
    this.currentState = "neutral";
    this.displayASCII();
  }

  changeState(newState) {
    this.currentState = newState;
    this.displayASCII();
  }

  displayASCII() {
    // Get the element where you want to display the ASCII art
    const petASCIIElem = document.querySelector(".petASCII");

    // Create a <pre> element to preserve formatting
    const preElement = document.createElement("pre");

    // Set the ASCII art as the text content of the <pre> element
    const asciiArt = this.states[this.currentState];
    preElement.textContent = asciiArt;

    // Clear previous ASCII art
    petASCIIElem.innerHTML = "";

    // Append the <pre> element to the desired container
    petASCIIElem.appendChild(preElement);

    // If the pet is dead, set a specific class to style the ASCII art:
    if (this.currentState === "dead") {
      petASCIIElem.classList.add("dead");
    } else {
      // Remove the dead class if it's not dead
      petASCIIElem.classList.remove("dead");
    }
  }
}

// Define ASCII arts for different cat states:
const cat = {
  neutral: `
    /\\_____/\\
   /  o   o  \\
  ( ==  ^  == )    /\\
   )         (    | |
  (           )  / /
 ( (  )   (  ) )/ /
(__(__)___(__)__)/`,
  hungry: `
   /\\_____/\\
  /  @   @  \\
 ( == /\\/\\== )  /\\
  )         (  / /
 (           )  \\ \\
( (  )   (  )  )/ /
(__(__)___(__)__)/`,
  tired: `
    /\\_____/\\    SZ
   /   _  _  \\  z
  ( ==  o  == )
   )         (
  (           )      ,
 ( (  )   (  ) )____/|
(__(__)___(__)__)____/   `,
  sad: `
    /\\_____/\\
   /  .T T.  \\
  ( ==  ^  == )    -^-
   )         (   / / \\ \\
  (           ) | |   \\/
 ( (  )   (  ) )/ /
(__(__)___(__)__)/`,

  dead: `
_________________________
|\\ _____________________ /|
| |_____________________| |
|/_______________________\\|
/=========================\\
'==========================='
| ~~  -|- GOODBYE  -|- ~~ |
|      |   WORLD    |     |
|_________________________|
`,
};

// Create a new Javagotchi instance
const catJavagotchi = new Javagotchi(
  cat.neutral,
  cat.hungry,
  cat.tired,
  cat.sad,
  cat.dead
);

// Define ASCII arts for different puppy states:
const dog = {
  neutral: `
      ^
     / \\___
    (    ^ \\___
   /         _ O
  /   (_____/
 /_____/ U`,
  hungry: `
      ^
     / \\__
    (    @\\___
   /         _ O
  /   (_____/
 /_____/ V`,
  tired: `
      ^        Z
     / \\__  z
    (   -- \\___
   /         _ O
  /   (_____/
 /_____/ U`,
  sad: `
      ^
     / \\__
    (    T\\___
   /  |  ,    O
  /   (_____/
 /_____/ U`,

  dead: `
_________________________
|\\ _____________________ /|
| |_____________________| |
|/_______________________\\|
/=========================\\
'==========================='
| ~~  -|- GOODBYE  -|- ~~ |
|      |   WORLD    |     |
|_________________________|
`,
};

// Create a new Javagotchi instance for the dog
const dogJavagotchi = new Javagotchi(
  dog.neutral,
  dog.hungry,
  dog.tired,
  dog.sad,
  dog.dead
);

/////////////////////////////////////////

// Initialize userPet variable globally
let userPet;

// Function to set and get the pet type
function getAndSetPetType() {
  while (true) {
    try {
      userPet = prompt("Press 1 for cat and 2 for dog");
      if (userPet !== "1" && userPet !== "2") {
        throw new Error("You must enter 1 or 2!");
      } else {
        console.log(`User pet set to ${userPet === "1" ? "cat" : "dog"}.`);
        break; // Break the loop if user input is valid
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
}

function getPetName() {
  let userPetName;
  while (true) {
    try {
      userPetName = prompt("Enter your pet's name");
      if (!userPetName.trim()) {
        throw new Error("You must enter a name");
      } else {
        break; // Break the loop if user input is valid
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  document.querySelector(".petName").textContent = userPetName;
  console.log(`Name set to ${userPetName}.`);
}

// Initialize the percentages
let hungryPercentage = 100;
let tiredPercentage = 100;
let happyPercentage = 100;

// Function to update and display the percentages
function updateCounters() {
  document.querySelector(".hungerCounter").textContent = `${hungryPercentage}%`;
  document.querySelector(".sleepCounter").textContent = `${tiredPercentage}%`;
  document.querySelector(".moodCounter").textContent = `${happyPercentage}%`;
}

// Function to decrement the percentages
function countdown() {
  // Update the percentages
  hungryPercentage -= 1;
  tiredPercentage -= 1;
  happyPercentage -= 1;

  // Update and display the counters
  updateCounters();

  // Check if any percentage has reached 0
  if (hungryPercentage <= 0 || tiredPercentage <= 0 || happyPercentage <= 0) {
    clearInterval(timer); // Stop the timer
    if (userPet === "1") {
      catJavagotchi.changeState("dead");
    } else {
      dogJavagotchi.changeState("dead");
    }
    console.log("Your pet is dead ☠️!"); // Notify the user their pet died
  } else {
    // Display ASCII art based on current status
    if (userPet === "1") {
      if (hungryPercentage < 90) {
        catJavagotchi.changeState("hungry");
      } else if (tiredPercentage < 90) {
        catJavagotchi.changeState("tired");
      } else if (happyPercentage < 90) {
        catJavagotchi.changeState("sad");
      } else {
        catJavagotchi.changeState("neutral");
      }
    } else {
      if (hungryPercentage < 90) {
        dogJavagotchi.changeState("hungry");
      } else if (tiredPercentage < 90) {
        dogJavagotchi.changeState("tired");
      } else if (happyPercentage < 90) {
        dogJavagotchi.changeState("sad");
      } else {
        dogJavagotchi.changeState("neutral");
      }
    }
  }
}

// Call the countdown function every second, sort of calls itself...
const timer = setInterval(countdown, 1000);

//Feed Button
const feedbtn = document.querySelector(".feedButton");
feedbtn.addEventListener("click", (e) => {
  hungryPercentage = Math.min(hungryPercentage + 5, 100); // Limit to maximum of 100%
  updateCounters();
});

//Sleep Button
const sleepbtn = document.querySelector(".sleepButton");
sleepbtn.addEventListener("click", (e) => {
  tiredPercentage = Math.min(tiredPercentage + 5, 100);
  updateCounters();
});

//Play Button
const playbtn = document.querySelector(".playButton");
playbtn.addEventListener("click", (e) => {
  happyPercentage = Math.min(happyPercentage + 5, 100);
  updateCounters();
});

// Main Program:
function main() {
  getAndSetPetType();
  getPetName();
}

main();
