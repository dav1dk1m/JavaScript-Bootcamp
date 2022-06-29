// Lecture: Arrays - Part 1


var arr = [
     'John', //0
     'Bob',  //1
     'Mary', //2
     10,     //3
     true,   //4
     [1, 2, 3], //5(1,2,3)

    function (name) { //6

		return 'Hello ' + name;

     }
 ];

//try each one
//console.log(arr);
//console.log(arr[0]);
//console.log(arr[1]);
//console.log(arr[5][1]);
console.log(arr[6](arr[2])); //Hello Mary


var arr = new Array(1, 'John', false);

console.log(arr);
