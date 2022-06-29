// Lecture: Loops - Part 1


var arr = ['John', 'Nick', 'Bob', 'Michael', 'Mary'];

//print them manually:
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

//print using for loop:
 for(var i = 0; i < 5; i++) {

     console.log(arr[i]);

 }

console.log('');
console.log('for-loop example 2:');


for(var i = 0; i < arr.length; i++) {

    // console.log(arr[i]);
    if(arr[i] === 'Bob') {

        console.log(arr[i] + ' is my brother');
        // break;
        continue; //print all the items except Bob

    }

    console.log(arr[i]);

}

// console.log(arr);































