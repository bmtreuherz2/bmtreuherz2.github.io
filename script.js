// Figure out how much time is left
var startDate = new Date();
var endDate = new Date("08/10/2017");
var timeRemaining = (endDate.getTime() - startDate.getTime()) / 1000;


var clock = new FlipClock($('.clock'), timeRemaining, {

	// Create a minute counter
	clockFace: 'DailyCounter',
  countdown: true,

	// The onStart callback
	onStart: function() {
		// Do something
	},

	// The onStop callback
	onStop: function() {
		// Do something
	},

	// The onReset callback
	onReset: function() {
		// Do something
	}
});

$(document).ready(function() {
    checkWindowSize();

    $('#show-test-btn').click(function(){
      $('#show-test-btn-container').css("display", "none");
      $('#test-results').css("display", "flex");

    })
});

$(window).resize(function() {
    checkWindowSize();
});

var checkWindowSize = function(){
  console.log(window.innerWidth);
  if(window.innerWidth < 650){
    $('.resizeable-container').addClass('size-small');
  } else if (window.innerWidth > 650){
    $('.resizeable-container').removeClass('size-small');
  }
}
