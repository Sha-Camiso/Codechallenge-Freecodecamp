const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
const myStr = "This is the start. " + "This is the end."; 
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Only change this line;
// Only change code above this line

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
var removedFromMyArray = myArray.pop();

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray =myArray.shift();

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul",35])

const myList = [
  ["ice cream",25],
  ["creampuff",19],
  ["caramel",24],
  ["cheese",9],
  ["pancakes",7]
];

function reusableFunction(){
  console.log("Hi World");
}


function timesFive(num) {
  return num * 5;
}

reusableFunction();


function functionWithArgs(one, two) {
  console.log(one + two);
}
functionWithArgs(1, 2); 


// Declare the myGlobal variable below this line
let myGlobal= 10;
let oopsGlobal = 5;

function fun1() {
  // Assign 5 to oopsGlobal Here

}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear= "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive (num) {
 sum= sum + 5;
}

// Only change code above this line

addThree();
addFive();

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
