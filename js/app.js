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
	$(".new").click(function(){
		newGame()
	});


//Create a newGame function that resets all settings.

function newGame() {
	
	// Create new random number
	var $("userGuess") = null;

	// Reset number of guesses
	function autoNumber();
}


// Mystery number generator
function autoNumber(){
	autoNumber = Math.floor((Math.random() * 100) + 1);
}

// Is the guess hot or cold?
function numDifference(){
	
	var userGuess = $("#userGuess").val();
	var numDiff = Math.abs(userGuess - autoNumber);

	if (numDiff < 10) {
		$("#guessList").text("You are very hot").append();
	}

	else if (numDiff < 20) {
		$("#guessList").text("You are hot").append()
	}

	else if (numDiff < 30) {
		$("#guessList").text("You are warm").append()
	}

	else if (numDiff < 51) {
		$("#guessList").text("You are cold").append()
	}

	else {
		$("#guessList").text("You are very cold").append()
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

})



