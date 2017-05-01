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

///polyfilling
if (!Number.isNaN) {
	Number.isNaN = function isNaN(x) {
		return x !== x;
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

//TODO add more object.create examples
