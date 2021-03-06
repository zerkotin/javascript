// scopes AKA closures
// this will cover private and global scopes with a touch of closures
// but closures are better covered in the closures part

///global scope
function globalizeMe() { //lets define a function called globalizeMe
  a = 1; //without var it will be defined directly on the window object
  var b = 2;  //with var it will be defined at the current scope/closure
}

globalizeMe(); //invoking the function

console.log(a); //1
console.log(b); //undefined


///function scope
function one() {
	//this `a` only belongs to the `one()` function
	var a = 1;
	console.log( a );
}

function two() {
	//this `a` only belongs to the `two()` function
	var a = 2;
	console.log( a );
}

function three() {
	console.log(a);
}

one(); //1
two(); //2
a = 3; //pulluting the global scope (window)
three(); //3 - it will print the global one
