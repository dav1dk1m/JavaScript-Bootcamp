// Lecture: Scope And Scope Chain

//global scope num1
var num1 = 5;
// console.log(num2 + num1); //undefined num2
// console.log(num1);

//local scope (function a) num2
function a() {
  num2 = 10;
  // num1 = 10;
  // console.log(num3 + num2 + num1); //undefined num3
  // console.log(num1);
	
//local scope (function b) num3
  function b() {
    var num3 = 15;
    // var num1 = 15;
    console.log(num3 + num2 + num1);
    // console.log(num1);
  }

  b();
}

a();

// console.log(num1);












