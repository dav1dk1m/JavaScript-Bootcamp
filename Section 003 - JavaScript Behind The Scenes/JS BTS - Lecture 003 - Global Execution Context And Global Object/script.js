// Lecture: Global Execution Context And Global Object


console.log(document.getElementById('header').innerHTML);
console.log(window);
console.log(this);

var name = 'John';
console.log(window);
// print John in 3 differnt ways
console.log(name);
console.log(window.name);
console.log(this.name);

//calling function
function a() {
  return 'Hello';
}

console.log(window);

a();

console.log(window.a());

//calling object 
var obj = {
  name: 'Nick',
  b: function() {
    return 'Hi'
  }
};

console.log(obj.name);
console.log(obj.b());
console.log(name);
