// -----------------3/28/24 -----------------------------

//Create a function that will merge two arrays and return the result as a new array

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const combineArrays = (array1, array2) => {
  const newArray = array1.concat(array2);
  return newArray;
};

console.log(combineArrays(array1, array2));

//Create a function that converts a string to an array of characters

const exampleString = "Hello Per Scholas!";

const createStringArray = (string) => {
  const stringArray = string.split("");
  return stringArray;
};

console.log(createStringArray(exampleString));

//BONUS Find the frequency of characters inside a string.
//Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.

const findCharacterFrequencies = (string) => {
  const stringArray = string.split("");
  const charMap = {};
  stringArray.forEach((letter) => {
    if (!(letter in charMap)) {
      // Corrected condition
      charMap[letter] = 1; // Initialize the letter's count
    } else {
      charMap[letter] += 1; // Increment the letter's count
    }
  });
  return charMap;
};

console.log(findCharacterFrequencies("Hello Per Scholas!"));

///////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////// ---HUMAN CLASS--- /////////////////////////
class Human {
  constructor(eyes = 2, ears = 2) {
    this.organs = ["heart", "stomach", "liver", "kidneys", "lungs"];
    this.eyes = eyes;
    this.ears = ears;
    this.isAwake = true;
    this.isEating = false;
    this.isMoving = false;
    this.isSpeaking = false;
  }

  sleep() {
    this.isAwake = false;
  }

  eat() {
    this.isEating = true;
  }

  move() {
    this.isMoving = true;
  }

  speak(sound) {
    this.isSpeaking = true;
    console.log(sound); // Will print the sound passed to it when called
    //console.log(`My name is ${person1.name}`);     This can't work because person1 is not initialized within Human
  }
}

/////////////////////// ---HUMAN OBJECTS--- /////////////////////////
//No real point to this:
const human1 = new Human();
const human2 = new Human();
console.log(human1);

/////////////////////// ---PERSON CLASS--- /////////////////////////
class Person extends Human {
  constructor(gender, age, name, nationality, occupation, eyes, ears) {
    // Human constructor super:
    super(eyes, ears);

    // Person-specific properties
    this.gender = gender;
    this.age = age;
    this.name = name;
    this.nationality = nationality;
    this.occupation = occupation;
  }
}

/////////////////////// ---PERSON CLASS--- /////////////////////////
const person1 = new Person(
  "female",
  28,
  "Alice",
  "Canadian",
  "Software Developer"
  //Notice that eyes and ears do not need to be passed as we are assuming it's 2 for each
);

const person2 = new Person("male", 37, "Van Gogh", "Dutch", "Painter", 2, 1); //Well, this one's a little different...
console.log(person2);

/////////////////////// --- CALLING FUNCTIONS--- /////////////////////////
person1.speak("Hello, world!"); // Inherits and can use Human methods
person1.speak(`My name is ${person1.name}`); //The human methods don't know about it, though.
