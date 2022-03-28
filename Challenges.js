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

function testSize(num) {
  // Only change code below this line
if (num<5){
return "Tiny";
} else if (num<10){
  return "Small";
} else if (num<15){
  return "Medium";
} else if (num<20){
  return "Large";
} else if (num>=20){
  return "Huge";
}
  
  // Only change code above this line
}

testSize(7);

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes==1){
return names[0];
} else if (strokes<=par-2){
  return names[1];
} else if (strokes===par-1) {
  return names[2];
} else if (strokes===par){
  return names[3]
} else if (strokes===par+1){
  return names[4];
} else if (strokes===par+2){
  return names[5];
} else  (strokes >= par+3); {
  return names[6];}
  // Only change code above this line
}

golfScore(5, 4);

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case 1: answer ="alpha"; break;
    case 2: answer = "beta"; break;
    case 3: answer = "gamma"; break;
    case 4: answer ="delta"; break;
  }



  // Only change code above this line
  return answer;
}

caseInSwitch(1);

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case "a": answer="apple";break;
  case "b": answer="bird";break;
  case "c": answer="cat";break;
  default: answer="stuff";break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
 switch (val){
   case 1:
   case 2:
   case 3:
    answer="Low";
    break;
     case 4:
   case 5:
   case 6:
    answer="Mid";
    break;
     case 7:
   case 8:
   case 9:
    answer="High";
    break;
 }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val){
    case "bob": answer="Marley";break
    case 42: answer="The Answer";break
    case 1: answer="There is no #1";break
    case 99: answer="Missed me by this much!";break
    case 7: answer="Ate Nine";break
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

let count = 0;

function cc(card) {
  // Only change code below this line
switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp) ){

  
 return obj[checkProp];
} else{
  return "Not Found";
  // Only change code above this line
}
}

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true,
  },{
   "artist": "Celine Dion",
    "title": "Piano Man",
    "release_year": 1993,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

function convertToInteger(str) {
return parseInt(str);
}

convertToInteger("56");

  return num > 0 ? "positive"
    : num < 0 ? "negative"
    : "zero";
}

// Only change code below this line
function countdown(n){
    if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }

}
// Only change code above this line

function rangeOfNumbers(startNum, endNum) {
  
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
