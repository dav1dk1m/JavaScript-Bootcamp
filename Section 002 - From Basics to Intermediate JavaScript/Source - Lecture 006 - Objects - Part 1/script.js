// Lecture: Objects - Part 1


var person = new Object();

var job = 'profession';

var name = 'firstname';

//person.name = 'John';

//person.name = 'Bob'; //changed to bob




person.firstname = 'John';

person.lastname = 'Smith';

person[job] = 'instructor'; //sqr operator


person.son = new Object();

person.son.name = 'Nick';

person.son.age = 5;


console.log(person);


console.log(person.firstname); //dot operator

console.log(person['lastname']); //square operator


