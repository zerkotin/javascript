//ES6 introduces block scopes
//consider this example
var a = 2;
{
  var a = 3;
}
console.log(a); //3

//lets do the same using 'let'
let b = 2;
{
  let b = 3;
}
console.log(b); //2

//another interesting case is closure using let
//consider a for loop with let instead of var
var funcs = [];

for (let i = 0; i < 5; i++) {
	funcs.push( function(){
		console.log( i );
	} );
}

funcs[3](); //3 //using a 'var' it should have been 5...

