$(document).ready(function(){
	
var countDownDate = new Date("December 16, 2018 13:20:00 GMT+02:00").getTime();

var x = setInterval(myTimer, 1000);

function myTimer() {
	
	// Get todays date and time
	var now = new Date().getTime();
	
	// Find the time between now and the count down date
	var tj = countDownDate - now;
	
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(tj / (1000 * 60 * 60 * 24));
	var hours = Math.floor((tj % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((tj % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((tj % (1000 * 60)) / 1000);
	var weeks = (days % 7);

	// Display the result in the element with id="demo"
	document.getElementById("count-down").innerHTML = days + " Days " + hours + " Hours "
  + minutes + " Minutes " + seconds + " Seconds";
	
	document.getElementById("weeks-left").innerHTML = "Weeks: " + weeks;

	// If the count down is finished, write some text 
	if (days < 7) {
		document.getElementById("weeks-left").innerHTML = "LAST WEEK!";
	}
	if (tj < 0) {
		clearInterval(x);
		document.getElementById("count-down").innerHTML = "TJ 0";
		document.getElementById("weeks-left").innerHTML = "WEEKS: 0";
	}
}
	
});
