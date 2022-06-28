// Lecture: Functions - Part 1


function funName() {
    
    console.log('Hello World!');

}

funName();

function passExam(name, score) {

    var passUni = 71;

    var passColl = 51;

    if(score >= passUni) {

        console.log(name + ' has enrolled in University with ' + score + ' points');

    } else if(score >= passColl) {

        console.log(name + ' has enrolled in College with ' + score + ' points');

    } else {

        console.log(name + ' has failed');

    }

}

function calcScore(quizScore, assayScore) {

    var score = quizScore + assayScore;

    return score;

}

passExam('John', calcScore(40, 30)); //function calcScore with two integers (40 +30 = 70)
//John has enrolled in College with 70 points

passExam('Mary', 65);
//Mary has enrolled in College with 65 points

passExam('Bob', 45);
//Bob has failed
