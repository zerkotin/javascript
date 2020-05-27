//we have 7 basic types
var a;
typeof a; //undefined

a = 'hello world';
typeof a; //string

a = 42;
typeof a; //number

a = true;
typeof a; //boolean

a = null;
typeof a; //this will return object too

a = undefined;
typeof a; //undefined

a = {
  b: 'c'
};
typeof a; //object

a = function(){}
typeof a; //function

//undefined, null, string, number, boolean, object, function
//in ES2015/ES6 we are introduced to an extra type called "Symbol"


//in addition, Object has subtypes
///subtypes of Object
String;
Number;
Boolean;
Object;
Function;
Array;
Date;
RegExp;
Error;

//in later versions of ECMAScript more subtypes were introduced
