$(document).ready(function () {

    /* Declaring Global Variables */
    var secret = getRandomNumber(1, 100);
    console.log(secret);

    var guessCounter = 25;
    $('#count').text(guessCounter);


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
            compareToPrevious();
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

    function compareToPrevious() {
        /* Triggered when previous validated guess exists */
    }

    function storeGuesses(number) {
        /* Triggered after successful validation */
        $('#guessList').append('<li>' + parseInt($('#userGuess').val(), 10) + '</li>');
    }
    /* Invoking the functions */
    $('.new').on('click', newGame);

    $('#guessButton').on('click', function () {
        var guessedNumber = parseInt($('#userGuess').val(), 10);
        validateGuess(guessedNumber);
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
