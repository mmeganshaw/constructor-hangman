var Word = ('./Word.js');
var inquirer = require('inquirer');

// Because I like flowers and it's Spring
var Flowers = ['rose', 'tulips', 'orchids', 'sunflower', 'lilies', 'daffodils', 'marigold','lotus', 'dahlia', 'carnation', 'chrysanthemums', 'iris', 'lilac', 'peony', 'magnolia','lavendar', 'poinsettia', 'snapdragon', 'freesia', 'daisies'];


var pickaflower = function () {
	return Flowers[Math.floor(Math.random() * Flowers.length) + 1];
}

var abc = 'abcdefghijklmnopqrstuvwxyz'
var guessedLetters = '';


console.log("Are you ready to play hangman? The theme is flowers. Guess the flower!");

var gameWord = new Word (pickaflower());

for (var char = 0; char < gameWord.wordSting.length; char++) {
	chosenWord.addtoWordArray(ltrInString, false); 
};

function startGame(remainingGuesses) {
	if (remainingGuesses > 0) {
		console.log(gameWord.wordDisplay());
		inquirer.prompt([{
			name: 'ltrInput',
			message: 'Guess a letter',
			validate: function (value) {
				var value = value.toLowerCase();
				return alphabet.includes(value.toLowerCase()) && !guessedLetters.includes(value);
			}
		}]).then(function (answer) {
			gameWord.checkAllLtrs(answer.ltrInput.toLowerCase());
			guessedLetters +=answer.ltrInput.toLowerCase();

			if (!gameWord.wordString.includes(answer.ltrInput.toLowerCase())) {
                remainingGuesses--;
                console.log('INCORRECT!');
                console.log(remainingGuesses + ' guesses remain');
                playGame(remainingGuesses);
            } else {
                console.log('CORRECT!');
    
                if (!gameWord.wordArray.join('')=== gameWord.wordString) {
                    playGame(remainingGuesses);
                } else {
                    console.log('Good flower guessing! The word was ' + gameWord.wordString);
                }
            }
        });

    } else {
        return console.log("Aww dang. you lost, but the word was " + gameWord.wordString);
    }
};
playGame(5);
