$(document).ready(function(){
	
var countDownDate = new Date("Dec 16, 2018 00:00:01").getTime();

var x = setInterval(myTimer, 1000);
var choice = 0;

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
	var daysLeft = days + Math.floor(choice);
	// Display the result in the element with id="demo"
	document.getElementById("count-down").innerHTML = daysLeft + " Days " + hours + " Hours "
  + minutes + " Minutes " + seconds + " Seconds";

	// If the count down is finished, write some text 
	if (tj < 0) {
		clearInterval(x);
		document.getElementById("count-down").innerHTML = "TJ 0";
	}
}

//Check for button clicks and change daysLeft
$( ".b16" ).click(function() {
choice = 0; 
});
$( ".b17" ).click(function() {
choice = 1;
});
$( ".b18" ).click(function() {
choice = 2;
});

});

