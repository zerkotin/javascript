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

//slice - returns a new array
arr.slice(1); //[42, true]

//cloning an array using slice
var clone = Array.prototype.slice.call(arr);
//or 
var clone = arr.slice(0);

//map - converting or extracting data from an array
var point = {x: 1, y: 2};
arr = [point, point, point, point]; //array of points with x,y

var arrOfX = arr.map(function(item){
	return item.x;
});

arrOfX; //[1, 1, 1, 1]

