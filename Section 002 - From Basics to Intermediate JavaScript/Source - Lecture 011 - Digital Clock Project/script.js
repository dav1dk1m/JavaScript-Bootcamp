//Digital Clock Project
//DongYun Kim
//06-27-2022

function digitalClock() {

    var date = new Date();

	// hrs, mins, secs into a string values using ' '
    var hours = date.getHours() + '';
    var minutes = date.getMinutes() + '';
	var seconds = date.getSeconds() + '';

    var day = date.getDay(); //get date 

	//check the number of digits, if the length of the character is less than 2, we need to write zero before the digit
    if(hours.length < 2) {
        hours = '0' + hours;
    }

    if(minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if(seconds.length < 2) {
        seconds = '0' + seconds;
    }

    var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var clock = weekdays[day] + ' ' + hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = clock;

    // console.log(clock);

}

digitalClock();

setInterval(digitalClock, 1000); //sets interval of 1000 milliseconds

















