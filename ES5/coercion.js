//Coercion is the combination of 2 types and the resulting type/value

//converting to numbers
var a = '42';
var b = Number( a );

console.log( a ); //"42"
console.log( b ); //42

///converting to string
var num = 17;
num = num * 2;

console.log(num); //34

amount = '$' + String(num);
console.log( amount ); //"$34"

amount = '$' + num;
console.log(amount); //"$34"

//we can see that string is the strong type and everything combined with a string is coerced into a string

true + 't'; //"truet"

true + 1; //2
//wow, true is actually 1

false + 1; //1
//false is 0

//when coercing boolean with a number, true is 1 and false becomes 0

//converting to a number
var s = '7';
+s; //7
parseInt(s); //7
parseFloat(s); //7
Number(s); //7
