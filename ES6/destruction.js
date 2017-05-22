//calling a function with an array of arguments needs some tricking
var arr = [1,2,3,4];

function foo(a,b,c,d) {
  console.log(a,b,c,d);
}

foo.apply(null, arr); //1 2 3 4

//the ... operator can be used in this case
foo(...arr); //1 2 3 4

//the ... can also be used to collect arguments back into an array
function foo(...arr) {
  console.log(arr);
}

foo(arr); //Array within Array with length of 4
foo(...arr); //Array with length of 4


//or using is both ways
function foo(...arr) {
  console.log(...arr);
}

foo(arr); //Array  with length of 4
foo(...arr); //1 2 3 4

