function outer() {
	var a = 1;

	function inner() {
		var b = 2;

		//inner can see the wrapping function's variabeles
		console.log( a + b );	//3
	}

	inner();

	console.log(b); //reference error
	console.log( a );	//1
}

outer();


///cool adder
function makeAdder(x) {
	function add(y) {
		return y + x; //this will make the x remain in the VM memory, the power of closure :)
	}
	return add;
}

var plusOne = makeAdder( 1 );
var plusTen = makeAdder( 10 );

plusOne(3); //4
plusOne(41); //42
plusTen(13); //23
