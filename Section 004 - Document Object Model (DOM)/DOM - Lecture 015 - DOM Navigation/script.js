// Lecture: DOM Navigation


var listItem = document.getElementById('list-item'); 
console.log(listItem.parentNode); //list
console.log(listItem.parentNode.parentNode); //note-list
console.log(listItem.parentElement); //ul list
console.log(listItem.parentElement.style.background = 'orange');

console.log(listItem.childNodes); //NodeList
console.log(listItem.children); //HTML Collection

console.log(listItem.firstChild); //#text
console.log(listItem.firstElementChild); //directly paragraph

console.log(listItem.lastChild);
console.log(listItem.lastElementChild);

console.log(listItem.previousSibling); //#text
console.log(listItem.previousElementSibling); //First list element
console.log(listItem.nextElementSibling); //Third list element



















