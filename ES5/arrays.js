var arr = [
	'hello world',
	42,
	true
];

arr[0]; //hello world
arr[1]; //42
arr[2]; //true
arr.length; //3

typeof arr; //object

arr.forEach(function(item){
	console.log(item); //will print all items
});

for(var i=0; i<arr.length; i++) {
	console.log(arr[i]); //will print all items
}
