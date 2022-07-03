// Lecture: Get And Manipulate On Individual Elements - Part 2

// Second DOM method, which is used to select any of the individual HTML elements and to manipulate on them.
// querySelector('selector'): returns the first element that matches a specified CSS selector in the document


// var el = document.querySelector('ul');
// console.log(el); //returns the whole content
// console.log(el.textContent = 'Hello World'); //changes the content


var el = document.querySelector('#search-note'); //use pound sign to grab id 
console.log(el);


var el = document.querySelector('ul li');
console.log(el);

 var el = document.querySelector('ul li:nth-child(2)'); //grabs the children of ul li
 console.log(el); //finds 'Second note'

 console.log(el.querySelector('p .fa-times')); //parent 
