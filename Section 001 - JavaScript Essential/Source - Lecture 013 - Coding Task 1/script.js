// DongYun Kim
// June 27, 2022

// Lecture - Coding Task 1

/*

*************************CODING TASK No 1*********************************

1. Create variables to represent scores of exams for John and Nick and set values   80 and 45;
2. Create variable to set the lower limit for passing an exam and assign to it value as 51;
3. Write the condition in if statement, which will check if both students have passed an exam and log 
   the result in console;
4. Use else if statement in order to check if one of the students has passed an exam and log the result 
   in console;
5. Use else statement in order to display in console that both students have failed;
6. In case of passing the exam by one of the students, find out which one was that and display in console 
   as an additional information the student name and his points
7. Test all the possible cases (a. both students passed; b. John passed and Nick failed; c. Nick passed and 
  John failed; d. both students failed).
*/

// SOLUTION:

//var john = 30;
var john = 80;
var nick = 45;
//var nick =99;

var score = 51;
if (score <= john && score <= nick) {
        console.log('Both Passed an exam');
}
else if (john >= score || nick >= score) {
         console.log ('One of them passed an exam');
    
    if (john > nick) {
        console.log ('- John passed an exam with ' + john + ' points')
    }
    else{
        console.log ('- Nick passed an exam with ' + nick + ' points')
    }
}
else
    {
        console.log ('Both failed an exam');
    }







