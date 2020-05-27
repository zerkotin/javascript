///while
while (numOfCustomers > 0) {
	console.log( 'How may I help you?');
	numOfCustomers = numOfCustomers - 1;
}


///do while
do {
	console.log('How may I help you?');
	numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);


///for
for(var i = 0; i <= 9; i = i + 1) {
	console.log( i );
}
//0 1 2 3 4 5 6 7 8 9

///a loop does not hold a scope!!!
for(var i=0; i<10; i++) {
	console.log(i); //0,1,2,3,4,5,6,7,8,9
}
console.log(i); //10

// Array.forEach will be covered in the Array section
