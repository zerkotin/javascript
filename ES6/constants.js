{ //using constants
	const a = 2;
	console.log( a );	// 2

	a = 3;				// TypeError!
}

{ //an array constant
	const a = [1,2,3];
	a.push( 4 );
	console.log( a );		// [1,2,3,4]

	a = 42;					// TypeError!
} //we can change the object using its methods, we just cannot reassign it...


