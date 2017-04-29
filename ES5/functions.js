///unnamed/annonymous function
setTimeout( function(){
	console.log("I waited 1 second!");
}, 1000 );

///named function
setTimeout( function timeoutHandler(){ // <-- Look, I have a name!, better for stack trace
	console.log( "I waited 1 second!" );
}, 1000 );


///functions as objects
function foo() {
	console.log(this.bar); //undefined
	return 42;
}

foo.bar = 'hello world';

foo(); //returns 42, logs undefined
typeof foo; //function
typeof foo(); //number
typeof foo.bar;	//string


///how to solve that undefined logging?
function foo() {
	console.log(foo.bar); //hello world
	return 42;
}
