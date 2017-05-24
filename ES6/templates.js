//using variables
var x = 'moshe';

console.log(`${x} is my name
and i can write it in 
several lines too...
${x} see!
`); 

//using functions
console.log(`${x.toUpperCase()}`); //"MOSHE"

function foo(something) {
  return something.toLowerCase();
}

//calling functions with parameters
console.log(`${foo("MOSHE")}`); //"moshe"


