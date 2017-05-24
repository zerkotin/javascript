//default parameters example
function foo(x = 10, y = 5) {
  console.log(x, y);
}
foo(); //10, 5


//function parameters destructing
function foo({x}) { //object destruction
  console.log(x);
}
foo({x:5}); // 5

function foo([x]) { //array destruction
  console.log(x);
}
foo([5]); // 5

//function parameters destructing and default value
function foo({x = 10} = {}) {
  console.log(x);
}
foo(); //10

//arrow functions example
var foo = (a) => console.log(a); //with brackets
var foo = a => console.log(a); //without brackets
var foo = (a, b) => {  //with body
  console.log(a, b);
};

foo(2); //2, undefined

//arrow functions scope
function Counter() { //a counter that will count every second
  this.counter = 0;
  
  setInterval((function(){this.counter++}).bind(this), 1000); //we need bind.., remember call site?
  setInterval( () => this.counter++, 1000); //we dont need bind, arrow function are bounded to this automatically
}


