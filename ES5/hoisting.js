var a = 2;

foo(); //foo decleration is hoisted so we can run it

function foo() {
	a = 3; //declared later, so there's no leaking to global scope

	console.log(a);	//3

	var a; //decleration is hoisted to the top of foo - so it doesnt leak to the global scope
}

bar; //undefined - bar is declared but its still undefined
bar(); //error - undefined is not a function

var bar = foo; //the decleration is hoisted but the assigining remains here.

bar(); //3

console.log(a);	// 2
