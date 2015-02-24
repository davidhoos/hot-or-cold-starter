
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

// When the page loads, JavaScript should start a new game.
// Since you’ll need to be able to start a new game when the'
//'user clicks the “New Game” button, you’ll want to create 
// newGame function that does everything necessary to start
// a new game.

// function newGame()

$("new").clear(){

})


// When a new game starts, a secret number between 1 and 100 
// should be generated that the user will have to guess. You 
// should write a named function that takes care of this.

function autoNumber(){
	randomNumber = Math.floor((Math.random() * 100) + 1);
}



// function secretNumber()

$("userGuess")


function numDifference(){

	var numDiff = Number($(userGuess).text()) - Number($(autoNumber).text());

	// Write a function that pulls the number difference and tells whether they are hot or cold based on how large the number.
	// function hotOrCold()

	if (numDiff > 50) {
		console.log ("You are very cold")
	}

	else if (numdiff < 50 && > 30) {
		console.log ("You are cold")
	}

	else if (numdiff < 30 && > 20) {
		console.log ("You are warm")
	}

	else if (numdiff < 20 && > 10) {
		console.log ("You are hot")
	}

	else if (numdiff < 10 && > 1) {
		console.log ("You are very hot")
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




});


