var a = 2;

foo(); //foo decleration is hoisted

function foo() {
	a = 3;

	console.log(a);	//3

	var a; //decleration is hoisted to the top of foo
}

console.log(a);	// 2
