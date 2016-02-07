$(document).ready(function () {

    /* Declaring Global Variables */
    var secret = getRandomNumber(1, 100);
    // console.log(secret);

    var guessCounter = 25;
    $('#count').text(guessCounter);

    var oldGuess = 0;


    /* Function Definitions */
    function newGame() {
        /* Triggered on click of New Game button */
        document.location.reload(true);
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function validateGuess(number) {
        /* Triggered by clicking Guess button */
        if (isNaN(number)) {
            alert("You must enter a number to play!");
        } else if ((number < 0) || (number > 100)) {
            alert("Number must be between 1 and 100!");
        } else {
            guessCounter--;
            compareGuessToSecret(secret, number);
            countGuesses(guessCounter);
            storeGuesses(number);

            if (guessCounter <= 0) {
                $('#feedback').text('Game Over!');
                document.getElementById("userGuess").disabled = true;
                document.getElementById("guessButton").disabled = true;
                alert('The secret number was ' + secret + '! Try harder next time!');

            }
        }
    }

    function compareGuessToSecret(secret, number) {
        /* Triggered after successful validation */
        var difference = Math.abs(secret - number);
        if (difference >= 50) {
            $('#feedback').text('Freezing Cold!');
        } else if (difference >= 30 && difference <= 49) {
            $('#feedback').text('Cold!');
        } else if (difference >= 20 && difference <= 29) {
            $('#feedback').text('Warm!');
        } else if (difference >= 10 && difference <= 19) {
            $('#feedback').text('Hot!');
        } else if (difference >= 5 && difference <= 9) {
            $('#feedback').text('Very Hot!');
        } else if (difference >= 1 && difference <= 4) {
            $('#feedback').text('Blazing Hot!!');
        } else {
            $('#feedback').text('You got it. Way to go!');
        }
    }

    function countGuesses(guessCounter) {
        /* Triggered after successful validation */
        $('#count').text(guessCounter);
        // console.log(guessCounter);

    }

    function compareToPrevious(oldGuess, newGuess, secret) {
        /* Triggered when previous validated guess exists */
        var oldDifference = Math.abs(secret - oldGuess);
        var newDifference = Math.abs(secret - newGuess);
        if (oldDifference > newDifference) {
            var compareToPreviousOutput = '...and getting hotter.';
        } else if (oldDifference < newDifference) {
            var compareToPreviousOutput = '...and getting colder.';
        } else {
            var compareToPreviousOutput = '...and staying the same temperature.';
        }
        // console.log(compareToPreviousOutput);
        $('#relative-feedback').text(compareToPreviousOutput);

    }

    function storeGuesses(number) {
        /* Triggered after successful validation */
        $('#guessList').append('<li>' + parseInt($('#userGuess').val(), 10) + '</li>');
    }
    /* Invoking the functions */
    $('.new').on('click', newGame);

    $('#guessButton').on('click', function () {
        var guessedNumber = parseInt($('#userGuess').val(), 10);
        var newGuess = guessedNumber;
        // console.log("New Guess:" + newGuess);
        validateGuess(guessedNumber);
        // console.log("Old Guess:" + oldGuess);
        if (oldGuess != 0) {
            compareToPrevious(oldGuess, newGuess, secret);
        }
        oldGuess = newGuess;
        $('#userGuess').val('');
    });

    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });

});
