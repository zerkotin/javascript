///converting to numbers

var a = "42";
var b = Number( a );

console.log( a );	// "42"
console.log( b );	// 42

///converting to string

var amount = 99.99;

amount = amount * 2;

console.log( amount );		// 199.98

// convert `amount` to a string, and
// add "$" on the beginning
amount = "$" + String( amount );

console.log( amount );		// "$199.98"

//TODO add coercion examples
