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
	});

});

//Create a newGame function that resets all settings.

function newGame() {
	
	// Create new random number
	$("#userGuess").val("");

	// Reset number of guesses
	autoNumber();



}


// Mystery number generator
function autoNumber(){
	randomNumber = Math.floor((Math.random() * 100) + 1);
	console.log("test");
}

// Is the guess hot or cold?
function numDifference(){
	
	var userGuess = $("#userGuess").val();
	var numDiff = Math.abs(userGuess - randomNumber);
	if (numDiff == 0) {
		$("#guessList").append("<li>You are correct!</li>");
	}

	else if (numDiff < 10) {
		$("#guessList").append("<li>You are very hot</li>");
	}

	else if (numDiff < 20) {
		$("#guessList").append("<li>You are hot</li>");
	}

	else if (numDiff < 30) {
		$("#guessList").append("<li>You are warm</li>");
	}

	else if (numDiff < 51) {
		$("#guessList").append("<li>You are cold</li>");
	}

	else {
		$("#guessList").append("<li>You are very cold</li>");
	}
}

//Guess feedback goes to: div#feedback




// The game should track how many guess the user has made. Feedback about this 
// should appear in span#count (which defaults to 0, when the page loads).

// The game should also supply users with a list of the numbers they have guessed
// so far. The CSS for this game is set up in such a way that you can simply add 
// each guessed number as an <li> to ul#guessList



// You’ll need to ensure that users provide valid inputs. Note that the guess text 
// input field has the HTML 5 required flag set, so you won’t have to worry about 
// blank guesses being submitted (if the user submits a blank guess, they'll be 
// prompted to supply an input). However, you will need to write code that ensures 
// that the user has supplied a numeric input between 1 and 100.


// The starter template already contains a button in the upper right hand corner for 
// starting a new game, however, this button does not currently do anything. You’ll 
// need to write code that allows users to start a new game without making additional 
// calls to the server. Clicking “New Game” should trigger the JavaScript function 
// that starts a new game.




