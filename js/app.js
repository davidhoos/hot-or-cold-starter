$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
})

// My Hot & Cold Game 

//Create a newGame function that resets all settings.
// function newGame()

function newGame() {
	// Reset number of guesses
	// Create new random number
}


// When a new game starts, a secret number between 1 and 100 
// is automatically generated for the visitor to guess. 

function autoNumber(){
	autoNumber = Math.floor((Math.random() * 100) + 1);
}

// 




// A function that takes the number difference and tells whether their guess is hot or cold.
// function hotOrCold()

function numDifference(){
	
	var userGuess = $("#userGuess").val();
	var numDiff = Math.abs(userGuess - autoNumber);

	if (numDiff < 10) {
		$("#guessList").text("You are very hot")
	}

	else if (numDiff < 20) {
		$("#guessList").text("You are hot")
	}

	else if (numDiff < 30) {
		$("#guessList").text("You are warm")
	}

	else if (numDiff < 51) {
		$("#guessList").text("You are cold")
	}

	else {
		$("#guessList").text("You are very cold")
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





