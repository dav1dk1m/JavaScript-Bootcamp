// Lecture: Get And Manipulate On Multiple Elements - Part 3

// querySelectorAll('selector') : Returns all elements in the document that matches a specified CSS selector (You can select multiple elemtns with multiple selectors separated by commas).


var lis = document.querySelectorAll('li, h2, #hide-list');
console.log(lis);
// // lis.push('Hello');

// lis.forEach(function(li) {
//     console.log(li);
// });

// changing the text content of the items into Hello World
Array.from(lis).forEach(function(li) {
    li.textContent = "Hello World";
});








