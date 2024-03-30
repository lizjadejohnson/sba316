class Javagotchi {
  constructor(neutral, hungry, tired, sad) {
    this.neutral = neutral;
    this.hungry = hungry;
    this.tired = tired;
    this.sad = sad;
    this.isTired = false;
    this.isHungry = false;
    this.isHappy = true;
  }

  sleep() {
    this.isTired = true;
  }

  eat() {
    this.isHungry = true;
  }

  play() {
    this.isHappy = false;
  }

  displayASCII(state) {
    // Get the element where you want to display the ASCII art
    const petASCIIElem = document.querySelector(".petASCII");

    // Create a <pre> element to preserve formatting
    const preElement = document.createElement("pre");

    // Set the ASCII art as the text content of the <pre> element
    preElement.textContent = this[state];

    // Append the <pre> element to the desired container
    petASCIIElem.appendChild(preElement);
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
};

// Create a new Javagotchi instance
const catJavagotchi = new Javagotchi(
  cat.neutral,
  cat.hungry,
  cat.tired,
  cat.sad
);

// Define ASCII arts for different puppy states:
const puppy = {
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
   /  |       O
  /   (_____/
 /_____/ U`,
};

// Create a new Javagotchi instance for the puppy
const puppyJavagotchi = new Javagotchi(
  puppy.neutral,
  puppy.hungry,
  puppy.tired,
  puppy.sad
);

/////////////////////////////////////////

function getPetType() {
  let userPet;
  while (true) {
    try {
      userPet = prompt("Press 1 for cat and 2 for dog");
      if (userPet !== "1" && userPet !== "2") {
        throw new Error("You must enter 1 or 2!");
      } else {
        break; // Break the loop if user input is valid
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  if (userPet === "1") {
    // Display ASCII art for default state catJavagotchi to get started
    catJavagotchi.displayASCII("neutral");
  } else {
    puppyJavagotchi.displayASCII("neutral");
  }
  console.log(`User pet set to ${userPet === "1" ? "cat" : "dog"}.`);
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
  if (hungryPercentage < 0 || tiredPercentage < 0 || happyPercentage < 0) {
    clearInterval(timer); // Stop the timer
    console.log("Your pet is dead ☠️!"); // Notify the user their pet died
  }
}

// Call the countdown function every few seconds, sort of calls itself...
const timer = setInterval(countdown, 4000);

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
  getPetType();
  getPetName();
  countdown();
}

main();
