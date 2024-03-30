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

// Display ASCII art for the puppyJavagotchi based on state
puppyJavagotchi.displayASCII("neutral");

///////////////////////////////////////////////////////////////////
// Display ASCII art for catJavagotchi based on state
catJavagotchi.displayASCII("tired");

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
  console.log(`User pet set to ${userPet === "1" ? "cat" : "dog"}.`);
}

// Call the function to run it
getPetType();
