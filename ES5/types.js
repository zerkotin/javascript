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

//in general we can say we have 7 types
//undefined, null, string, number, boolean, object, function
//in addition, we are introduced to a new type called Symbol, in ES2015 (AKA ES6)


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
