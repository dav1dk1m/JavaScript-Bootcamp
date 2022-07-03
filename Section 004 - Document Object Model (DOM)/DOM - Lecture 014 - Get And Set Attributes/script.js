// Lecture: Get And Set Attributes

/* setAttribute('attr', 'value') :
Sets the value of an attribute on the specified element

*If the attribute already exists, the value is updated
*/



/*
var div = document.querySelector('div.wrapper');

console.log(div.getAttribute('class')); //wrapper
console.log(div.getAttribute('id')); //null


console.log(div.setAttribute('style', 'background-color: coral'));

console.log(div.removeAttribute('style')); //remove

console.log(div.hasAttribute('style')); //true or false
*/


var btn = document.getElementById('add-btn');
var input = document.getElementById('add-input');

btn.addEventListener('click', function (e) {
	e.preventDefault();

	input.setAttribute('type', 'submit');
	input.setAttribute('value', input.value);
});
