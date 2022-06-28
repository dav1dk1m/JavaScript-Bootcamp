// Lecture: Date Object


// var date = new Date('January 20, 2020 10:14:00');

// console.log(date);

var date = new Date();

var year = date.getFullYear();

var month = date.getMonth();

var x = date.setFullYear(1990);

date.setMonth(11); //set month to december

console.log(date);
console.log(year); //current year 2022
console.log(month); //print 5 which is june
console.log(x); //print milliseconds


