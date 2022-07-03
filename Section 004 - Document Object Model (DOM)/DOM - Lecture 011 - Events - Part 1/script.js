// Lecture: Events - Part 1

/* Events:
Actions that hapeen on a web page you are programming

Events make web pages more interactivce and dynamic 
*/



var h2 = document.querySelector('header h2');

// click event
// h2.onclick = function () {
// 	console.log('Clicked');
// }

// mouse over 
// h2.onmouseover = function () {
// 	console.log('Mouseover');
// }

// click & mouseover event (not flexible and old ways to do it)
// function a() {
//     console.log('Clicked');
// } //reference index.html header
// function b() {
//     console.log('Mouseover');
// }


function a() {
	console.log('Clicked a');
}

function b() {
	console.log('Clicked b');
}
