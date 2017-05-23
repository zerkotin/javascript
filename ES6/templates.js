var x = 'moshe';

console.log(`${x} is my name
and i can write it in 
several lines too...
${x} see!
`); 

console.log(`${x.toUpperCase()}`); //"MOSHE"

function foo(something) {
  return something.toLowerCase();
}

console.log(`${foo("MOSHE")}`); //"moshe"


