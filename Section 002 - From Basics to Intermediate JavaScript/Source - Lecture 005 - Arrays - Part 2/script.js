// Lecture: Arrays - Part 2

var colors = ['white', 'black', 'red'];

colors[1] = 'green';

colors.push('blue'); //add it to last one

colors.pop(); //removes the last one


//shift & unshift
colors.shift(); //removes the first one

colors.unshift('purple'); //add it to beginning of an array


//indexOf
console.log(colors.indexOf('brown')); //return -1 no items found

if(colors.indexOf('blue') === -1) { //if blue doesn't exist

    colors.push('blue'); //push blue 

    console.log(colors); //print [purple, green, red, blue]

}





















