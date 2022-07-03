// Lecture: Get And Manipulate On Multiple Elements - Part 1

//getElementsByyClassName('class'): returns a collection of all elements in the document with specified class name. Collection is not an array.


var icons = document.getElementsByClassName('fa');
console.log(icons);

console.log(icons[0]);
console.log(icons[1]);

for(var i = 0; i < icons.length; i++) {
    console.log(icons[i]);
}

// icons.push('Hello'); //push is not a function
 var iconsArr = Array.from(icons); //
 console.log(iconsArr); //array
 console.log(icons); //HTMLCollection

iconsArr.push("Hello"); //pushes "Hello" inside the array
console.log(iconsArr);














