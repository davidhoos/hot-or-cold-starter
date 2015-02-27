$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// Call +NewGame function when clicked
	$(".newGame").click(function(){
		newGame();
	});

	// When guess button is clicked, functions are run.
	$("#guessButton").click(function(evt) {
		numDifference();
		evt.preventDefault();
		countUp();
	});

	autoNumber();

});



// Mystery number generator
function autoNumber(){
	randomNumber = Math.floor((Math.random() * 100) + 1);
}


// Is the guess hot or cold?

// The game should also supply users with a list of the numbers they have guessed
// so far. The CSS for this game is set up in such a way that you can simply add 
// each guessed number as an <li> to ul#guessList

function numDifference(){
	
	var userGuess = $("#userGuess").val();
	var numDiff = Math.abs(userGuess - randomNumber);

	if (numDiff == 0) {
		$("#guessList").append("<li>You are correct!</li>");
	}

	else if (numDiff < 10) {
		$("#guessList").append("<li>" + userGuess + " - You are very hot</li>");
	}

	else if (numDiff < 20) {
		$("#guessList").append("<li>" + userGuess + " - You are hot</li>");
	}

	else if (numDiff < 30) {
		$("#guessList").append("<li>" + userGuess + " - You are warm</li>");
	}

	else if (numDiff < 51) {
		$("#guessList").append("<li>" + userGuess + " - You are cold</li>");
	}

	else {
		$("#guessList").append("<li>" + userGuess + " - You are very cold</li>");
	}

}

//Guess feedback goes to: div#feedback

	// Move the counter back to zero
function resetCounter() {
        $('#count').html(0);
        count = 0;
}

// The game should track how many guess the user has made. Feedback about this 
// should appear in span#count (which defaults to 0, when the page loads).
var  count = 0;

function countUp() {
	// Add one to the counter each time this function is run
        count++;
        $('#count').html(count);
        console.log;
}


//Create a newGame function that resets all settings.

function newGame() {
	location.reload();
}




