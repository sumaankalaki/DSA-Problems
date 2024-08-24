// In JavaScript, strings are immutable, which means you cannot change a character directly by indexing. To modify a string,
// you can create a new string with the desired changes.

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("text:",text);
console.log("text.charAt(0):", text.charAt(0));
console.log("length of string:",text.length);

// let char = text.charAt(25);
console.log("A charCode :",text.charCodeAt(0));
console.log("B charCode:",text.charCodeAt(1));
console.log("C charCode:",text.charCodeAt(2));
console.log("D charCode:",text.charCodeAt(3));
// console.log("char:",char);

const schoolName = "W3Schols";
console.log(schoolName.at(0));
console.log(schoolName.at(1));
console.log(schoolName.at(-7));
console.log(schoolName[2]);
console.log(schoolName.length-2);

let stringArray = "a$ b c| c#d f,| #  d,$s,s";
const myArraySpace = stringArray.split(" ");
const myArrayComma = stringArray.split(",");
const myArraypipe = stringArray.split("|")   
const myArray$ = stringArray.split("#")  // Split on pipe
console.log("myArraySpace", myArraySpace);
console.log("myArrayComma", myArrayComma);
console.log("myArraypipe", myArraypipe);
console.log("myArray$", myArray$);
