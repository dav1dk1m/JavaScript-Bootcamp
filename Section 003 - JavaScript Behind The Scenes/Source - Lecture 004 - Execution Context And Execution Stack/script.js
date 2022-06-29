// Lecture: Execution Context And Execution Stack

// print Nick, Bob, John
function a() {
  var name = 'John';
  b();
  console.log(name);
}

function b() {
  var name = 'Bob';
  c();
  console.log(name);
}

function c() {
  var name = 'Nick';
  console.log(name);
}

a();

// "Maximum call stack size exceeded" - repeating a
/*
function a() {
  a();
}

a();
*/












