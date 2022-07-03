// Lecture: DOM Styles And Classes

// className : Gets and sets the value of class attribute of the specified element



var h2 = document.querySelector('header h2');

// look style.css
h2.className = 'changeBg';
// // h2.className = 'changeFt';
// h2.className += ' changeFt';

console.log(h2.className);
// console.log(typeof h2.className);

// side works: 
// // var a = 10;
// // a += 20;
// // a = a + 20;
// // console.log(a);


/* classList : Returns the class name(s) of an element, as a DOMTokenList object.
Useful to add, remove and toggle CSS classes on an element. 
(classList property is read-only) */

h2.classList.add('changeFt'); //add

h2.classList.remove('changeBg'); //remove

h2.classList.toggle('changeBg'); //toggle : removes the class name if it exits or adds if it doesn't exist.

console.log(h2.classList);











