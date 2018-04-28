var Letter = require('./letter.js');

var Word = function (wordString) {
	this.wordString = wordString;
	this.wordArray = [];
	this.addtoWordArray = function(character,guessed) {
		this.wordArray.push(new Letter(character,guessed));
	};
	this.wordDisplay = function () {
		return this.wordArray.join(' ');
	};
	this.checkAllletters = function (ltrInput) {
		for (var ltrIndex = 0; ltrIndex <this.wordArray.length; ltrIndex++) {
			this.wordArray[ltrIndex]updateGuess(ltrInput);
		};
	};
};

module.exports = Word;