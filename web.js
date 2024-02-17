// Set the date we're counting down to
var countDownDate = new Date("Nov 16, 2023 00:00:00").getTime();

// Update the count down every 1 second
var countdownFunction = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the time remaining until the countdown date
    var timeRemaining = now - countDownDate  ;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    // Display the results in the respective spans
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    
    
    }
)

