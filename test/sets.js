/* const letters= new Set();

letters.add(2);
letters.add('a');
letters.add("b");
letters.add("c");

console.log(letters); */


/* 
//You can list all Set elements (values) with a for..of loop:
const letters = new Set(["a","b","c"]);
// List all Elements
// A Set has no keys, so keys() returns the same as values().
let text =[];
const keys = letters.keys();
const values = letters.values();
for (const x of values) {
  text.push(x);
}
console.log(text);
 */



/* 
//The forEach() method invokes a function for each Set element:
let forEachtext = "";
letters.forEach (function(value) {
    forEachtext += value;
})
console.log(forEachtext);

 */


/* 
//The entries() method returns an Iterator with [value,value] pairs from a Set.
// Create a Set
const letters = new Set(["a","b","c"]);

// Get all Entries
const myIterator = letters.entries();

console.log(myIterator);
// List all Entries
let text = [];
for (const entry of myIterator) {
  text.push(entry);
}

console.log(text);
 */