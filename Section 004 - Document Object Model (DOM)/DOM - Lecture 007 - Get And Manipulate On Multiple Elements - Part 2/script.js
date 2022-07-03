// Lecture: Get And Manipulate On Multiple Elements - Part 2

// forEach():Executes a provided function once for each array element

var icons = document.getElementsByClassName('fa');

/*
icons.forEach(function(icon, index, arr) {
	console.log(icon, index, arr);
}) //TypeError
*/

// 6 items of an array
//Array.from(icons).forEach(function (icon) {
//	console.log(icon);
//});

Array.from(icons).forEach(function (icon, index, arr) {
	console.log(icon, index, arr);
});



// getElementsByTagName('tag') : returns a collection of all elements in the document with the specified tag name (Returns HTMLcollection)

var lis = document.getElementsByTagName('li');
console.log(lis);
