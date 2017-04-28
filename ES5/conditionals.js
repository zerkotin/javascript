///the if
var a = 1;
if (a == 2) {
	// do something
}
else if (a == 10) {
	// do another thing
}
else if (a == 42) {
	// do yet another thing
}
else {
	// fallback to here
}

///switch
switch (a) {
	case 2:
	case 10:
		// some cool stuff
		break;
	case 42:
		// other stuff
		break;
	default:
		// fallback
}

///ternary
var a = 42;

var b = (a > 41) ? "hello" : "world";

//similar to:
if (a > 41) {
   b = "hello";
}
else {
   b = "world";
}
