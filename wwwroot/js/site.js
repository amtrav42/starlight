// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var call = function (e) {
    e.preventDefault();
    $.ajax({
        url: "/twilio/call",
        type: "POST",
        data: "",
        success: function (data) {
            alert("You have made the call");
        },
        error: function (xhr, ajaxOptions, thrownError) {
        },
        timeout: 15000
    });
};

$("#makeTheCall").click(call);

//Emoji response code
$("#cryLaugh").click(function() {
  console.log("click");
  $(this).toggleClass('animationCryLaugh');
});
$("#heartEyes").click(function() {
  console.log("click");
  $(this).toggleClass('animationHeartEyes');
});
$("#poop").click(function() {
  console.log("click");
  $(this).toggleClass('animationPoop');
});
$("#sad").click(function() {
  console.log("click");
  $(this).toggleClass('animationSad');
});
$("#shock").click(function() {
  console.log("click");
  $(this).toggleClass('animationShock');
});
//Countdown countdownTimer
// Set the date we're counting down to
    var nowDate = new Date();
    var countDownDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 15, 30, 00, 0);
    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();
     // Find the distance between now an the count down date
      var distance = countDownDate - now;

      if (distance < 1) {
        countDownDate = countDownDate.setDate(countDownDate.getDate()+1);
        distance = countDownDate - now;
      }

      // Time calculations for hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance%(1000 * 60))/ 1000);

      // Display the result in the element with id="demo"

      	document.getElementById("live-countdown").innerHTML = "The next live show will start in " + hours + "h "
      	+ minutes + "m " + seconds + "s "
    }, 1000);
