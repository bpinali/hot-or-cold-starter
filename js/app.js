$(document).ready(function () {

    /* Declaring Global Variables */
    var secret = getRandomNumber(1, 100);
    console.log(secret);

    var guessCounter = 0;


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
            compareGuessToSecret(secret, number);
            countGuesses(guessCounter);
            compareToPrevious();
            storeGuesses(number);
        }
    }

    function compareGuessToSecret(secret, number) {
        /* Triggered after successful validation */
    }

    function countGuesses(guessCounter) {
        /* Triggered after successful validation */
    }

    function compareToPrevious() {
        /* Triggered when previous validated guess exists */
    }

    function storeGuesses(number) {
        /* Triggered after successful validation */
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
