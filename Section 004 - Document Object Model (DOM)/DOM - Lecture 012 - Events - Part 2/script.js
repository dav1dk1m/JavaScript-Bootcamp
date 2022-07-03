// Lecture: Events - Part 2

/* addEventListener() :
Attaches an event handler to the specified element

*You can use multiple similar events to one element at a time
*/


var h2 = document.querySelector('header h2');

// h2.addEventListener('click', function () {
// 	console.log('Clicked');
// });

/*
h2.addEventListener('click', a);
 h2.addEventListener('click', b);

function a() {
	console.log('Clicked a');
}

 function b() {
   console.log('Clicked b');
 }
*/

////////////////////////////////

/* Event Object :
When an event occurs, the event object is created.
*/

h2.addEventListener('click', a);


//function a(e) {
//	console.log(e);
//}

function a(e) {
	console.log(e.target);
}

//top and bottom the same

function a() {
	console.log(this);
}
