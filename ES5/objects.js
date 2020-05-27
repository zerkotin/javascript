var obj = { //a json like object
	a: 'hello world',
	b: 42,
	c: true
};

obj.a; //"hello world"
obj.b; //42
obj.c; //true

obj['a'];	//"hello world"
obj['b'];	//42
obj['c'];	//true

///we can also add or change existing Objects
// the Number type is an Object and we can add functionality to it
// what we are doing here is called polyfilling - but its not 100% how it should be
if (!Number.isNaN) {
	//we should pollyfill directly on prototype - we will learn more about prototypes in the prototype section
	Number.isNaN = function isNaN(x) {
		return x !== x; // checking the type with coercion
	};
}

///Object.create
var foo = {
	a: 42
};

//create `bar` and link it to `foo`
var bar = Object.create( foo );

bar.b = 'hello world';

bar.b; //"hello world"
bar.a; //42
