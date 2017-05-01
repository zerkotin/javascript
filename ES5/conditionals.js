///the if
var a = 1;
if (a == 2) {
	//do something
}
else if (a == 10) {
	//do something else
}
else if (a == 42) {
	//and another one
}
else {
	//if all else fails
}

///switch
switch (a) {
	case 2:
	case 10:
		//do something
		break;
	case 42:
		//do somthing else
		break;
	default:
		//if all else fails
}

///ternary
var a = 42;

var b = (a > 41) ? 'hello' : 'world';

//same as
if (a > 41) {
   b = 'hello';
}
else {
   b = 'world';
}
